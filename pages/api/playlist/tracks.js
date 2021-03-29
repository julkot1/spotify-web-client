import useSpotify, { getItems, defaultPreFunc } from '@utils/useSpotify'

export default async (req, res) => {
  const query = req.query
  res.json(await getTracks(query))
}
const getTracks = async ({ token, id }) => {
  const mapTracks = ({ track: { name, album, artists } }) => {
    return {
      name,
      album: album.name,
      artists: artists.map(({ name }) => name),
    }
  }
  return await getItems(
    token,
    (s, offset) => s.getPlaylistTracks(id, { offset: offset }),
    defaultPreFunc,
    mapTracks
  )
}
//  res.json()
