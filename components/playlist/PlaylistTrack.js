import React from 'react'
import styles from '@styles/Playlist.module.scss'
import Link from 'next/link'
const PlaylistTrack = ({ data, data: { name, artists, duraiton, album } }) => {
  return (
    <div className={styles.tracks__item}>
      <p className={styles.tracks__item__title}>
        <img width={48} height={48} src={data.img[2].url}></img>
        <Link href="/">{name}</Link>
      </p>
      <p>{artists.reduce((acc, cur) => `${acc}, ${cur}`)}</p>
      <Link href="/">{album}</Link>
      <p>{time(data.duration)}</p>
    </div>
  )
}
const time = (d) => {
  const s = Math.floor((d / 1000) % 60).toString()
  return `${Math.floor(d / 60000)}:${s.length === 1 ? '0' : ''}${s}`
}
export default PlaylistTrack
