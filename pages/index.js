import useToken from '@utils/useToken'
import React from 'react'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'
import Playlists from '@components/Playlists'
import fetchAPI from '@utils/fetchAPI'
const Page = ({ name, img, playlists }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.main}>
        <p>Welcome {name}</p>
        <img src={img} width="100px" height="100px"></img>

        {!!playlists && <Playlists playlists={playlists} />}
      </main>
    </>
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
        name: me.display_name,
        img: me.images[0].url,
        playlists: playlists,
      },
    }
  })
}

export default Page
