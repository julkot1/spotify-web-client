import React from 'react'
import styles from '@styles/Home.module.scss'

const TopArtist = ({data: {name, images, id}}) => {
    return (<>
        <img className={styles['top-artist__image']} src={images[0].url} />
        <div className={styles['top-artist__info']}>
            {name}
        </div>
     </>)
}

export default TopArtist
