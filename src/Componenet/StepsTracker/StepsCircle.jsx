import React, { useContext } from 'react'
import { AppContext } from '../../Store/AppContext'

const StepsCircle = (props) => {
   let {stepNumber}=useContext(AppContext);
   
  return (
    <div className='stepCircle-box'>
        <span className={ `stepcirlce ${stepNumber===props.number ? 'circle-toggled':''}`}>{props.number}</span>
        <p className='hidden'>STEP {props.number}</p>
        <h3 className='hidden'>{props.title}</h3>
    </div>
  )
}

export default StepsCircle