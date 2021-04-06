import Layout from '@components/Layout'
import FolderItems from '@components/folder/FolderItems'
import fetchAPI from '@utils/fetchAPI'
import useToken from '@utils/useToken'
import { isNull } from '@utils/errorHandler'
import Error from 'next/error'
import { useState } from 'react'
const Folder = ({ me, items, error, id }) => {
  if (error) return <Error></Error>
  return (
    <Layout me={[me]} title="Folder">
      <FolderItems url={`/folder/${id}`} tiles={items} />
    </Layout>
  )
}
export default Folder
export const getServerSideProps = async (ctx) => {
  const { token, isTokenProvided } = await useToken(ctx)
  return isTokenProvided(async () => {
    const params = { token: token }
    const me = await fetchAPI('me', params)
    const items = await getItems(params, ctx.params.id, me.id)
    return {
      props: {
        me: me,
        items: items,
        error: isNull(me, items),
        id: ctx.params.id,
      },
    }
  })
  return { props: { error: true } }
}
const getItems = async ({ token }, id, userId) => {
  switch (id) {
    case 'myplaylists':
      const data = await fetchAPI('me/playlists', {
        token: token,
        id: userId,
      })
      return data.map(({ name, owner, id, img }) => {
        return { title: name, desc: owner, img: img, type: 'playlist', id: id }
      })
  }
  return null
}
