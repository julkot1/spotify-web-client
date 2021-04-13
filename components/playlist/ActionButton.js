import React from 'react'
import styles from '@styles/Playlist.module.scss'
import Link from 'next/link'
import { AiOutlineEdit as Edit } from 'react-icons/ai'
import { IoMdAdd as Follow } from 'react-icons/io'
import { IoMdRemove as Unfollow } from 'react-icons/io'
const role = {
  EDIT: 'edit',
  FOLLOW: 'follow',
  UNFOLLOW: 'unfollow',
  get: (isOvner, isFollowing) => {
    if (isOvner) return role.EDIT
    else if (isFollowing) return role.UNFOLLOW
    return role.FOLLOW
  },
  getIcon: (r) => {
    switch (r) {
      case role.EDIT:
        return <Edit />
      case role.FOLLOW:
        return <Follow />
      case role.UNFOLLOW:
        return <Unfollow />
    }
  },
  getHref: (r) => {
    switch (r) {
      case role.EDIT:
        return '/'
      case role.FOLLOW:
        return '/'
      case role.UNFOLLOW:
        return '/'
    }
  },
}
const ActionButton = ({ isOvner, isFollowing }) => {
  const buttonRole = role.get(isOvner, isFollowing)

  return (
    <Link href={role.getHref(buttonRole)}>
      <a
        className={`${styles.overview__panel__bottom__link} ${styles['overview__panel__bottom__link--edit']}`}
      >
        {role.getIcon(buttonRole)}
        <p>{buttonRole}</p>
      </a>
    </Link>
  )
}

export default ActionButton
