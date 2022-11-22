import React, { useEffect, useState } from 'react'
import './THINGWORX_CARD.css'
import Pagenum from '../Pagenum/Pagenum';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { updateThingworxConfig } from '../../../config'




const THINGWORX_CARD = (props) => {

    const { updateMethod, closeWindow } = props
    const [Thingworx, updateThingworx] = useState(
        {
            appkey: '',
            host: '',
            proxy: {
                enabled: '',
                host: '',
                port: '',
                user: ''
            }
        }
    )



    useEffect(() => {
        updateThingworx(updateMethod())
    }, [])
    useEffect(() => {
        setServerHost(Thingworx.host);
        setAppkey(Thingworx.appkey);
        setProxy(Thingworx.proxy.enabled)
        setProxyHost(Thingworx.proxy.host)
        setProxyPort(Thingworx.proxy.port)
        setProxyUsername(Thingworx.proxy.username)
        setProxyPassword(Thingworx.proxy.password)
    }, [Thingworx])

    const [ServerHost, setServerHost] = useState(Thingworx !== undefined ? Thingworx.host : '')
    const [Appkey, setAppkey] = useState(Thingworx !== undefined ? Thingworx.appkey : '')
    const [Proxy, setProxy] = useState(Thingworx !== undefined ? Thingworx.proxy.enabled : '')
    const [ProxyHost, setProxyHost] = useState(Thingworx !== undefined ? Thingworx.proxy.host : '')
    const [ProxyPort, setProxyPort] = useState(Thingworx !== undefined ? Thingworx.proxy.port : '')
    const [ProxyUsername, setProxyUsername] = useState(Thingworx !== undefined ? Thingworx.proxy.username : '')
    const [ProxyPassword, setProxyPassword] = useState(Thingworx !== undefined ? Thingworx.proxy.password : '')

    const [ProgressChannel, setProgressChannel] = useState(1);


    function handleChange(event) {
        switch (event.target.name) {
            case 'server-host':
                setServerHost(event.target.value)
                break;
            case 'appkey':
                setAppkey(event.target.value)
                break;
            case 'proxy-enabled':
                setProxy(event.target.checked);
                break;
            case 'proxy-server-host':
                setProxyHost(event.target.value)
                break;
            case 'proxy-server-port':
                setProxyPort(event.target.value)
                break;
            case 'proxy-server-username':
                setProxyUsername(event.target.value)
                break;
            case 'proxy-server-password':
                setProxyPassword(event.target.value)
                break;
            default:
                break;
        }
    }


    function handleSubmit(event) {
        event.preventDefault();
        if (event.nativeEvent.submitter.name === 'submit') {
            let newThingworx = {
                host: ServerHost,
                appkey: Appkey,
                proxy: {
                    enabled: Proxy,
                    host: ProxyHost,
                    port: ProxyPort,
                    username: ProxyUsername,
                    password: ProxyPassword
                }

            }
            console.log('submit?')
            updateThingworxConfig(newThingworx)
            updateThingworx(newThingworx)

        }

        closeWindow();

    }

    function handleNextPage(event) {
        switch (event.target.name) {
            case 'thingworx':
                setProgressChannel(2);
                break;
            case 'proxy':
                setProgressChannel(1);
                break;

            default:
                setProgressChannel(1)
        }
    }



    return (
        <>
            <Pagenum
                nPage={ProgressChannel}
                totalPages={2}
                key={Math.random()}
            />
            <Row className="justify-content-md-center">

                <Col md="auto"><h3 className="text-center text-primary">Machine to Cloud</h3></Col>

            </Row>
            <div className='box-margin'>
                <div className="container ">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 border border-primary border-padding rounded">
                            <div className="col-md-12">

                                <Form onSubmit={handleSubmit}>
                                    {ProgressChannel === 1 && <>
                                        <Form.Group className="mb-3"/*  controlId="formBasicEmail" */>
                                            <Form.Label>Server Host</Form.Label>
                                            <Form.Control onChange={handleChange} type="text" placeholder="Server Host" name='server-host' defaultValue={ServerHost} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" /* controlId="formBasicPassword" */>
                                            <Form.Label>Appkey</Form.Label>
                                            <Form.Control onChange={handleChange} type="password" placeholder="Appkey" name='appkey' defaultValue={Appkey} />
                                        </Form.Group>

                                        <div className="mb-1">
                                            <Row>

                                                <Col md={{ span: 3, offset: 9 }}>
                                                    <Button variant="primary" size="md" name="thingworx" onClick={handleNextPage}>
                                                        Next
                                                    </Button></Col>
                                            </Row>
                                        </div>
                                    </>}
                                    {ProgressChannel === 2 && <>
                                        <Form.Group className="mb-3" /* controlId="formBasicCheckbox" */>
                                            <Form.Check onChange={handleChange} type="checkbox" label="Proxy Server" defaultChecked={Proxy} name='proxy-enabled' />
                                        </Form.Group>
                                        {Proxy === true && <>
                                            <Form.Group className="mb-3"/*  controlId="formBasicEmail" */>
                                                <Form.Label>Proxy Server Host</Form.Label>
                                                <Form.Control onChange={handleChange} type="text" placeholder="Proxy Server Host" name='proxy-server-host' defaultValue={ProxyHost} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" /* controlId="formBasicPassword" */>
                                                <Form.Label>Proxy Server Port</Form.Label>
                                                <Form.Control onChange={handleChange} type="text" placeholder="Proxy Server Port" name='proxy-server-port' defaultValue={ProxyPort} />
                                            </Form.Group>
                                            <Form.Group className="mb-3"/*  controlId="formBasicEmail" */>
                                                <Form.Label>Proxy Username</Form.Label>
                                                <Form.Control onChange={handleChange} type="text" placeholder="Proxy Username" name='proxy-server-username' defaultValue={ProxyUsername} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" /* controlId="formBasicPassword" */>
                                                <Form.Label>Proxy Password</Form.Label>
                                                <Form.Control onChange={handleChange} type="password" placeholder="Proxy Password" name='proxy-server-password' defaultValue={ProxyPassword} />
                                            </Form.Group>
                                        </>}


                                        <div className="mb-3">
                                            <Row>
                                                <Col md={{ offset: 1, span: 2 }}>
                                                    <Button variant="danger" size="md" name="back" type='submit'>
                                                        Back
                                                    </Button></Col>
                                                <Col md={{ offset: 2, span: 1 }}>
                                                    <Button variant="success" size="md" name="submit" type='submit'>
                                                        Apply
                                                    </Button></Col>
                                                <Col md={{ offset: 3, span: 1 }}>
                                                    <Button type='button' variant="primary" size="md" name="encryption" onClick={handleNextPage}>
                                                        Next
                                                    </Button></Col>

                                            </Row>
                                        </div>
                                    </>}

                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )

}


export default THINGWORX_CARD