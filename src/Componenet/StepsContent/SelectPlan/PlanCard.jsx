import React, { useContext } from 'react'
import { AppContext } from '../../../Store/AppContext'

const PlanCard = (props) => {
    const {selectedPlan}=useContext(AppContext)
  return (
    <div onClick={props.handleCardClicked} id={props.id} className={`${selectedPlan===props.id ? 'selectedCard-bg' :''} planCard`}>
     <img src={props.img} alt='plan logo ' />
     <div className='planCardDesc'>
        <h4>{props.name}</h4>
        {props.paymentType==="monthly" &&  <p>{props.monthlyPrice}</p>}
        {
        props.paymentType==="yearly" &&
        <>
        <p className='yearlyPrice'>{props.yearlyPrice}</p>
         <p className='two-monthfree-txt'>2 month for free</p>
        </> 
        }
     </div>
    </div>
  )
}

export default PlanCard