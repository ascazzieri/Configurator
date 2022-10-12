import React, { useState } from 'react'
import './OPCUA_CARD.css'
import Checkout from '../Checkout/Checkout'
import Form from '../Form/Form'
import CHECKBOX_FORM from '../CHECKBOX_FORM/CHECKBOX_FORM'








const OPCUA_CARD = (props) => {

    const [userAuth, setUserAuth] = useState(false)
    const [encryption, setEncryption] = useState(false)

    return (
        <div id="login" className='box-margin'>
            <div className="container ">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 border border-primary border-padding rounded">
                        <div className="col-md-12">
                            <form className="form" action="" method="post">

                                {props.cardNumber === 1 && <>
                                    <h3 className="text-center text-info">{props.title}</h3>
                                    <Form
                                        div_id="OPC.configuration.device-id.div"
                                        input_id="OPC.configuration.deviceid"
                                        label="Device ID"
                                        type="text"
                                        placeholder="Insert device ID"
                                        hint=""

                                    />
                                    <Form
                                        div_id="OPC.configuration.server-ip.div"
                                        input_id="OPC.configuration.server-ip.div"
                                        label="OPC server IP"
                                        type="text"
                                        placeholder="Insert OPC Server IP"
                                        hint=""

                                    />
                                    <Form
                                        div_id="OPC.configuration.server-port.div"
                                        input_id="OPC.configuration.server-port"
                                        label="OPC server port"
                                        type="text"
                                        placeholder="Insert OPC server port number"
                                        hint=""

                                    /></>}
                                {props.cardNumber === 2 && <>
                                    <h3 className="text-center text-info">{props.title}</h3>
                                    {userAuth && <>

                                        <Form
                                            div_id="OPC.configuration.Username.div"
                                            input_id="OPC.configuration.Username"
                                            label="Username:"
                                            type="text"
                                            placeholder="Insert username:"
                                            hint=""

                                        />
                                        <Form
                                            div_id="thingworx.configuration.host.div"
                                            input_id="thingworx.configuration.host"
                                            label="Password:"
                                            type="password"
                                            placeholder="insert password"
                                            hint=""

                                        />

                                    </>}
                                    <CHECKBOX_FORM
                                        id="OPC.configuration.userAuth"
                                        label="User authentication"
                                        checkbox_state={setUserAuth}
                                    />
                                </>}
                                {props.cardNumber === 3 && <>
                                    <h3 className="text-center text-info">{props.title}</h3>
                                    <Form
                                        div_id="OPC.configuration.sampling-interval.div"
                                        input_id="OPC.configuration.sampling-interval"
                                        label="Sampling interval:"
                                        type="text"
                                        placeholder="Insert sampling interval"
                                        hint=""

                                    />
                                    <Form
                                        div_id="OPC.configuration.tags-filename.div"
                                        input_id="OPC.configuration.tags-filename"
                                        label="Tags filename:"
                                        type="text"
                                        placeholder="Insert tags filename"
                                        hint=""

                                    />
                                    <Form
                                        div_id="OPC.configuration.thing-name.div"
                                        input_id="OPC.configuration.thing-name"
                                        label="Thing name:"
                                        type="text"
                                        placeholder="Insert Thing name"
                                        hint=""

                                    />
                                    <CHECKBOX_FORM
                                        id="OPC.configuration.select-all-tags-by-default"
                                        label="Select all Tags by default"
                                        checkbox_state={setUserAuth}
                                    />
                                </>
                                }
                                {props.cardNumber === 4 && <>
                                    <h3 className="text-center text-info">{props.title}</h3>
                                    {encryption && <>
                                        <Form
                                            div_id="OPC.configuration.cert-filename.div"
                                            input_id="OPC.configuration.cert-filename"
                                            label="Certification filename:"
                                            type="text"
                                            placeholder="Insert certification filename"
                                            hint=""

                                        />
                                        <Form
                                            div_id="OPC.configuration.key-filename.div"
                                            input_id="OPC.configuration.key-filename"
                                            label="Key filename:"
                                            type="text"
                                            placeholder="Insert key filename"
                                            hint=""

                                        />
                                    </>}


                                    <CHECKBOX_FORM
                                        id="OPC.configuration.enable-encrypt"
                                        label="Encryption"
                                        checkbox_state={setEncryption}
                                    />


                                    <Checkout
                                        text="Send configuration to Dashboard" />
                                </>}




                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default OPCUA_CARD