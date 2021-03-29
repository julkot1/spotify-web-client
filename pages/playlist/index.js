import playlists from '@pages/api/playlist'
import fetchAPI from '@utils/fetchAPI'
import useToken from '@utils/useToken'
import Head from 'next/head'
import Link from 'next/link'

const Playlist = ({ playlist, tracks }) => {
  const { desc, name, owner, totalTracks } = playlist

  return (
    <div>
      <Head>
        <title>playlist - {name}</title>
      </Head>
      <Link href="/">back</Link>
      <p>name: {name}</p>
      <p>description: {desc}</p>
      <p>owner: {owner}</p>
      <p>tracks: {totalTracks}</p>
      <div>
        <ul>
          {tracks.map(({ name, album, artists }) => (
            <li>{`${name} from ${album} by ${artists.reduce(
              (acc, cur) => `${acc}, ${cur}`
            )}`}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export const getServerSideProps = async (ctx) => {
  const { token, isTokenProvided } = await useToken(ctx)
  const id = ctx.req.__NEXT_INIT_QUERY.id
  return isTokenProvided(async () => {
    const params = { token: token, id: id }
    const playlist = await fetchAPI('playlist', params)
    const tracks = await fetchAPI('playlist/tracks', params)
    return { props: { playlist: playlist, tracks: tracks } }
  })
}
export default Playlist
