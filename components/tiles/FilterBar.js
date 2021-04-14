import styles from '@styles/Components.module.scss'
import { AiOutlineSearch as Icon } from 'react-icons/ai'
const FilterBar = ({ setQ, Input, container }) => {
  const change = ({ target: { value } }) => setQ(value)
  return (
    <div className={`${styles.filter} ${container}`}>
      <Icon />
      <Input
        type="text"
        placeholder="filter"
        onChange={change}
      />
    </div>
  )
}

export default FilterBar
