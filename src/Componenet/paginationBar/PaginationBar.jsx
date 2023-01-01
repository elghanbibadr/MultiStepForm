import React, { useContext} from 'react'
import { AppContext } from '../../Store/AppContext';
import Button from '../General/Button'

const PaginationBar = () => {
  const { stepNumber, setStepNumber,setIsUserConfirm } = useContext(AppContext);
  const handleBtnClicked = (e) => {

    if (e.target.id === 'nextstep') {
    
        setStepNumber(prv => prv + 1);
      }
      if (e.target.id === 'confirm') {
   setStepNumber(4)    
    setIsUserConfirm(true)  
    }
  }
  

  const handleBackLinkClicked = () => setStepNumber(prv => prv - 1)


  return (
    <div className='paginationBar'>
      {(stepNumber >= 2 && stepNumber <= 4) && <a onClick={handleBackLinkClicked} className='back-link'  >Go Back</a>}
      { (stepNumber>=2 && stepNumber < 4) && <Button id='nextstep' handleBtnClicked={handleBtnClicked} btnClassName='btn--marineBlue' name='Next Step' />}
      {stepNumber === 4 && <Button id='confirm' handleBtnClicked={handleBtnClicked} btnClassName='btn--Purplishblue' name='Confirm' />}
    </div>
  )
}

export default PaginationBar