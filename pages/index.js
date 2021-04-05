import useToken from '@utils/useToken'
import React from 'react'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'
import Playlists from '@components/home/Playlists'
import fetchAPI from '@utils/fetchAPI'
import Layout from '@components/Layout'
const Page = ({ playlists, me }) => {
  const { display_name, images } = me

  return (
    <Layout me={[me]}>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.main}>
        {!!playlists && <Playlists playlists={playlists} />}
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
    return {
      props: {
        me: me,
        playlists: playlists,
      },
    }
  })
}

export default Page
