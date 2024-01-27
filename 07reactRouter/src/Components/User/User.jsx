import React from 'react'
import {useParams} from 'react-router-dom'

// getting dynamic data
function User() {
    const {userid} = useParams()
  return (
    <div className='text-3xl font-bold bg-gray-600 text-white text-center'>User: {userid}</div>
  )
}

export default User