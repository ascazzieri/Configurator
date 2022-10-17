import React from 'react'
import './Refreshconf.css'

const Reafreshconf = (props) => {

    const { ClickToRefresh, updateComponent } = props;

    const handleClick = () => {
        ClickToRefresh();
        updateComponent(props.toUpdate)

    }

    return (
        <>
            <div className='container'>
                <button type="button" className="btn btn-primary btn-lg btn-block container-fluid" onClick={handleClick}>{props.text}</button>

            </div>





        </>
    )



}

export default Reafreshconf