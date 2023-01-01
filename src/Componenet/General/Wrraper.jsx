import React, { useContext } from 'react'
import StepsTracker from '../StepsTracker/StepsTracker'
import PaginationBar from '../paginationBar/PaginationBar'
import StepContentWrapper from '../StepsContent/StepContentWrapper'
import { AppContext } from '../../Store/AppContext'
const Wrraper = () => {
  const {isUserConfirm}=useContext(AppContext)
  
  return (
    <div className='container'>
       <StepsTracker/>
       <StepContentWrapper />
        {!isUserConfirm &&  <PaginationBar/>}
    </div>
  )
}

export default Wrraper