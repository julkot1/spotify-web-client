const fetchAPI = async (url, params) => {
  try {
    const rawData = await fetch(getApiUrl(url, params))
    return await rawData.json()
  } catch (err) {
    console.log(err)
    return null
  }
}
const getApiUrl = (url, params) => {
  const urlParams = Object.keys(params)
    .map((k) => `${k}=${params[k]}`)
    .reduce((t, p) => t + '&' + p)
  return process.env.API_URL + url + '?' + urlParams
}
export default fetchAPI
