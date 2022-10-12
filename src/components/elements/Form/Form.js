import React, { useRef } from 'react'
import './Form.css'



function Form(props) {

    return (

        <div className="form-group spacing" id='div_id'>
            <label>{props.label}</label>
            <input type={props.type} className="form-control spacing" id={props.input_id} aria-describedby={props.name} placeholder={props.placeholder} />
            <small id="emailHelp" className="form-text text-muted">{props.hint}</small>
        </div>


    )
}


export default Form