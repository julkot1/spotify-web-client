const isNull = (...elements) => {
  for (const element of elements) {
    if (element == null) return true
  }
  return false
}

export { isNull }
