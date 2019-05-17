import React from 'react'
import './input.sass'

const Input = props => {

  const inputType = props.type || 'text'
  const cls = ['input']
  const htmlFor = `$(inputType)-${Math.random()}`

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  )
}

export default Input
