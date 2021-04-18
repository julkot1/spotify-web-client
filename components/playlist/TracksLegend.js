import React, { useEffect, useRef, useState } from 'react'
import styles from '@styles/Playlist.module.scss'
import SortIcon from './SortIcon'

const TracksLegend = ({ setSortingFunc, sort }) => {
  const ref = useRef(null)
  const [legendClass, setLegendClass] = useState(styles.tracks__legend)


  return (
    <li ref={ref} key="legend" className={legendClass}>
      <p onClick={() => setSortingFunc('name')}>
        title <SortIcon field="name" sort={sort} />
      </p>
      <p onClick={() => setSortingFunc('artists')}>
        artists <SortIcon field="artists" sort={sort} />
      </p>
      <p onClick={() => setSortingFunc('album')}>
        album <SortIcon field="album" sort={sort} />
      </p>
      <p onClick={() => setSortingFunc('duration')}>
        duration <SortIcon field="duration" sort={sort} />
      </p>
    </li>
  )
}

export default TracksLegend
