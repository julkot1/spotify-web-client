import Link from 'next/link'
import TilesGroup from '../tiles/TilesGroup'
import styles from '@styles/Home.module.scss'
const Playlists = ({ playlists }) => {
  const tiles = playlists.map(({ name, owner, id, img }) => {
    return { title: name, desc: owner, img: img, type: 'playlist', id: id }
  })
  return (
    <div className={styles.main__playlists}>
      <TilesGroup tiles={tiles} title="My playlists" />
    </div>
  )
}
export default Playlists
