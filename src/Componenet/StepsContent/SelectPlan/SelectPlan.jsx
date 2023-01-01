import React, { useContext, useState } from 'react'
import { AppContext } from '../../../Store/AppContext';
import PlanCard from './PlanCard';
import { plans } from './Plans';
const SelectPlan = () => {

  const {setSelectedPlan,paymentTerms,setPaymentTerms,setSelectedAddOns}=useContext(AppContext)

  const handleSelectedPlane=(e)=>{
    setSelectedPlan(e.currentTarget.id)
  }

const handlePaymentTermsBoxClicked=()=>{
   paymentTerms==="monthly" ? setPaymentTerms('yearly') :setPaymentTerms('monthly');
   setSelectedAddOns([]);
}


  return (
    <>
    <h2>Select Your Plan</h2>
    <p>You have the option of monthly or yearly billing.</p>
    <div className='planCard-wrapper'>
    {plans.map(({id,name,monthlyPrice,yearlyPrice,img},index)=>{
      return <PlanCard paymentType={paymentTerms} handleCardClicked={handleSelectedPlane} key={index} id={id} name={name} monthlyPrice={monthlyPrice} yearlyPrice={yearlyPrice} img={img} />
    })}
    </div>
    <div  className='selectedPlan-toggler-box'>
      <p className={`monthly-text ${paymentTerms==='monthly' ? "toggled-payment":""}`}>Monthly</p>
      <div onClick={handlePaymentTermsBoxClicked} className='toggler-wrraper'><span className={`toggler-btn ${paymentTerms==='yearly' ? 'toggler-btn-moved':''}`} ></span></div>
      <p  className={`yearly-text ${paymentTerms==='yearly' ? "toggled-payment":""}`}>yearly</p>
    </div>
  </>
  )
}

export default SelectPlan;