import styles from '@styles/Tile.module.scss'
import Link from 'next/link'
const Tile = ({ data: { title, desc, type, img, id } }) => {
  return (
    <article className={styles.tile}>
      <div className={styles.tile__info}>
        <img src={img} width={200} height={200}></img>
        <Link href={`/${type}?id=${id}`}>
          <a>
            <p className={styles.tile__info__text}>{title}</p>
          </a>
        </Link>
        <p className={styles.tile__info__text}>{desc}</p>
      </div>
    </article>
  )
}
export default Tile
