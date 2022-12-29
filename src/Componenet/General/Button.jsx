import React,{useContext} from 'react'

const Button = (props) => {
  
  return (
    <button className={`btn ${props.btnClassName}`}>{props.name}</button>
  )
}

export default Button