import React from 'react'
import './Checkout.css'

function Checkout(props) {
    return (
        <>
            <button type="submit" className="btn btn-primary right margin-vertical">{props.text}</button>
        </>

    )
}
export default Checkout