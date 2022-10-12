import React from 'react'
import './Progressbar.css'

function Progressbar(props) {
    return (<>
        <div className="progress">
            <div style={{width:props.value}} className="progress-bar" role="progressbar" aria-valuenow={props.value} aria-valuemin="0" aria-valuemax="100">{props.percent}</div>
        </div></>


    )
}

export default Progressbar