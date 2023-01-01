import React from 'react'
import thankULogo from "../../../../public/images/icon-thank-you.svg"
const ThankYou = () => {
  return (
    <div className='thankYouBox'>
        <img src={thankULogo}  alt='thank you logo'/>
        <h1>Thank you!</h1>
        <p>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
    </div>
  )
}

export default ThankYou