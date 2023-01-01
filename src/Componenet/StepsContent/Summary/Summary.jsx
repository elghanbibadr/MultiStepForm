import React, { useContext } from 'react'
import { AppContext } from '../../../Store/AppContext'
import { plans } from '../SelectPlan/Plans';

const Summary = () => {
  const {selectedAddOns,selectedPlan,paymentTerms}=useContext(AppContext);
  const {monthlyPrice,yearlyPrice}= plans.find(plan=>plan.id===selectedPlan);
  return (
    <div>
    <h2>Finishing up</h2>
    <p>Double-check everything looks OK before confirming.</p>
    <div className='summary-result'>
      <div className="summery-planInfo">
        <h4>{selectedPlan} ({paymentTerms})</h4>
        <a href='#' >Change</a>
      </div>
      <span className='price'>{paymentTerms==='monthly'  ? monthlyPrice :yearlyPrice}</span>
      {selectedAddOns.map(({serviceName,extraPrice})=>{
        return (
          <>
          <p >{serviceName}</p>
          <span className='price'>{extraPrice}</span>
          </>
        )
      })}
    </div>
    </div>
  )
}

export default Summary