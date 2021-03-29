import client from '@utils/client'
import SpotifyWebApi from 'spotify-web-api-node'

const createSpotify = (token) => {
  const spotify = new SpotifyWebApi(client)
  spotify.setAccessToken(token)
  return spotify
}

const get = async (getFunc, spotify) => await getFunc(spotify)
const extractData = async (rawData, dataProcessFunc) =>
  await dataProcessFunc(rawData)

const useSpotify = async (token, getFunc, processFunc) =>
  await extractData(await get(getFunc, createSpotify(token)), await processFunc)

export default useSpotify

const getOffset = (url) => new URL(url).searchParams.get('offset')
const getItems = async (token, getFunc, preprocessFunc, processFunc) => {
  const spotify = createSpotify(token)
  const reduce = async (total, offset) => {
    const { items, next } = preprocessFunc(await getFunc(spotify, offset))
    total = [...total, ...items]
    return !!next ? await reduce(total, getOffset(next)) : total
  }
  const data = await reduce([], 0)
  return data.map(processFunc)
}
const defaultPreFunc = ({ body: { items, next } }) => {
  return {
    items,
    next,
  }
}
export { getItems, defaultPreFunc }
