import useToken from '@utils/useToken'
import React from 'react'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'
import Playlists from '@components/home/Playlists'
import fetchAPI from '@utils/fetchAPI'
import Layout from '@components/Layout'
import TopArtists from '@components/home/topArtists/TopArtists'
const Page = ({ playlists, me, topArtists }) => {
  return (
    <Layout me={[me]}>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.main}>
        {!!playlists && <Playlists playlists={playlists} />}
        {!!topArtists&&<TopArtists artists={topArtists}/>}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (ctx) => {
  const { token, isTokenProvided } = await useToken(ctx)

  return isTokenProvided(async () => {
    const me = await fetchAPI('me', { token: token })
    const playlists = await fetchAPI('me/playlists', {
      token: token,
      id: me.id,
    })
    const topArtists = await fetchAPI('me/artists', {token: token})
    return {
      props: {
        me: me,
        playlists: playlists,
        topArtists: topArtists
      },
    }
  })
}

export default Page
