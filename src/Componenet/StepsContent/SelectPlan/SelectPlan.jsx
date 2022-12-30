import React from 'react'
import PlanCard from './PlanCard';
import { plans } from './Plans';
const SelectPlan = () => {
  return (
    <>
    <h2>Select Your Plan</h2>
    <p>You have the option of monthly or yearly billing.</p>
    <div className='planCard-wrapper'>
    {plans.map(({id,name,price,img},index)=>{
      return <PlanCard key={index} id={id} name={name} price={price} img={img} />
    })}
    </div>

  </>
  )
}

export default SelectPlan;