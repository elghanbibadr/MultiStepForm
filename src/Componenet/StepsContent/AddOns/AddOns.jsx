import React, { useContext } from 'react'
import AddOnsServiceCard from './AddOnsServiceCard';
import { AddOnsServices } from './AddOnsServices';
const AddOns = () => {

  return (
    <div>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        {AddOnsServices.map(({title,desc,extraMonthlyPrice,extraYearlyPrice},index)=>{
          return <AddOnsServiceCard  key={index} title={title} desc={desc} extraMonthlyPrice={extraMonthlyPrice} extraYearlyPrice={extraYearlyPrice} />
        })}
    </div>
  )
}

export default AddOns;