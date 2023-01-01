import React, { useContext } from 'react'
import { AppContext } from '../../Store/AppContext'
import AddOns from './AddOns/AddOns'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import SelectPlan from './SelectPlan/SelectPlan'
import Summary from './Summary/Summary'
import ThankYou from './Summary/ThankYou'

const StepContentWrapper = () => {
   const { stepNumber,isUserConfirm } = useContext(AppContext);
   return (
      <div className='StepContentWrapper'>
         {stepNumber === 1 && <PersonalInfo />}
         {stepNumber === 2 && <SelectPlan />}
         {stepNumber === 3 && <AddOns />}
         {stepNumber === 4 && !isUserConfirm && <Summary />}
         {isUserConfirm && <ThankYou />}
      </div>
   )
}

export default StepContentWrapper