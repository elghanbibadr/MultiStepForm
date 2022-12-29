import React,{useContext, useEffect} from 'react'
import { AppContext } from '../../Store/AppContext';
import Button from '../General/Button'

const PaginationBar = () => {
    const {stepNumber,setStepNumber,currentPageVisibleContent,setCurrentPageVisibleContent,  personalInfoIndex, addOnsIndex,  selectPlanIndex, SummaryIndex}=useContext(AppContext);
    const handleBtnClicked=(e)=>{
        if(e.target.id==='nextstep'){
          setStepNumber(prv => prv + 1);
      
        }
      }

      const updateStepNumber=()=>{
        if(stepNumber>1){
            // 
            // 
            // console.log(currentPageVisibleContent)
            setCurrentPageVisibleContent(()=>{
                currentPageVisibleContent[stepNumber]=true;
                currentPageVisibleContent[stepNumber-1]=false;
                return currentPageVisibleContent;
            })
        }
      }


      useEffect(updateStepNumber,[stepNumber])

      console.log(stepNumber)
     

  return (
    <div className='paginationBar'>
    { stepNumber>=2 && <a  >Go Back</a> }
    <Button id='nextstep' handleBtnClicked={handleBtnClicked} btnClassName='btn--marineBlue' name='Next Step' />
    </div>
  )
}

export default PaginationBar