import Layout from '@components/Layout'
import { isNull } from '@utils/errorHandler'
import fetchAPI from '@utils/fetchAPI'
import useToken from '@utils/useToken'
import Link from 'next/link'
import styles from '@styles/Playlist.module.scss'
import Error from 'next/error'
import PlaylistOverview from '@components/playlist/PlaylistOverview'
import Tracks from '@components/playlist/Tracks'
const Playlist = ({ playlist, tracks, me, error }) => {
  if (error) return <Error></Error>
  const { desc, name, owner, totalTracks } = playlist

  return (
    <Layout me={[me]} title={`playlist - ${name}`}>
      <div className={styles.playlist}>
        <PlaylistOverview playlist={playlist} />
        <Tracks tracks={tracks} />
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
