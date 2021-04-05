import styles from '@styles/Tile.module.scss'
import Tile from './Tile'

const TilesGroup = ({ tiles, title }) => {
  return (
    <section className={styles.tilesGroup}>
      <h2 className={styles.tilesGroup__title}>{title}</h2>
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
