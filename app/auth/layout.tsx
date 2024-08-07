import React from 'react'

const admin = ({children}:{
  children: React.ReactNode
}) => {
  return (
    <div>
      <div className='text-center p-3'>
        20 % off for next 3 days
      </div>
      {children}
    </div>

  )
}

export default admin