import React from 'react'

const StepsCircle = (props) => {
  return (
    <div className='stepCircle-box'>
        <span className='stepcirlce '>{props.number}</span>
        <p className='hidden'>STEP {props.number}</p>
        <h3 className='hidden'>{props.title}</h3>
    </div>
  )
}

export default StepsCircle