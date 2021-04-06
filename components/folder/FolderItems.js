import FilterBar from '@components/tiles/FilterBar'
import Tile from '@components/tiles/Tile'
import styles from '@styles/Folder.module.scss'
import filter from '@utils/filter'
import { useState } from 'react'
const FolderItems = ({ id, tiles, title }) => {
  const [Q, setQ] = useState(null)

  return (
    <div className={styles.folder}>
      <FilterBar setQ={setQ} />
      <ul className={styles.folder__list}>
        {filter(tiles, ['title', 'desc'], Q).map((data) => (
          <li key={data.id} className={styles.folder__list__item}>
            <Tile data={data} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default FolderItems
