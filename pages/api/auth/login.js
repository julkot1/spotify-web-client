export default (req, res) => {
  const scopes =
    'ugc-image-upload user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative user-read-email user-read-private'
  const redirect_uri = 'http://localhost:3000/api/auth/callback'
  res.redirect(
    `https://accounts.spotify.com/authorize?response_type=code&client_id=${
      process.env.CLIENT_ID
    }&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(
      redirect_uri
    )}`
  )
}
