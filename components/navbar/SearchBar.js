import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiOutlineSearch as Icon } from 'react-icons/ai'
import { IoMdClose as Close } from 'react-icons/io'
import styles from '@styles/Navbar.module.scss'

const SearchBar = () => {
  const router = useRouter()
  const [q, setQ] = useState(router.query.q)
  const [show, setShow] = useState(router.pathname === '/search')
  const change = ({ target: { value } }) => {
    setShow(true)
    if (value.length)
      router.replace({ pathname: '/search', query: { q: value } }, undefined, {
        shallow: true,
      })
    else router.push('/')
    setQ(value)
  }
  const exit = () => {
    if (router.pathname === '/search') router.push('/')
  }

  return (
    <div className={styles.search}>
      <Icon className={styles.search__icon} />
      <div className={styles.search__input__container}>
        <input
          autoFocus={router.pathname === '/search'}
          className={styles.search__input}
          type="text"
          value={q}
          placeholder="search"
          onChange={change}
        />
        {q ? (
          <Close
            className={`${styles.search__icon} ${styles['search__icon--close']}`}
            onClick={exit}
          />
        ) : null}
      </div>
    </div>
  )
}

export default SearchBar
