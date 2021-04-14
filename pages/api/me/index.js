import useSpotify from '@utils/useSpotify'

export default async (req, res) => {
  const { token } = req.query
  res.json(
    await useSpotify(
      token,
      (s) => s.getMe(),
      (d) => d.body
    )
  )
}
