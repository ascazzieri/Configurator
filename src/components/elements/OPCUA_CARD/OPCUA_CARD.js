import React, { useState } from 'react'
import './OPCUA_CARD.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Pagenum from '../Pagenum/Pagenum'
import { updateChannelsConfig } from '../../../config';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';









const OPCUA_CARD = (props) => {
    const { updateMethod, protocolName, toClose } = props

    const [Protocol, updateProtocol] = useState(updateMethod())

    const [ProgressChannel, setProgressChannel] = useState(1);


    const [Device_ID, setDevice_ID] = useState('Suca')
    const [OPCServerIp, setOPCServerIP] = useState('')
    const [OPCServerPort, setOPCServerPort] = useState('')
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [userAuth, setUserAuth] = useState(false)
    const [Encryption, setEncryption] = useState(false)
    const [CertFilename, setCertFilename] = useState('')
    const [KeyFilename, setKeyFilename] = useState('')
    const [SamplingInterval, setSamplingInterval] = useState('')
    const [SelectAllTagsByDefault, setSelectAllTagsByDefault] = useState(false)
    const [TagsFilename, setTagsFilename] = useState('')
    const [ThingName, setThingName] = useState('')



    function updateDevice_ID(event) {
        setDevice_ID(event.target.value)
    }
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
        setUserAuth(event.target.checked)
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
        let newChannel = {
            connection_parameter: {
                authentication: {
                    enabled: userAuth,
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
            device_ID: Device_ID,
            sampling_interval: SamplingInterval,
            select_all_tags_by_default: SelectAllTagsByDefault,
            tags_filename: TagsFilename,
            thing_name: ThingName
        };
        Protocol[protocolName].channels.push(newChannel);
        updateProtocol(Protocol);
        updateChannelsConfig(protocolName, Protocol[protocolName].channels)
        toClose();
        console.log(Protocol)
    }

    function handleNextPage(event) {
        switch (event.target.name) {
            case 'server':
                setProgressChannel(2);
                break;
            case 'authentication':
                setProgressChannel(3);
                break;
            case 'tags':
                setProgressChannel(4);
                break;
            case 'encryption':
                setProgressChannel(1)
                break;
            default:
                setProgressChannel(1)
        }
    }



    return (
        <>
            <Pagenum
                nPage={ProgressChannel}
                totalPages={4}
                key={Math.random()}
            />

            <div id="login" className='box-margin'>
                <div className="container ">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 border border-primary border-padding rounded">
                            <div className="col-md-12">
                                <h3 className="text-center text-primary">Create Channel</h3>
                                <Form onSubmit={handleSubmit} action="" method="post">

                                    {ProgressChannel === 1 && <>
                                        <h4 className="text-center text-info">Server</h4>
                                        <Form.Group className="mb-3"/*  controlId="formBasicEmail" */>
                                            <Form.Label>Device ID</Form.Label>
                                            <Form.Control onChange={updateDevice_ID} type="text" placeholder="Device ID" />
                                        </Form.Group>
                                        <Form.Group className="mb-3"/*  controlId="formBasicEmail" */>
                                            <Form.Label>OPC Server IP</Form.Label>
                                            <Form.Control onChange={updateOPCServerIp} type="text" placeholder="IP adress" defaultValue={OPCServerIp} />
                                        </Form.Group>
                                        <Form.Group className="mb-3"/*  controlId="formBasicEmail" */>
                                            <Form.Label>OPC Server Port</Form.Label>
                                            <Form.Control onChange={updateOPCServerPort} type="text" placeholder="Port number" defaultValue={OPCServerPort} />
                                        </Form.Group>
                                        <div className="mb-2">
                                            <Row>

                                                <Col md={{ span: 3, offset: 9 }}>
                                                    <Button variant="primary" size="md" name="server" onClick={handleNextPage}>
                                                        Next
                                                    </Button></Col>
                                            </Row>
                                        </div>


                                    </>}



                                    {ProgressChannel === 2 && <>
                                        <h4 className="text-center text-info">Authentication</h4>
                                        <Form.Group className="mb-3" /* controlId="formBasicCheckbox" */>
                                            <Form.Check onClick={checkAuth} type="checkbox" label="Authentication" defaultChecked={userAuth} />
                                        </Form.Group>
                                        {userAuth && <>
                                            <Form.Group className="mb-3" /* controlId="formBasicEmail" */>
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control onChange={updateUsername} type="text" placeholder="Username" defaultValue={Username} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" /* controlId="formBasicPassword" */>
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control onChange={updatePassword} type="password" placeholder="Password" defaultValue={Password} />
                                            </Form.Group>

                                        </>}
                                        <div className="mb-2">
                                            <Row>

                                                <Col md={{ span: 3, offset: 9 }}>
                                                    <Button variant="primary" size="md" name="authentication" onClick={handleNextPage}>
                                                        Next
                                                    </Button></Col>
                                            </Row>
                                        </div>
                                    </>}



                                    {ProgressChannel === 3 && <>
                                        <h4 className="text-center text-info">Tags</h4>
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
                                        <div className="mb-2">
                                            <Row>

                                                <Col md={{ span: 3, offset: 9 }}>
                                                    <Button variant="primary" size="md" name="tags" onClick={handleNextPage}>
                                                        Next
                                                    </Button></Col>
                                            </Row>
                                        </div>
                                    </>}



                                    {ProgressChannel === 4 && <>
                                        <h4 className="text-center text-info">Encryption</h4>

                                        <Form.Group className="mb-3" /* controlId="formBasicCheckbox" */>
                                            <Form.Check onClick={checkEncryption} type="checkbox" label="Encryption" defaultChecked={Encryption} />
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



                                        <div className="mb-1">
                                            <Row>
                                                <Col md={{ offset: 6, span: 2 }}>
                                                    <Button variant="primary" size="md" name="encryption" onClick={handleNextPage}>
                                                        Next
                                                    </Button></Col>
                                                <Col md={{ offste: 8, span: 4 }}>
                                                    <Button variant="success" size="md" name="encryption" type='submit'>
                                                        Create Channel
                                                    </Button></Col>
                                            </Row>
                                        </div>


                                    </>}






                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div ></>

    )

}

export default OPCUA_CARD