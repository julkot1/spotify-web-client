import styles from '@styles/Layout.module.scss'
import Navbar from '@components/navbar/Navbar'
const Layout = ({ children, me }) => {
  return (
    <div className={styles.container}>
      <Navbar me={me} />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
