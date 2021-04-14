import styles from '@styles/Navbar.module.scss'
import Link from 'next/link'
import SearchBar from './SearchBar'
const Navbar = ({ me }) => {
  const { display_name, id } = me[0]
  return (
    <div className={styles.nav}>
      <div className={styles.nav__left}>Burger Menu</div>
      <div className={styles.nav__search}>
        <SearchBar />
      </div>
      <div className={styles.nav__right}></div>
    </div>
  )
}

export default Navbar
/*
<Link href="/profile">
          <a className={styles.nav__profile}>{display_name}</a>
        </Link>
 */
