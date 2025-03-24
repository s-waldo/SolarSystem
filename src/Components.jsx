import React from "react"
import "./Components.scss"

export function Toggle({ id, checked, onClickFunction }) {
  return (
    <label htmlFor={id}>
      <div className="toggle">
        <input type="checkbox" id={id} checked={checked} onClick={onClickFunction} readOnly/>
        <span className="slider"></span>
      </div>
      {id.slice(0, 1).toUpperCase() + id.slice(1)}
    </label>
  )
}

export function Radio({ id, name, defaultChecked=false, onClickFunction }) {
  return (
    <label htmlFor={id}>
      <div className="radio">
        <input type="radio" id={id} name={name} defaultChecked={defaultChecked} onClick={onClickFunction} />
        <span className="radioCheck"></span>
      </div>
      {id.slice(0, 1).toUpperCase() + id.slice(1)}
    </label>
  )
}

export function Button({ id, classes="", onClick }) {
  return (
    <button id={id} className={classes} onClick={onClick}>
      {id.slice(0, 1).toUpperCase() + id.slice(1)}
    </button>
  )
}
