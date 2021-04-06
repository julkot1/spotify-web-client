import styles from '@styles/Tile.module.scss'
import Tile from './Tile'
import Link from 'next/link'
const TilesGroup = ({ tiles, title, id }) => {
  return (
    <section className={styles.tilesGroup}>
      <Link href={`/folder/${id}`}>
        <a className={styles.tilesGroup__title}>{title}</a>
      </Link>
      <div className={styles.tilesGroup__list__wrapper}>
        <ul className={styles.tilesGroup__list}>
          {tiles.map((d) => (
            <li className={styles.tilesGroup__list__item} key={d.id}>
              <Tile data={d} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
export default TilesGroup
