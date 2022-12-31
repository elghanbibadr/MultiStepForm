import React from 'react'

const AddOnsServiceCard = (props) => {
  return (
    <div className='AddOnsServiceCard'>
     <span className='check-mark-box'></span>
     <div className='servicesDes'>
        <h5>{props.title}</h5>
        <span  className='serviceDesc'> {props.desc}</span>
    </div>
    <h6 >{props.extraMonthlyPrice}</h6>
    </div>
  )
}

export default AddOnsServiceCard