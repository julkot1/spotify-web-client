import useSpotify from '@utils/useSpotify'

export default async (req, res) => {
  const { token } = req.query
  const process = ({body:{items}})=>items.map(({name, id, images, genres})=>({name, id, images, genres}))
  const artists = await useSpotify(token, (spotify) => spotify.getMyTopArtists({limit: 10}), process)
  res.json(artists)
}
