import useToken from '@utils/useToken'
import React from 'react'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'
import Playlists from '@components/home/Playlists'
import fetchAPI from '@utils/fetchAPI'
import Layout from '@components/Layout'
import styled from 'styled-components'
const StyledPageMain = styled.div`
  margin: 2rem;
`

const Page = ({ playlists, me }) => {
  return (
    <Layout me={[me]}>
      <Head>
        <title>Home</title>
      </Head>
      <StyledPageMain>
        {!!playlists && <Playlists playlists={playlists} />}
      </StyledPageMain>
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
