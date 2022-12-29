import { createContext,useState } from "react";

export const AppContext=createContext(null);

export const AppContextProvider=({children})=>{
    const [stepNumber,setStepNumber]=useState(1);
    const [personalInfoIndex,addOnsIndex,selectPlanIndex,SummaryIndex]=[1,2,3,4];

    
    const [currentPageVisibleContent,setCurrentPageVisibleContent]=useState({
        1:true,
        2:false,
        3:false,
        4:false,
    })


    const value={
        stepNumber,
        setStepNumber,
        currentPageVisibleContent,
        setCurrentPageVisibleContent,
        personalInfoIndex,
        addOnsIndex,
        selectPlanIndex,
        SummaryIndex,
    }

 return <AppContext.Provider value={value} >{children}</AppContext.Provider>

}