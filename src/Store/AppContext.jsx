import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [stepNumber, setStepNumber] = useState(1);


    const value = {
        stepNumber,
        setStepNumber,
    }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}