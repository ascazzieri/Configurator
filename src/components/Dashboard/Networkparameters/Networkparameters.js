import { Checkbox, Form, Input, Select, Space, Badge } from 'antd';
import React, { useState, useReducer, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BiWifi, BiWifiOff } from "react-icons/bi";
import WifiTable from './WifiTable/WifiTable'
import { checkAerial } from '../../../wifi-networks'
import { getNetworkConf, updateNetworkConfig } from '../../../config'


const { Option } = Select;

const errorReducer = (state, action) => {
    if (action.type === 'ALERT_ERROR') {
        return { alertMsg: "Please enable writing permissions before clicking 'Apply' button", isAlert: true, alertType: 'error' }
    } else {
        return { alertMsg: '', isAlert: false, alertType: '' }
    }

}


const Networkparameters = (props) => {

    const [Network, setNetwork] = useState(getNetworkConf())


    const [IPConfig, setIPConfig] = useState(Network.dhcp === true ? 'dhcp' : 'static')
    const [IPMask, setIPMask] = useState(Network.static.ip)
    const [DefaultGTW, setDefaultGTW] = useState(Network.static.gateway)
    const [DNSServer, setDNSServer] = useState(Network.static.dns)
    const [Connection, setConnection] = useState(Network.if_wan_medium)
    const [Wifi, setWifi] = useState(Network.wireless)
    const [isAerial, setIsAerial] = useState(checkAerial())
    const [writeData, setWriteData] = useState(false)
    const [NetworkError, dispatchNetworError] = useReducer(errorReducer, { alertMsg: '', isAlert: false, alertType: '' })


    const [buttonClicked, setbuttonClicked] = useState(false)



    useEffect(() => {
        if (NetworkError.isAlert === true) {
            props.sendError(NetworkError)
        }

    }, [buttonClicked])





    const handleSubmit = () => {
        let newNetwork = {
            "routes": {},
            "net_scan": [],
            'dhcp': IPConfig === 'dhcp' ? true : false,
            'static': {
                ip: IPMask,
                dns: DNSServer,
                gateway: DefaultGTW,
            },
            'if_wan_medium': Connection,
            "ntp": [],
            "nat": true,
            "machine_to_internet": true,
            "wireless": Wifi


        };
        setNetwork(newNetwork)
        updateNetworkConfig(newNetwork)
    }

    const onFinish = (values) => {
        if (writeData === false) {
            dispatchNetworError({ type: 'ALERT_ERROR' })
            setbuttonClicked(!buttonClicked);

            return;
        } else {
            dispatchNetworError({})
            handleSubmit();
        }
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onIPConfigChange = (value) => {
        switch (value) {
            case 'static':
                setIPConfig('static')
                return;
            case 'dhcp':
                setIPConfig('dhcp')
                return;
            default:
                console.log('Unknown input')
        }
    };
    const onDeafultGTWChange = (value) => {
        setDefaultGTW(value.target.value)
    }
    const onDNSServerChange = (value) => {
        setDNSServer(value.target.value)
    }
    const onConnectionChange = (value) => {
        switch (value) {
            case 'ethernet':
                setConnection('thernet')
                return;
            case 'wireless':
                setConnection('Wireless')
                return;
            default:
                console.log('Unknown input')
        }
        setInterval(setIsAerial(checkAerial()), 10000)
    }
    const onIPMaskChange = (value) => {
        console.log(value.target.value)
        setIPMask(value)
    }

    const handleWriteData = (value) => {
        setWriteData(value.target.checked)
    }

    return (
        <>
            <Form
                name="basic"

                initialValues={{
                    remember: true,
                }}

                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="IP Configuration"
                    label="IP Configuration"
                    initialValue={IPConfig}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select an option between Static and DHCP."
                        onChange={onIPConfigChange}
                        allowClear
                    >
                        <Option value="static" label="static">Static</Option>
                        <Option value="dhcp" label="dhcp">DHCP</Option>

                    </Select>
                </Form.Item>
                {IPConfig === 'static' && <Form.Item

                    label="IP/MASK"
                    name="IP/MASK"
                    rules={[
                        {
                            required: true,
                            message: 'Please input IP address!',
                        },
                    ]}
                    initialValue={IPMask}

                >
                    <Input allowClear onChange={onIPMaskChange} placeholder="Separate different IPs with commas. Example: 192.168.1.1/24,10.10.1.1/24." />
                </Form.Item>}


                <Form.Item
                    label="Default Gateway"
                    name="Default Gateway"
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                    initialValue={DefaultGTW}
                >
                    <Input onChange={onDeafultGTWChange} placeholder='Insert IPs separated by commas.' />
                </Form.Item>
                <Form.Item
                    label="DNS Server"
                    name="DNS Server"
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                    initialValue={DNSServer.toString()}
                >
                    <Input onChange={onDNSServerChange} placeholder='Insert IPs separated by commas.' />
                </Form.Item>
                <Form.Item
                    name="Connection"
                    label="Connection"
                    initialValue={Connection}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select an option between Ethernet and Wireless."
                        onChange={onConnectionChange}
                        allowClear
                    >
                        <Option value="ethernet">Ethernet</Option>
                        <Option value="wireless">Wireless</Option> */

                    </Select>
                </Form.Item>

                {Connection === 'Wireless' && <>

                    <div className="mb-2">
                        <Row>
                            <Col md={{ offset: 9, span: 5 }}>
                                <Space>

                                    <Badge className="site-badge-count-109" count={isAerial === false ? <div style={{ color: '#f5222d' }}><BiWifiOff /> Aerial NOT Connected</div> : 0} />
                                    <Badge className="site-badge-count-109" count={isAerial === true ? <div style={{ color: '#52c41a' }} ><BiWifi />Aerial Connected</div> : 0} />

                                </Space></Col>

                        </Row>
                    </div>
                    {isAerial && <WifiTable
                        Wifi={Wifi}
                        returnWifi={setWifi} />}



                </>}
                <hr />


                <Form.Item
                    name="Enable writing data on device"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 1,
                        span: 16,
                    }}
                /*   rules={[
                      {
                          required: false,
                          message: 'Enable writing data before Apply',
                      },
                  ]} */
                >
                    <Checkbox defaultChecked={writeData} onChange={handleWriteData}>Enable writing network data on device</Checkbox>
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <div className="mb-1">
                        <Row>
                            <Col md={{ offset: 9, span: 2 }}>
                                <Button variant="success" size="md" name="network-submit" type='submit' >
                                    Apply
                                </Button></Col>

                        </Row>
                    </div>
                </Form.Item>
            </Form ></>

    );
};


export default Networkparameters;
