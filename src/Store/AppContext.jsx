import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [stepNumber, setStepNumber] = useState(3);
   const [personalInfoFormIsValid,setPersonalInfoFormIsValid]=useState(false)
   const [selectedPlan,setSelectedPlan]=useState('plan-Arcade');
   const [paymentTerms,setPaymentTerms]=useState('monthly');

    const value = {
        stepNumber,
        setStepNumber,
        personalInfoFormIsValid,
        setPersonalInfoFormIsValid,
        selectedPlan,
        setSelectedPlan,
        paymentTerms,
        setPaymentTerms
    }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}