import React from 'react'
import StepsCircle from './StepsCircle'
import { steps } from './Constant'

const StepsTracker = () => {
  
  return (
    <div className='stepTracker'>
      {steps.map(({number,title},index)=>{
        return <StepsCircle key={index} title={title} number={number} />
      })}
    </div>
  )
}

export default StepsTracker