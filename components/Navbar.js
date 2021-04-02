import styles from '@styles/Navbar.module.scss'
import Link from 'next/link'
const Navbar = ({ me }) => {
  const { display_name, id } = me[0]
  return (
    <div className={styles.nav}>
      <div className={styles.nav__left}>
        <ul className={styles.nav__links}>
          <li className={styles.nav__links__item}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.nav__links__item}>
            <Link href="/">Test 1</Link>
          </li>
          <li className={styles.nav__links__item}>
            <Link href="/">Test 2</Link>
          </li>
          <li className={styles.nav__links__item}>
            <Link href="/">Test 3</Link>
          </li>
        </ul>
      </div>
      <div className={styles.nav__right}>
        <div className={styles.nav__search}>search</div>
        <Link href="/profile">
          <a className={styles.nav__profile}>{display_name}</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
