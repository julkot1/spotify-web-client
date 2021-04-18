import React from 'react'
import styles from '@styles/Home.module.scss'
import TopArtist from './TopArtist'
const TopArtists = ({artists}) => {
    return (
        <section className={styles['top-artists']}>
            <h2>My top artists</h2>
            <div className={`${styles.box} ${styles[`box--border`]} ${styles[`top-artists__container`]}`}>
               <ul className={styles[`top-artists__list`]}>
                    {artists.slice(0,10).map(e=><li className={styles[`top-artists__list__item`]} key={e.id}><TopArtist data={e}/></li>)}
               </ul>
            </div>
        </section>
    )
}

export default TopArtists
