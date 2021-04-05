import useSpotify from '@utils/useSpotify'
export default async (req, res) => {
  const query = req.query
  res.json(await getPlaylistInfo(query))
}
const getPlaylistInfo = async ({ token, id }) => {
  const dataProcess = ({
    body,
    body: {
      name,
      description,
      owner: { display_name },
      tracks: { total },
    },
  }) => {
    return {
      name,
      desc: description,
      owner: display_name,
      totalTracks: total,
      tracks: [],
    }
  }
  return await useSpotify(token, (s) => s.getPlaylist(id), dataProcess)
}
