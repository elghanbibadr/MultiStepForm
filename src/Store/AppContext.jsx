import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [stepNumber, setStepNumber] = useState(1);
   const [personalInfoFormIsValid,setPersonalInfoFormIsValid]=useState(false)

    const value = {
        stepNumber,
        setStepNumber,
        personalInfoFormIsValid,
        setPersonalInfoFormIsValid
    }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}