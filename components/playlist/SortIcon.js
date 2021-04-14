import React from 'react'
import { BsArrowUp as Up, BsArrowDown as Down } from 'react-icons/bs'
const SortIcon = ({ field, sort }) => {
  return <>{sort.field === field ? sort.desc ? <Up /> : <Down /> : null}</>
}

export default SortIcon
