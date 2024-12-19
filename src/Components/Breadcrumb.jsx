import React from 'react'
import { Link } from 'react-router'

const Breadcrumb = ({currentPageTitle}) => {
  return (
    <div className=' flex gap-3 mb-5 w-full'>
      <Link to={'/'}>Home</Link>
      <p>/</p>
      <p>{currentPageTitle}</p>
    </div>
  )
}

export default Breadcrumb
