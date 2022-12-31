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
        {props.paymentType==="yearly" &&  <p>{props.yearlyPrice}</p>}
     </div>
     {console.log()}
    </div>
  )
}

export default PlanCard