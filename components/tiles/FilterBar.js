import { useRouter } from 'next/router'
const FilterBar = ({ setQ }) => {
  const router = useRouter()

  const change = ({ target: { value } }) => setQ(value)
  return <input type="text" placeholder="filter" onChange={change} />
}

export default FilterBar
