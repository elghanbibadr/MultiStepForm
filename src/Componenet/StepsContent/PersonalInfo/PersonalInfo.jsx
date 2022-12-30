import React, { useContext, useState} from 'react'
import { AppContext } from '../../../Store/AppContext'

const PersonalInfo = () => {
 
   const {stepNumber,setStepNumber}=useContext(AppContext)
    
   const [userName, setUserName] = useState('');
   const [email, setEmail] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [userNameError, setUserNameError] = useState('');
   const [emailError, setEmailError] = useState('');
   const [phoneNumberError, setPhoneNumberError] = useState('');
  const [formIsValid,setFormIsValid]=useState(false);


   const handleUserNameChange=(e)=>setUserName(e.target.value);
   const handleEmailChange=(e)=>setEmail(e.target.value);
   const handlePhoneNumberChange=(e)=>setPhoneNumber(e.target.value);

  const handleFormSubmited=(e)=>{
      e.preventDefault();
      console.log('ypp');
      validate();
      if(userName && email &&  phoneNumber && !isNaN(phoneNumber))   setFormIsValid(true)
      if (formIsValid){
        setStepNumber(prv => prv +1)
      }
  }

  const validate = () => {
    if (!userName) {
      setUserNameError('Name is required');
    } else {
      setUserNameError('');
    }
    if (!email) {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
    if (!phoneNumber ) {
      setPhoneNumberError('Phone Number is required');
    }else if (isNaN(phoneNumber)){
      setPhoneNumberError('Phone Number must contains only number');

    }
     else {
      setPhoneNumberError('');
    }
  }

 

  return (

    <>
    <h2 className='PersonalInfo-title'>Personal Info</h2>
    <p>Please provide your name, email address, and phone number.</p>
  <form onSubmit={handleFormSubmited} className=' personalInfo' >
     <div className="from-controller">
      <label htmlFor="userName">Name</label>
      <input id='userName' type="text" placeholder='e.g.Stephen King'  value={userName} onChange={handleUserNameChange} />
      {userNameError && <span className="error-msg">{userNameError}</span>}
      </div>
     <div className="from-controller">
      <label htmlFor="email">Email Address</label>
      <input id='email'  type="email" placeholder='e.g.stephenKing@lorem.com'  value={email} onChange={handleEmailChange} />
      {emailError && <span className="error-msg">{emailError}</span>}

      </div>
     <div className="from-controller">
      <label htmlFor="userName">Phone Number</label>
      <input id='userName' type='text' placeholder='e.g. 1234567890' value={phoneNumber}   onChange={handlePhoneNumberChange}/>
      {phoneNumberError && <span className="error-msg">{phoneNumberError}</span>}

      </div>
     {stepNumber===1 && <button type='submit' className='btn btn--marineBlue'>Next Steps</button>}
  </form>
  </>
  );
}

export default PersonalInfo;

