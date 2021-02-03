import React from 'react'

function Input(props) {
    return (
        <div>
             <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">{props.label}</label>
    <input type={props.type} className="form-control"/>
   
  </div>
        </div>
    )
}

export default Input
