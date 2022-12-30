import React, { useContext, useState } from 'react'
import { AppContext } from '../../../Store/AppContext';
import PlanCard from './PlanCard';
import { plans } from './Plans';
const SelectPlan = () => {

  const {setSelectedPlan}=useContext(AppContext)
  const handleSelectedPlan=(e)=>{
    setSelectedPlan(e.currentTarget.id)
  }

  return (
    <>
    <h2>Select Your Plan</h2>
    <p>You have the option of monthly or yearly billing.</p>
    <div className='planCard-wrapper'>
    {plans.map(({id,name,price,img},index)=>{
      return <PlanCard handleCardClicked={handleSelectedPlan} key={index} id={id} name={name} price={price} img={img} />
    })}
    </div>

  </>
  )
}

export default SelectPlan;