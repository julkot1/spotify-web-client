import SpotifyWebApi from 'spotify-web-api-node'
import Cookies from 'cookies'

export default async (req, res) => {
  const spotify = new SpotifyWebApi(client)
  const data = await spotify.authorizationCodeGrant(req.query.code)
  const { access_token, refresh_token, expires_in } = data.body
  const d = new Date(Date.now())

  d.setSeconds(d.getSeconds() + expires_in)

  const c = new Cookies(req, res)
  c.set('access_token', access_token, {
    path: '/',
    expires: d,
  })
  c.set('refresh_token', refresh_token, { path: '/' })
  res.redirect('/')
}
const client = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
}
