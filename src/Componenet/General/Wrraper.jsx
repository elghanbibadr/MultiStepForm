import React from 'react'
import StepsTracker from '../StepsTracker/StepsTracker'
import PaginationBar from '../paginationBar/PaginationBar'
import StepContentWrapper from '../StepsContent/StepContentWrapper'
const Wrraper = () => {
  return (
    <div className='container'>
       <StepsTracker/>
       <StepContentWrapper />
       <PaginationBar/>
    </div>
  )
}

export default Wrraper