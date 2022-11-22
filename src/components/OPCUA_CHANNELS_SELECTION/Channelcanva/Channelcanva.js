import React, { useState, useEffect } from 'react'
import './Channelcanva.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updateChannelsConfig } from '../../../config'

/* let oldProtocol = get_opc_conf(); */

function Channelcanva(props) {

    const { show, handleClose, selectedChannelID, updateMethod, protocolName } = props



    const [Protocol, updateProtocol] = useState()

    useEffect(() => {
        updateProtocol(updateMethod())
    }, [])


    let myChannelIndex = 0;
    if (Protocol !== undefined) {
        Protocol[protocolName].channels.map((item, indx) => {
            if (item.device_ID === selectedChannelID) {
                myChannelIndex = indx;

            }
        })

    }


    const [OPCServerIp, setOPCServerIP] = useState(Protocol !== undefined ? Protocol[protocolName].channels[myChannelIndex].connection_parameter.opc_server_ip : '')
    const [OPCServerPort, setOPCServerPort] = useState(Protocol !== undefined ? Protocol[protocolName].channels[myChannelIndex].connection_parameter.opc_server_port : '')
    const [Username, setUsername] = useState(Protocol !== undefined ? Protocol[protocolName].channels[myChannelIndex].connection_parameter.authentication.username : '')
    const [Password, setPassword] = useState(Protocol !== undefined ? Protocol[protocolName].channels[myChannelIndex].connection_parameter.authentication.password : '')
    const [Encryption, setEncryption] = useState(Protocol !== undefined ? Protocol[protocolName].channels[myChannelIndex].connection_parameter.encryption.enabled : '')
    const [CertFilename, setCertFilename] = useState(Protocol !== undefined ? Protocol[protocolName].channels[myChannelIndex].connection_parameter.encryption.cert_filename : '')
    const [KeyFilename, setKeyFilename] = useState(Protocol !== undefined ? Protocol[protocolName].channels[myChannelIndex].connection_parameter.encryption.key_filename : '')
    const [SamplingInterval, setSamplingInterval] = useState(Protocol !== undefined ? Protocol[protocolName].channels[myChannelIndex].sampling_interval : '')
    const [SelectAllTagsByDefault, setSelectAllTagsByDefault] = useState(Protocol !== undefined ? Protocol[protocolName].channels[myChannelIndex].select_all_tags_by_default : '')
    const [TagsFilename, setTagsFilename] = useState(Protocol !== undefined ? Protocol[protocolName].channels[myChannelIndex].tags_filename : '')
    const [ThingName, setThingName] = useState(Protocol !== undefined ? Protocol[protocolName].channels[myChannelIndex].thing_name : '')
    const [Auth, setAuth] = useState(Protocol !== undefined ? Protocol[protocolName].channels[myChannelIndex].connection_parameter.authentication.enabled : '')


    useEffect(() => {


        if (Protocol !== undefined) {
            setOPCServerIP(Protocol[protocolName].channels[myChannelIndex].connection_parameter.opc_server_ip);
            setOPCServerPort(Protocol[protocolName].channels[myChannelIndex].connection_parameter.opc_server_port);
            setAuth(Protocol[protocolName].channels[myChannelIndex].connection_parameter.authentication.enabled)
            setUsername(Protocol[protocolName].channels[myChannelIndex].connection_parameter.authentication.username)
            setPassword(Protocol[protocolName].channels[myChannelIndex].connection_parameter.authentication.password)
            setEncryption(Protocol[protocolName].channels[myChannelIndex].connection_parameter.encryption.enabled)
            setCertFilename(Protocol[protocolName].channels[myChannelIndex].connection_parameter.encryption.cert_filename)
            setKeyFilename(Protocol[protocolName].channels[myChannelIndex].connection_parameter.encryption.key_filename)
            setSamplingInterval(Protocol[protocolName].channels[myChannelIndex].sampling_interval)
            setSelectAllTagsByDefault(Protocol[protocolName].channels[myChannelIndex].select_all_tags_by_default)
            setTagsFilename(Protocol[protocolName].channels[myChannelIndex].tags_filename)
            setThingName(Protocol[protocolName].channels[myChannelIndex].thing_name)


        }

    }, [Protocol])


    function updateOPCServerIp(event) {
        setOPCServerIP(event.target.value)

    }
    function updateOPCServerPort(event) {
        setOPCServerPort(event.target.value);
    }
    function updateUsername(event) {
        setUsername(event.target.value)
    }
    function updatePassword(event) {
        setPassword(event.target.value)
    }
    function updateSamplingInterval(event) {
        setSamplingInterval(event.target.value)
    }
    function updateTagsFilename(event) {
        setTagsFilename(event.target.value)
    }
    function updateThingName(event) {
        setThingName(event.target.value)
    }
    function checkAuth(event) {
        setAuth(event.target.checked)
    }
    function checkEncryption(event) {
        setEncryption(event.target.checked)
    }
    function checkSelectAllTagsByDefault(event) {
        setSelectAllTagsByDefault(event.target.checked)
    }
    function updateCertFilename(event) {
        setCertFilename(event.target.value)
    }
    function updateKeyFilename(event) {
        setKeyFilename(event.target.value)
    }


    function handleSubmit(event) {
        event.preventDefault();
    /*     console.log(Protocol[protocolName].channels) */
        let newChannel = {
            connection_parameter: {
                authentication: {
                    enabled: Auth,
                    password: Password,
                    username: Username
                },
                encryption: {
                    enabled: Encryption,
                    cert_filename: CertFilename,
                    key_filename: KeyFilename
                },
                opc_server_ip: OPCServerIp,
                opc_server_port: OPCServerPort
            },
            device_ID: selectedChannelID,
            sampling_interval: SamplingInterval,
            select_all_tags_by_default: SelectAllTagsByDefault,
            tags_filename: TagsFilename,
            thing_name: ThingName
        };

        Protocol[protocolName].channels[myChannelIndex] = newChannel;
        updateProtocol(Protocol)
        updateChannelsConfig(protocolName, Protocol[protocolName].channels)
        console.log(Protocol)


    }

    return (
        <>

            <Offcanvas show={show} onHide={handleClose} scroll='true' backdrop={true} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{selectedChannelID}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3"/*  controlId="formBasicEmail" */>
                            <Form.Label>OPC Server IP</Form.Label>
                            <Form.Control onChange={updateOPCServerIp} type="text" placeholder="IP adress" defaultValue={OPCServerIp} />
                        </Form.Group>

                        <Form.Group className="mb-3" /* controlId="formBasicPassword" */>
                            <Form.Label>OPC Server port</Form.Label>
                            <Form.Control onChange={updateOPCServerPort} type="text" placeholder="Port" defaultValue={OPCServerPort} />
                        </Form.Group>
                        <Form.Group className="mb-3" /* controlId="formBasicCheckbox" */>
                            <Form.Check onChange={checkAuth} type="checkbox" label="Authentication" checked={Auth} />
                        </Form.Group>
                        {Auth && <>
                            <Form.Group className="mb-3" /* controlId="formBasicEmail" */>
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={updateUsername} type="text" placeholder="Username" defaultValue={Username} />
                            </Form.Group>

                            <Form.Group className="mb-3" /* controlId="formBasicPassword" */>
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={updatePassword} type="password" placeholder="Password" defaultValue={Password} />
                            </Form.Group>
                        </>}
                        <Form.Group className="mb-3" /* controlId="formBasicCheckbox" */>
                            <Form.Check onChange={checkEncryption} type="checkbox" label="Encryption" checked={Encryption} />
                        </Form.Group>

                        {Encryption && <>
                            <Form.Group className="mb-3" /* controlId="formBasicEmail" */>
                                <Form.Label>Certification filename</Form.Label>
                                <Form.Control onChange={updateCertFilename} defaultValue={CertFilename} type="text" placeholder="IP adress" />
                            </Form.Group>

                            <Form.Group className="mb-3" /* controlId="formBasicPassword" */>
                                <Form.Label>Key filename</Form.Label>
                                <Form.Control onChange={updateKeyFilename} defaultValue={KeyFilename} type="password" placeholder="Password" />
                            </Form.Group>
                        </>}
                        <Form.Group className="mb-3" /* controlId="formBasicPassword" */>
                            <Form.Label>Sampling interval</Form.Label>
                            <Form.Control onChange={updateSamplingInterval} type="text" placeholder="Sampling interval" defaultValue={SamplingInterval} />
                        </Form.Group>

                        <Form.Group className="mb-3" /* controlId="formBasicPassword" */>
                            <Form.Label>Tags filename</Form.Label>
                            <Form.Control onChange={updateTagsFilename} type="text" placeholder="Tags filename" defaultValue={TagsFilename} />
                        </Form.Group>
                        <Form.Group className="mb-3"/*  controlId="formBasicEmail" */>
                            <Form.Label>Thing name</Form.Label>
                            <Form.Control onChange={updateThingName} type="text" placeholder="Thing name" defaultValue={ThingName} />
                        </Form.Group>

                        <Form.Group className="mb-3" /* controlId="formBasicCheckbox" */>
                            <Form.Check onClick={checkSelectAllTagsByDefault} type="checkbox" label="Select all tags by default" defaultChecked={SelectAllTagsByDefault} />
                        </Form.Group>



                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Channelcanva