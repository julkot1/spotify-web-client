import { getItems, defaultPreFunc } from '@utils/useSpotify'

const a = async (req, res) => {
  const { token, id } = req.query
  const process = ({ name, owner, tracks, id }) => ({
    name: name,
    owner: owner.display_name,
    tracks: tracks.total,
    id: id,
  })
  res.json(
    await getItems(
      token,
      (spotify, offset) => spotify.getUserPlaylists(id, { offset: offset }),
      defaultPreFunc,
      process
    )
  )
}

export default a
