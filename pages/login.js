import Link from 'next/link'
import Head from 'next/head'
import style from '@styles/Login.module.scss'
const Login = () => {
  return (
    <>
      <Head>
        <title>Log in</title>
      </Head>
      <div className={style.login__container}>
        <div className={style.login__wrapper}>
          <p className={style.login__title}>Login with Spotify</p>
          <div className={style.login__button}>
            <Link href="/api/auth/login">LOG IN</Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
