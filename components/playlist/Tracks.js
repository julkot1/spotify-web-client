import React, { useEffect, useRef, useState } from 'react'
import styles from '@styles/Playlist.module.scss'
import PlaylistTrack from './PlaylistTrack'
import sortFunc, { useSort } from '@utils/sort'
import TracksLegend from './TracksLegend'
import FilterBar from '@components/tiles/FilterBar'
import filter from '@utils/filter'

const Tracks = ({ tracks }) => {
  const [sort, setSortingFunc] = useSort()
  const [Q, setQ] = useState(null)
  const func = sortFunc(sort.field, sort.desc)
  return (
    <div className={`${styles.box}`}>
      <ul className={styles.tracks}>
        <FilterBar
          setQ={setQ}
          className={styles['tracks__filter-bar']}
          container={styles['tracks__filter-bar__container']}
        />
        <TracksLegend setSortingFunc={setSortingFunc} sort={sort} />
        {filter(
          sort.field != null ? [...tracks].sort(func) : tracks,
          ['name', 'artists', 'album'],
          Q
        ).map((d) => (
          <li key={d.id}>
            <PlaylistTrack data={d} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tracks
