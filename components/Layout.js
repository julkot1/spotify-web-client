import styles from '@styles/Layout.module.scss'
import Navbar from '@components/navbar/Navbar'
import Head from 'next/head'
import Error from 'next/error'
const Layout = ({ children, me, title }) => {
  if (me == null) return <Error></Error>
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar me={me} />
      <main id="main" className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout
