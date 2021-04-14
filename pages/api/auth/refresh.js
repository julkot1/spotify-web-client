import SpotifyWebApi from 'spotify-web-api-node'
import Cookies from 'cookies'

export default async (req, res) => {
  const c = new Cookies(req, res)
  const refreshToken = c.get('refresh_token')
  const client = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
    refreshToken,
  }

  const spotifyApi = new SpotifyWebApi(client)
  const data = await spotifyApi.refreshAccessToken()
  const d = new Date(Date.now())
  d.setSeconds(d.getSeconds() + data.body.expires_in)
  c.set('access_token', data.body.access_token, { path: '/', expires: d })

  res.redirect('/')
}
