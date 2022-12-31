import React, { useContext, useState } from 'react'
import { AppContext } from '../../../Store/AppContext'

const AddOnsServiceCard = (props) => {
    const [serviceClicked,setServiceClicked]=useState(false);

    const {paymentTerms}=useContext(AppContext);

    const handleServiceClicked=()=>{
      setServiceClicked(!serviceClicked)
    }
  return (
    <div onClick={handleServiceClicked} className={`${ serviceClicked ? 'selectedService' :''} AddOnsServiceCard` }>
     <span className={`${serviceClicked ? "addCheckMark" :''}  check-mark-box` }></span>
     <div className='servicesDes'>
        <h5>{props.title}</h5>
        <span  className='serviceDesc'> {props.desc}</span>
     </div>
   { paymentTerms==="monthly" &&  <h6 >{props.extraMonthlyPrice}</h6> }
    {paymentTerms==="yearly" && <h6 >{props.extraYearlyPrice}</h6> }
    </div>
  )
}

export default AddOnsServiceCard