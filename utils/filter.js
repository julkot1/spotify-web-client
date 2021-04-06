const filter = (data, keys, q) => {
  if (q == null) return data
  return data.filter((item) => {
    for (const key of keys) {
      if (item[key].toLowerCase().includes(q.toLowerCase())) return true
    }
    return false
  })
}

export default filter
