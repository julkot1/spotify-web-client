import { useState } from 'react'

const sortFunc = (field, desc) => (a, b) =>
  desc ? (a[field] > b[field] ? 1 : -1) : a[field] < b[field] ? 1 : -1
const useSort = () => {
  const [sort, setSort] = useState({ field: null, desc: null })
  const setSortingFunc = (field) => {
    const f = sort.field === field && sort.desc === false ? null : field
    const d = f === null ? null : f === field ? !sort.desc : false
    setSort({
      field: f,
      desc: d,
    })
  }
  return [sort, setSortingFunc]
}
export default sortFunc
export { useSort }
