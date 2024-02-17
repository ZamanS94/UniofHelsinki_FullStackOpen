import React from 'react'
import '/src/index.css'


const Notification = ({ message }) => {
  return (
    <div>
      {(() => {
        if (message == null) {
          return (
            <div className='noValue'></div>
          )
        } else if (message.toLowerCase().includes("has already been removed")) {
          return (
            <div className='noUp'>
              {message}
            </div>
          )
        } else {
          return (
            <div className='notify'>
                {message}
            </div>
          )
        }
      })()}
    </div>
  )
}

export default Notification