import React from 'react'
import styles from '@styles/Playlist.module.scss'
const PlaylistTrack = ({ data, data: { name, artists, duraiton, album } }) => {
  return (
    <div className={styles.tracks__item}>
      <p></p>
      <p>{name}</p>
      <p>{artists.reduce((acc, cur) => `${acc}, ${cur}`)}</p>
      <p>{album}</p>
      <p>{time(data.duration)}</p>
    </div>
  )
}
const time = (d) => {
  const s = Math.floor((d / 1000) % 60).toString()
  return `${Math.floor(d / 60000)}:${s.length === 1 ? '0' : ''}${s}`
}
export default PlaylistTrack
