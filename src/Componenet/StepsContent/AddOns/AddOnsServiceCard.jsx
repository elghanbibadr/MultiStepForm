import React, { useContext, useState } from 'react'
import { AppContext } from '../../../Store/AppContext'

const AddOnsServiceCard = (props) => {
    const { selectedAddOns, setSelectedAddOns ,paymentTerms } = useContext(AppContext)


    const handleServiceClicked = () => {
        if (selectedAddOns.find(element => element.serviceName === props.title)){
             setSelectedAddOns(prv =>  prv.splice(prv.findIndex(obj => obj.serviceName === props.title),1))
        }
        else{
            setSelectedAddOns(prv => [...prv,{ serviceName: props.title ,termsPay:paymentTerms ,extraPrice: paymentTerms==="yearly" ? props.extraYearlyPrice : props.extraMonthlyPrice}])
            console.log(props.extraYearlyPrice)
        }
  
}

return (
    <div onClick={handleServiceClicked} className={`${selectedAddOns.some(obj => obj.serviceName === props.title) ? 'selectedService' : ''} AddOnsServiceCard`} >
            <span className={`${selectedAddOns.some(obj => obj.serviceName === props.title) ? "addCheckMark" : ''}  check-mark-box`}></span>
            <div className='servicesDes'>
                <h5>{props.title}</h5>
                <span className='serviceDesc'> {props.desc}</span>
            </div>
            {paymentTerms === "monthly" && <h6 >{props.extraMonthlyPrice}</h6>}
            {paymentTerms === "yearly" && <h6 >{props.extraYearlyPrice}</h6>}
        </div>
    )
}

export default AddOnsServiceCard