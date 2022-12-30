import React from 'react'

const PlanCard = (props) => {
  return (
    <div id={props.id} className='planCard'>
     <img src={props.img} alt='plan logo ' />
     <div className='planCardDesc'>
        <h4>{props.name}</h4>
        <p>{props.price}</p>
     </div>
    </div>
  )
}

export default PlanCard