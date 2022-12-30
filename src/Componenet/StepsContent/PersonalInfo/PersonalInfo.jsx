import React from 'react'
const PersonalInfo = () => {
  return (
    <>
      <h2 className='PersonalInfo-title'>Personal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>
    <from className=' personalInfo'>
       <div className="from-controller">
        <label htmlFor="userName">Name</label>
        <input id='userName' type="text" placeholder='e.g.Stephen King' />
        </div>
       <div className="from-controller">
        <label htmlFor="email">Email Address</label>
        <input id='email' type="email" placeholder='e.g.stephenKing@lorem.com' />
        </div>
       <div className="from-controller">
        <label htmlFor="userName">Phone Number</label>
        <input id='userName' type="text" placeholder='e.g. 1234567890' />
        </div>
    </from>
    
    </>
  )
}

export default PersonalInfo