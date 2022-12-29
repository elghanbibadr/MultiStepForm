import React, { useContext } from 'react'
import { AppContext } from '../../Store/AppContext'
import AddOns from './AddOns/AddOns'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import SelectPlan from './SelectPlan/SelectPlan'
import Summary from './Summary/Summary'

const StepContentWrapper = () => {
    const {stepNumber,setStepNumber,currentPageVisibleContent,setCurrentPageVisibleContent,  personalInfoIndex, addOnsIndex,  selectPlanIndex, SummaryIndex}=useContext(AppContext);
     console.log(stepNumber);
  return (
    <div className='StepContentWrapper'>
        {  currentPageVisibleContent[personalInfoIndex] && <PersonalInfo />}
       {currentPageVisibleContent[addOnsIndex] && <AddOns />}
    { currentPageVisibleContent[selectPlanIndex] && <SelectPlan />}
       { currentPageVisibleContent[SummaryIndex] && <Summary />}
    </div>
  )
}

export default StepContentWrapper