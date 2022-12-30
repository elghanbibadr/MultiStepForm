import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Store/AppContext';
import Button from '../General/Button'

const PaginationBar = () => {
  const { stepNumber, setStepNumber} = useContext(AppContext);
  const handleBtnClicked = (e) => {
    if (e.target.id === 'nextstep' || e.target.id === "confirm") {
      setStepNumber(prv => prv + 1);
    }
  }


  const handleBackLinkClicked = () => setStepNumber(prv => prv - 1)





  return (
    <div className='paginationBar'>
      {(stepNumber >= 2 && stepNumber < 5) && <a onClick={handleBackLinkClicked} className='back-link'  >Go Back</a>}
      {stepNumber < 4 && <Button id='nextstep' handleBtnClicked={handleBtnClicked} btnClassName='btn--marineBlue' name='Next Step' />}
      {(stepNumber >= 4 && stepNumber < 5) && <Button id='confirm' handleBtnClicked={handleBtnClicked} btnClassName='btn--Purplishblue' name='Confirm' />}
    </div>
  )
}

export default PaginationBar