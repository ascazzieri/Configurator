import React from 'react'
import './CHECKBOX_FORM.css'


const CHECKBOX_FORM = (props) => {

    const { checkbox_state } = props;

    const handleClick = (event) => {
        checkbox_state(event.target.checked)

    }

    
    return (
        <>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id={props.id} onChange={handleClick} />
                <label className="form-check-label">{props.label}</label>
            </div>
        </>

    )
}

export default CHECKBOX_FORM