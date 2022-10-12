import React, { useState } from 'react'
import './THINGWORX_CARD.css'
import $ from 'jquery'
import Form from '../Form/Form'
import Checkout from '../Checkout/Checkout'
import CHECKBOX_FORM from '../CHECKBOX_FORM/CHECKBOX_FORM'




const THINGWORX_CARD = (props) => {

    const [proxyState, setProxyState] = useState(false)
 

 
  

  /*   React.useEffect(() => {
        const btn = document.getElementsByTagName('div')
        console.log(btn)
    }) */

    return (
        <div className='box-margin'>
            <h3 className="text-center text-white pt-5">Thingworx form</h3>
            <div className="container ">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 border border-primary border-padding rounded">
                        <div className="col-md-12">
                            <form className="form" action="" method="post">

                                {props.cardNumber === 1 && <>
                                    <h3 className="text-center text-info">{props.title}</h3>
                                    <Form
                                        div_id="thingworx.configuration.host.div"
                                        input_id="thingworx.configuration.host"
                                        label="Host:"
                                        type="text"
                                        placeholder="Insert server Hostname"
                                        hint=""

                                    />
                                    <Form
                                        div_id="thingworx.configuration.appkey.div"
                                        input_id="thingworx.configuration.appkey"
                                        label="Appkey:"
                                        type="password"
                                        placeholder="Insert Thing's Appkey"
                                        hint=""

                                    />
                                </>}
                                {props.cardNumber === 2 && <>
                                    {proxyState && <>
                                        <h3 className="text-center text-info">Proxy</h3>
                                        <Form
                                            div_id="thingworx.configuration.proxy.host.div"
                                            input_id="thingworx.configuration.proxy.host"
                                            label="Host:"
                                            type="text"
                                            placeholder="Insert proxy IP Address"
                                            hint=""

                                        />
                                        <Form
                                            div_id="thingworx.configuration.proxy.port.div"
                                            input_id="thingworx.configuration.proxy.port"
                                            label="Port:"
                                            type="text"
                                            placeholder="Insert proxy port number"
                                            hint=""

                                        />
                                        <Form
                                            div_id="thingworx.configuration.proxy.username.div"
                                            input_id="thingworx.configuration.proxy.username"
                                            label="Username:"
                                            type="text"
                                            placeholder="Insert proxy username"
                                            hint=""

                                        />
                                        <Form
                                            div_id="thingworx.configuration.proxy.password.div"
                                            input_id="thingworx.configuration.proxy.password"
                                            label="Password:"
                                            type="password"
                                            placeholder="Insert proxy password"
                                            hint=""

                                        /></>}
                                    <CHECKBOX_FORM
                                        id="thingworx.configuration.proxy.enabled.div"
                                        label="Proxy"
                                        checkbox_state={setProxyState}
                                    />

                                    <Checkout
                                        text="Send TW Configuration" />
                                </>}






                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )

}


export default THINGWORX_CARD