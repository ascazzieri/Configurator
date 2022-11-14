import { Checkbox, Form, Input, Select } from 'antd';
import React, { useState, useReducer, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { getSitemanagerConf, updateSitemanagerConfig, updateSitemanagerAgentsConfig } from '../../../config';
import AgentsCanva from './AgentsCanva/AgentsCanva';
import NotificationPopUp from '../../elements/NotificationPopUp/NotificationPopUp'


const errorReducer = (state, action) => {
    if (action.type === 'ALERT_ERROR') {
        return { alertMsg: "Please enable writing permissions before clicking 'Apply' button", isAlert: true, alertType: 'error' }
    } else {
        return { alertMsg: '', isAlert: false, alertType: '' }
    }

}


const Sitemanager = (props) => {

    const [Sitemanager, setSitemanager] = useState(getSitemanagerConf())

    const [Domain, setDomain] = useState(Sitemanager.domain)
    const [Server, setServer] = useState(Sitemanager.server)
    const [SMENameAsHostname, setSMENameAsHostname] = useState(Sitemanager.nameashostname)
    const [SMEName, setSMEName] = useState(Sitemanager.name)
    const [SMEAgents, setSMEAgents] = useState(Sitemanager.agents)
    const [writeData, setWriteData] = useState(false)
    const [SitemanagerError, dispatchSitemanagerError] = useReducer(errorReducer, { alertMsg: '', isAlert: false, alertType: '' })
    const [buttonClicked, setbuttonClicked] = useState(false)

    useEffect(() => {
        if (SitemanagerError.isAlert === true) {
            props.sendError(SitemanagerError)
        }
    }, [buttonClicked])


    const onFinish = (values) => {
        if (writeData === false) {
            dispatchSitemanagerError({ type: 'ALERT_ERROR' })
            setbuttonClicked(!buttonClicked);
            return;
        } else {
            dispatchSitemanagerError({})
        }
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onDomainChange = (value) => {
        setDomain(value.target.value)
    };
    const onServerChange = (value) => {
        setServer(value.target.value)
    };
    const onSMENameAsHostnameChange = (value) => {
        setSMENameAsHostname(value.target.checked)
    };
    const onSMENameChange = (value) => {
        setSMEName(value.target.value)
    };

    const handleWriteData = (value) => {
        setWriteData(value.target.checked)
    }

    const handleAgentsChange = (value) => {
        updateSitemanagerAgentsConfig(value)
        setSMEAgents(value)
        console.log(value)
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
                    name="Domain"
                    label="Domain"
                    initialValue={Domain}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input
                        placeholder="Input the Sitemanager Domain of the device"

                        onChange={onDomainChange}
                        allowClear
                    />



                </Form.Item>
                <Form.Item

                    label="Server"
                    name="Server"
                    initialValue={Server}

                    rules={[
                        {
                            required: true,
                            message: 'Please input IP address!',
                        },
                    ]}
                >
                    <Input allowClear onChange={onServerChange} placeholder="Sitemanager IP Server" />
                </Form.Item>


                <Form.Item
                    name="Set sitemanager name as hostname"

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
                    <Checkbox checked={SMENameAsHostname} onChange={onSMENameAsHostnameChange}>Set sitemanager name as hostname</Checkbox>
                </Form.Item>
                {SMENameAsHostname === false &&
                    <Form.Item
                        label="Name on Sitemanager"
                        name="Name on Sitemanager"
                        initialValue={SMEName}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input onChange={onSMENameChange} placeholder='Write  device name on Sitemanager' />
                    </Form.Item>}

                <hr />

                <Form.Item
                    name="Enable writing data on device"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 1,
                        span: 16,
                    }}
                    rules={[
                        {
                            required: false,

                        },
                    ]}
                >
                    <Checkbox checked={writeData} onChange={handleWriteData}>Enable writing network data on device</Checkbox>
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
            </Form >

            <AgentsCanva
                myAgents={SMEAgents}
                setMyAgents={handleAgentsChange} />

        </>



    );
};
export default Sitemanager;