const useToken = async ({ req, res }) => {
  const access_token = req.cookies.access_token
  const refresh_token = req.cookies.refresh_token

  if (!refresh_token) {
    res.writeHead(307, { Location: '/login' })
    res.end()
  } else if (!access_token) {
    console.log('de')
    res.writeHead(307, { Location: '/api/auth/refresh' })
    res.end()
  }

  const tokenProvided = (fun) =>
    req.cookies.access_token != null ? fun() : null
  return { token: req.cookies.access_token, isTokenProvided: tokenProvided }
}
export default useToken
