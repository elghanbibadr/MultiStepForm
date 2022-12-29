import React,{useContext} from 'react'

const Button = (props) => {

  
  return (
    <button id={props.id} onClick={props.handleBtnClicked} className={`btn ${props.btnClassName}`}>{props.name}</button>
  )
}

export default Button