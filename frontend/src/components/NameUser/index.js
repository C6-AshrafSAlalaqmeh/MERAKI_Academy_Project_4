import React from 'react'
import './style.css'


const NameUser = ({storedName}) => {
  return (
    <>
    <div className='nameUser'>
      <h1> Welcome : {`${storedName}`}</h1>
      </div>
    </>
  )
}

export default NameUser