import styles from '@styles/Components.module.scss'
import { AiOutlineSearch as Icon } from 'react-icons/ai'
const FilterBar = ({ setQ, className, container }) => {
  const change = ({ target: { value } }) => setQ(value)
  return (
    <div className={`${styles.filter} ${container}`}>
      <Icon />
      <input
        className={className}
        type="text"
        placeholder="filter"
        onChange={change}
      />
    </div>
  )
}

export default FilterBar
