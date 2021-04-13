import React from 'react'
import styles from '@styles/Playlist.module.scss'
import { BsPlayFill } from 'react-icons/bs'
import { CgMoreAlt } from 'react-icons/cg'
import Link from 'next/link'
import ActionButton from './ActionButton'
const PlaylistOverview = ({
  playlist: { desc, name, owner, totalTracks, img, isOvner, isFollowing },
}) => {
  return (
    <section className={styles.overview}>
      <div className={`${styles.overview__image__wrapper} ${styles.box}`}>
        <img className={styles.overview__image} src={img} />
      </div>
      <div className={`${styles.overview__panel} ${styles.box}`}>
        <div className={styles.overview__panel__info}>
          <h2 className={styles.overview__panel__info__title}>{name}</h2>
          <p>Created by {owner}</p>
          <p>{desc}</p>
          <p>{totalTracks} tracks, </p>
        </div>
        <div className={styles.overview__panel__bottom}>
          <button className={styles.overview__panel__bottom__play}>
            <div className={styles.overview__panel__bottom__content}>
              <BsPlayFill />
            </div>
          </button>
          <div className={styles.overview__panel__bottom__right}>
            <ActionButton isFollowing={isFollowing} isOvner={isOvner} />
            <Link href="/">
              <a
                className={`${styles.overview__panel__bottom__link} ${styles['overview__panel__bottom__link--more']}`}
              >
                <CgMoreAlt />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlaylistOverview
