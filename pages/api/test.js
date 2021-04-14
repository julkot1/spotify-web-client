import client from '@utils/client'
import SpotifyWebApi from 'spotify-web-api-node'

export default async (req, res) => {
  const spotify = new SpotifyWebApi(client)
  spotify.setAccessToken(
    'BQAjA2KkeqANjLxAQ3Ga_0d8E2bTSrIQwY9FrZKOrlED7TflbonptTq7ZjDQfPBrohXHy583F8EkTm8OR7G-DYdf8wK10H6ybCIDE1DEGmBJdmJ0zny3NSI7spM5tulaWyt8M0P2y0zwxkcFA4itv2YnIqjhvqyGkrRvh4r3Sbm6_SvLeejbx8BcFv2Xr0cFjhmRO6PV2Aiq7MRDVLvMzkP2fNfPpYneZLtDPv9anZuQBHsTsoJ-zg-ygZjLPEjD9fkH'
  )
  res.json(await spotify.getTrack('4BH8EuPAxeFAh1rSWtnGdD'))
}
