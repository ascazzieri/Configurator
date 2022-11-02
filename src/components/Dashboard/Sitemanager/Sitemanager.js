import { Checkbox, Form, Input, Select } from 'antd';
import React, { useState, useReducer, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const { Option } = Select;

const errorReducer = (state, action) => {
    if (action.type === 'ALERT_ERROR') {
        return { alertMsg: "Please enable writing permissions before clicking 'Apply' button", isAlert: true, alertType: 'error' }
    } else {
        return { alertMsg: '', isAlert: false, alertType: '' }
    }

}


const Sitemanager = (props) => {



    const [IPConfig, setIPConfig] = useState('Static')
    const [writeData, setWriteData] = useState(false)
    const [NetworkError, dispatchNetworError] = useReducer(errorReducer, { alertMsg: '', isAlert: false, alertType: '' })

    useEffect(() => {
        if (NetworkError.isAlert === true) {
            props.sendError(NetworkError)
        }
    }, [NetworkError, NetworkError.isAlert, props])



    const onFinish = (values) => {
        if (writeData === false) {
            dispatchNetworError({ type: 'ALERT_ERROR' })
            return;
        } else {
            dispatchNetworError({})
        }
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onIPConfigChange = (value) => {
        switch (value) {
            case 'static':
                setIPConfig('Static')
                return;
            case 'dhcp':
                setIPConfig('DHCP')
                return;
            default:
                console.log('Unknown input')
        }
    };

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
                        <Option value="static">Static</Option>
                        <Option value="dhcp">DHCP</Option>

                    </Select>
                </Form.Item>
                {IPConfig === 'Static' && <Form.Item

                    label="IP/MASK"
                    name="IP/MASK"
                    rules={[
                        {
                            required: true,
                            message: 'Please input IP address!',
                        },
                    ]}
                >
                    <Input placeholder="Separate different IPs with commas. Example: 192.168.1.1/24,10.10.1.1/24." />
                </Form.Item>}


                <Form.Item
                    label="Default Gateway"
                    name="Default Gateway"
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="DNS Server"
                    name="DNS Server"
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >
                    <Input placeholder='Insert IPs separated by commas.' />
                </Form.Item>

                <Form.Item
                    name="Enable writing network data on device"
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
export default Sitemanager;