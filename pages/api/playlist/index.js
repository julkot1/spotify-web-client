import useSpotify, { defaultPreFunc } from '@utils/useSpotify'
export default async (req, res) => {
  const query = req.query
  res.json(await getPlaylistInfo(query))
}

const getPlaylistInfo = async ({ token, id }) => {
  const dataProcess = async ({
    body,
    body: {
      name,
      description,
      owner: { display_name },
      owner,
      tracks: { total },
      images,
    },
  }) => {
    const me = await getMe(token)
    const d = await getData(token, async (s) =>
      s.areFollowingPlaylist(owner.id, id, [me])
    )
    const isOvner = (await getMe(token)) === owner.id

    return {
      name,
      desc: description,
      owner: display_name,
      totalTracks: total,
      img: images[0].url,
      isFollowing: d,
      isOvner: isOvner,
    }
  }
  return await useSpotify(token, (s) => s.getPlaylist(id), dataProcess)
}
const getData = async (token, func) => {
  return await useSpotify(token, func, ({ body }) => body[0])
}

const getMe = async (token) =>
  await useSpotify(
    token,
    (s) => s.getMe(),
    ({ body: { id } }) => id
  )
