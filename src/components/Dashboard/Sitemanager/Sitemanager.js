import { Checkbox, Form, Input, Select } from 'antd';
import React, { useState, useReducer, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { getSitemanagerConf, updateSitemanagerConfig, updateSitemanagerAgentsConfig } from '../../../config';
import AgentsCanva from './AgentsCanva/AgentsCanva';
import { TfiReload } from 'react-icons/tfi'


const errorReducer = (state, action) => {
    if (action.type === 'ALERT_ERROR') {
        return { alertMsg: "Please enable writing permissions before clicking 'Apply' button", isAlert: true, alertType: 'error' }
    } else {
        return { alertMsg: '', isAlert: false, alertType: '' }
    }

}


const Sitemanager = (props) => {

    const [form] = Form.useForm();

    const [Sitemanager, setSitemanager] = useState()

    useEffect(() => {
        setSitemanager(getSitemanagerConf())

    }, [])

    useEffect(() => {
        if (Sitemanager !== undefined) {
            setDomain(Sitemanager.domain)
            setServer(Sitemanager.server);
            setSMENameAsHostname(Sitemanager.nameashostname)
            setSMEName(Sitemanager.name)
            setSMEAgents(Sitemanager.agents)
        }

    }, [Sitemanager])


    const [Domain, setDomain] = useState()
    const [Server, setServer] = useState()
    const [SMENameAsHostname, setSMENameAsHostname] = useState()
    const [SMEName, setSMEName] = useState()
    const [SMEAgents, setSMEAgents] = useState()
    const [writeData, setWriteData] = useState(false)
    const [SitemanagerError, dispatchSitemanagerError] = useReducer(errorReducer, { alertMsg: '', isAlert: false, alertType: '' })
    const [buttonClicked, setbuttonClicked] = useState(false)



    useEffect(() => {
        form.setFieldsValue({ domain: Domain });
        form.setFieldsValue({ server: Server });
        form.setFieldsValue({ nameashostname: SMENameAsHostname });
        form.setFieldsValue({ smeName: SMEName });


    }, [Domain, Server, SMENameAsHostname, SMEName])
    useEffect(() => {
        if (SitemanagerError.isAlert === true) {
            props.sendError(SitemanagerError)
        }
    }, [buttonClicked])



    const handleRefreshData = () => {
        setDomain(Sitemanager.domain)
        setServer(Sitemanager.server);
        setSMENameAsHostname(Sitemanager.nameashostname)
        setSMEName(Sitemanager.name)
        setSMEAgents(Sitemanager.agents)

    }



    const handleSubmit = () => {
        let newSME = {
            domain: Domain,
            server: Server,
            nameashostname: SMENameAsHostname,
            name: SMEName,
        };
        setSitemanager(newSME)
        updateSitemanagerConfig(newSME)
    }
    const onFinish = (values) => {
        if (writeData === false) {
            dispatchSitemanagerError({ type: 'ALERT_ERROR' })
            setbuttonClicked(!buttonClicked);
            return;
        } else {
            dispatchSitemanagerError({})
            handleSubmit();
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
                    remember: false,
                }}
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name='domain'
                    label="Domain"
                    shouldUpdate={true}
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
                    name="server"
                    shouldUpdate={true}
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
                    name="nameashostname"
                    shouldUpdate={true}
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
                        label="smeName"
                        name="Name on Sitemanager"
                        shouldUpdate={true}
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
            {Sitemanager !== undefined && <AgentsCanva
                setMyAgents={handleAgentsChange} />}



            <div className="mb-3">
                <Row>

                    <Col md={{ offset: 10, span: 3 }}>
                        <Button variant="primary" size="sm" onClick={handleRefreshData}>
                            Refresh <TfiReload />
                        </Button></Col>
                </Row>


            </div>

        </>



    );
};
export default Sitemanager;