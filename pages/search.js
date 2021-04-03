import fetchAPI from '@utils/fetchAPI'
import useToken from '@utils/useToken'

const { default: Layout } = require('@components/Layout')

const Search = ({ me }) => {
  return <Layout me={[me]}></Layout>
}
export default Search

export const getServerSideProps = async (ctx) => {
  const { token, isTokenProvided } = await useToken(ctx)

  return isTokenProvided(async () => {
    const me = await fetchAPI('me', { token: token })
    const playlists = await fetchAPI('me/playlists', {
      token: token,
      id: me.id,
    })
    return {
      props: {
        me: me,
        playlists: playlists,
      },
    }
  })
}
