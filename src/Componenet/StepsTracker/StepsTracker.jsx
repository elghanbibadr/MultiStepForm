import React from 'react'
import StepsCircle from './StepsCircle'
const StepsTracker = () => {
    const steps=[1,2,3,4]
  return (
    <div className='stepTracker'>
      {steps.map((step,index)=>{
        return <StepsCircle key={index} number={step} />
      })}
    </div>
  )
}

export default StepsTracker