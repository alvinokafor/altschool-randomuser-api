import React from 'react'
import Skeleton from './Skeleton'

const Loader = () => {
  return (
    <div className='loader-container'>
      <Skeleton type='avatar' />
      <div className='loader-text'>
      <Skeleton type='text' />
      <Skeleton type='text' />
      <Skeleton type='text' />
      </div>
      
    </div>
  )
}

export default Loader