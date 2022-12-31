import React, { useContext } from 'react'
import { AppContext } from '../../../Store/AppContext'

const Summary = () => {
  const {selectedAddOns}=useContext(AppContext);

  console.log(selectedAddOns)
  return (
    <div>
    <h1>Summary</h1>
    </div>
  )
}

export default Summary