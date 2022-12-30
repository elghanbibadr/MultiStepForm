import React, { useContext } from 'react'
import { AppContext } from '../../Store/AppContext'
import AddOns from './AddOns/AddOns'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import SelectPlan from './SelectPlan/SelectPlan'
import Summary from './Summary/Summary'

const StepContentWrapper = () => {
   const { stepNumber, setStepNumber, currentPageVisibleContent, setCurrentPageVisibleContent, personalInfoIndex, addOnsIndex, selectPlanIndex, SummaryIndex } = useContext(AppContext);
   return (
      <div className='StepContentWrapper'>
         {stepNumber === 1 && <PersonalInfo />}
         {stepNumber === 2 && <AddOns />}
         {stepNumber === 3 && <SelectPlan />}
         {stepNumber === 4 && <Summary />}
      </div>
   )
}

export default StepContentWrapper