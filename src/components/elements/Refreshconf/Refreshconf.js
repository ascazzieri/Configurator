import React from 'react'
import './Refreshconf.css'
import {TfiReload} from 'react-icons/tfi'

const Refreshconf = (props) => {

    const { updateComponent} = props;


    const handleClick = () => {
        let refreshedConf = props.toUpdate;
        updateComponent(refreshedConf)
      

    }

    return (
        <>
            <div className='container refresh-container'>
                <button type="button" className="btn btn-primary btn-sm refresh-button" onClick={handleClick}><TfiReload /> {props.text}</button>

            </div>





        </>
    )



}
Refreshconf.defaultProps = {
    isProxy: "",
    text: "Refresh"
}

export default Refreshconf