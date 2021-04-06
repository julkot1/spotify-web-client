import Layout from '@components/Layout'
import playlists from '@pages/api/playlist'
import { isNull } from '@utils/errorHandler'
import fetchAPI from '@utils/fetchAPI'
import useToken from '@utils/useToken'
import Head from 'next/head'
import Link from 'next/link'
import Error from 'next/error'
const Playlist = ({ playlist, tracks, me, error }) => {
  if (error) return <Error></Error>
  const { desc, name, owner, totalTracks } = playlist

  return (
    <Layout me={[me]}>
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
    </Layout>
  )
}
export const getServerSideProps = async (ctx) => {
  const { token, isTokenProvided } = await useToken(ctx)
  const id = ctx.params.id
  if (!!id) {
    return isTokenProvided(async () => {
      const params = { token: token, id: id }
      const playlist = await fetchAPI('playlist', params)
      const tracks = await fetchAPI('playlist/tracks', params)
      const me = await fetchAPI('me', params)
      return {
        props: {
          playlist: playlist,
          tracks: tracks,
          me: me,
          error: isNull(params, playlist, tracks, me),
        },
      }
    })
  }
  return { props: { error: true } }
}
export default Playlist
