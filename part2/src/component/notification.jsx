import React from 'react'

const Notification = ({ message }) => {
  return (
    message === null ? 
    <div className="noValue"></div> :
    <div className='notify'>
      {message}
    </div>
  )
}

export default Notification