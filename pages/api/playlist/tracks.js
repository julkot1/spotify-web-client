import useSpotify, { getItems, defaultPreFunc } from '@utils/useSpotify'

export default async (req, res) => {
  const query = req.query
  res.json(await getTracks(query))
}
const getTracks = async ({ token, id }) => {
  let d = 0
  const mapTracks = ({ track: { name, album, artists, id, duration_ms } }) => {
    d += duration_ms
    return {
      name,
      id,
      img: album.images,
      duration: duration_ms,
      album: album.name,
      artists: artists.map(({ name }) => name),
    }
  }
  return {
    items: await getItems(
      token,
      (s, offset) => s.getPlaylistTracks(id, { offset: offset }),
      defaultPreFunc,
      mapTracks
    ),
    duration_ms: d,
  }
}
