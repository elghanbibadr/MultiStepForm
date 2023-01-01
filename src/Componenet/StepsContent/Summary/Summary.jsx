import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../Store/AppContext'
import { plans } from '../SelectPlan/Plans';

const Summary = () => {
  const {selectedAddOns,selectedPlan,paymentTerms,setStepNumber}=useContext(AppContext);
  const {monthlyPrice,yearlyPrice}= plans.find(plan=>plan.id===selectedPlan);
  const planPrice=paymentTerms==='monthly'  ? monthlyPrice :yearlyPrice;
  const [total,setTotal]=useState(planPrice)



  useEffect(()=>{
    if (selectedAddOns.length!==0){
      const reducedString=selectedAddOns.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.extraPrice 
      } ,0) + planPrice; 
       const reducedPrice=reducedString.match(/\d+/g).map(Number).reduce((a,b)=>a+b,0)
  
       setTotal(`$${reducedPrice}/${paymentTerms==='monthly' ? "mo" :"yr"}`);
    }
  },[])

  const handleOnChangeLinkClicked=()=>setStepNumber(2)

  return (
    <div>
    <h2>Finishing up</h2>
    <p>Double-check everything looks OK before confirming.</p>
    <div className='summary-result'>
      <div className="summery-planInfo">
        <h4>{selectedPlan} ({paymentTerms})</h4>
        <a onClick={handleOnChangeLinkClicked} href='#' >Change</a>
      </div>
      <span className='price'>{planPrice}</span>
      {selectedAddOns.map(({serviceName,extraPrice})=>{
        return (
          <>
          <p >{serviceName}</p>
          <span className='price'>{extraPrice}</span>
          </>
        )
      })}
      <p>Total (per year)</p>
      <h3 className='price total'>{total}</h3>
    </div>
    </div>
  )
}

export default Summary