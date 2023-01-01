import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [stepNumber, setStepNumber] = useState(1);
   const [personalInfoFormIsValid,setPersonalInfoFormIsValid]=useState(false)
   const [selectedPlan,setSelectedPlan]=useState('Arcade');
   const [paymentTerms,setPaymentTerms]=useState('monthly');
   const [selectedAddOns,setSelectedAddOns]=useState([]);
  const [isUserConfirm,setIsUserConfirm]=useState(false)
    const value = {
        stepNumber,
        setStepNumber,
        personalInfoFormIsValid,
        setPersonalInfoFormIsValid,
        selectedPlan,
        setSelectedPlan,
        paymentTerms,
        setPaymentTerms,
        selectedAddOns,
        setSelectedAddOns,
        isUserConfirm,
        setIsUserConfirm
       
    }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}