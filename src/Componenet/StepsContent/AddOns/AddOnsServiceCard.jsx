import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../Store/AppContext'

const AddOnsServiceCard = (props) => {
    const { selectedAddOns, setSelectedAddOns } = useContext(AppContext)
    const [serviceClicked, setServiceClicked] = useState(false);

    const { paymentTerms } = useContext(AppContext);

    const handleServiceClicked = () => {
        setServiceClicked(prv => !prv)
        if (selectedAddOns.find(element => element.serviceName === props.title))
            selectedAddOns.splice(selectedAddOns.findIndex(obj => obj.serviceName === props.title), 1)
        else setSelectedAddOns(prv => [{ serviceName: props.title ,termsPay:paymentTerms ,extraPrice: paymentTerms==="monthly" ? props.extraMonthlyPrice:props.extraYearlyPrice },...prv])
  
    }



    return (
        <div onClick={handleServiceClicked} className={`${serviceClicked ? 'selectedService' : ''} AddOnsServiceCard`}>
            <span className={`${serviceClicked ? "addCheckMark" : ''}  check-mark-box`}></span>
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