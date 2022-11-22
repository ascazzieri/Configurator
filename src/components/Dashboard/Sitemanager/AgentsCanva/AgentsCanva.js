import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Form, Input, Popconfirm, Table, Select } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './AgentsCanva.css'
import { agents_vendor_list, agent_vendor_device_type } from './agents_data'
import { getSitemanagerAgentConfig } from '../../../../config'

function AgentsCanva(props) {


    const [show, setShow] = useState(false);
    const [myAgents, setMyAgents] = useState(getSitemanagerAgentConfig());

    /*     useEffect(() => {
            setMyAgents(getSitemanagerAgentConfig())
        }, []) */

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [isMessage, setMessage] = useState(false)
    let agentName = []
    let agentData = [];
    if (myAgents !== undefined) {
        agentName = Object.keys(myAgents)
        agentName.map((element, index) => {


            let item = {
                key: Math.random(),
                agentCount: `Agent${index + 1}`,
                agent: myAgents[`Agent${index + 1}`].agent,
                name: myAgents[`Agent${index + 1}`].name,
                sn: myAgents[`Agent${index + 1}`].sn,
                cfg: myAgents[`Agent${index + 1}`].cfg
            }
            if (index === 10) {

                //diapcashError

            } else if (index < 10) {
                agentData.push(item)
            }

        })

    }
    const agentVendor = agents_vendor_list;
    const deviceType = agent_vendor_device_type;



    const EditableContext = React.createContext(null);
    const EditableRow = ({ index, ...props }) => {
        const [form] = Form.useForm();
        return (
            <Form form={form} component={false}>
                <EditableContext.Provider value={form}>
                    <tr {...props} />
                </EditableContext.Provider>
            </Form>
        );
    };
    const EditableCell = ({
        title,
        editable,
        children,
        dataIndex,
        record,
        handleSave,
        ...restProps
    }) => {
        const [editing, setEditing] = useState(false);
        const inputRef = useRef(null);
        const form = useContext(EditableContext);
        useEffect(() => {
            if (editing) {
                inputRef.current.focus();
            }
        }, [editing]);
        const toggleEdit = () => {
            setEditing(!editing);
            form.setFieldsValue({
                [dataIndex]: record[dataIndex],
            });
        };
        const save = async () => {
            try {
                const values = await form.validateFields();
                toggleEdit();
                handleSave({
                    ...record,
                    ...values,
                });
            } catch (errInfo) {
                console.log('Save failed:', errInfo);
            }
        };
        let childNode = children;
        if (editable) {
            childNode = editing ? (
                <Form.Item
                    style={{
                        margin: 0,
                    }}
                    name={dataIndex}
                    rules={[
                        {
                            required: false,
                            message: `${title} is required.`,
                        },
                    ]}
                >
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                </Form.Item>
            ) : (
                <div
                    className="editable-cell-value-wrap"
                    style={{
                        paddingRight: 24,
                    }}
                    onClick={toggleEdit}
                >
                    {children}
                </div>
            );
        }
        return <td {...restProps}>{childNode}</td>;
    };


    const [dataSource, setDataSource] = useState(agentData);
    const [count, setCount] = useState(1);


    const [Vendor, setVendor] = useState([]);
    const [VendorName, setVendorName] = useState('')
    const [Type, setType] = useState('');
    const handleVendorChange = (value) => {
        setVendorName(value)
        setVendor(deviceType[value]);
        setType(deviceType[value][0]);
    };
    const onTypeChange = (value) => {
        setType(value);
    };


    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setCount(count - 1);
        setDataSource(newData);
    };


    const showMessage = () => {
        setMessage(true);
        setTimeout(function () {
            setMessage(false);
        }, 5000);




    }
    const defaultColumns = [
        {
            title: 'Agent',
            dataIndex: 'agentCount',
            /*    width: '30%', */
            editable: true,
        },
        {
            title: 'S/N',
            dataIndex: 'sn',
            editable: true,
        },
        {
            title: 'Device Name',
            dataIndex: 'name',
            editable: true,
        },
        {
            title: 'Device Type',
            dataIndex: 'agent',
            editable: true,
        },
        {
            title: 'Operation',
            dataIndex: 'operation',
            width: '40px',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <button type="button" className="btn btn-outline-danger">Delete</button>
                    </Popconfirm>
                ) : null,
        },
    ];
    const handleAdd = () => {

        if (agentName.length + count > 10) {
            showMessage();


        } else if (agentName.length + count <= 10) {
            let newData = {};

            if (Type === '') {
                newData = {
                    key: Math.random(),
                    agentCount: `Agent${agentName.length + count}`,
                    agent: '',
                    name: '',
                    sn: '',
                    cfg: ''
                };

            } else {
                newData = {
                    key: Math.random(),
                    agentCount: `Agent${agentName.length + count}`,
                    agent: VendorName + ':' + Type,
                    name: '',
                    sn: '',
                    cfg: ''
                };
            }

            setDataSource([...dataSource, newData]);
            setCount(count + 1);
        }





    };
    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };
    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });


    const handleAgentSubmit = () => {
        let newData = {};
        dataSource.map((element, index) => {
            newData[element.agentCount] = {}
            newData[element.agentCount]['agent'] = element.agent;
            newData[element.agentCount]['name'] = element.name;
            newData[element.agentCount]['sn'] = element.sn;
            newData[element.agentCount]['cfg'] = element.cfg;



        })

        props.setMyAgents(newData)
        setMyAgents(newData)
        setCount(1)

    }

    const onFinish = () => {
        handleAgentSubmit()

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>

            <Button variant="primary" onClick={handleShow} className="me-2">
                Agents
            </Button>
            <Offcanvas style={{ width: 800 }} placement='end' show={show} onHide={handleClose}/*  {...props} */>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Sitemanager Software Agents configuration</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {isMessage && <div style={{ color: 'red' }}>Sitemanager software admits a maximum of 10 agents</div>}

                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        onSubmit={handleAgentSubmit} style={{ margin: 5 }}>
                        <Form.Item
                            label="Agent selection"
                            rules={[
                                {
                                    required: false,
                                },
                            ]}
                        >
                            <Select

                                style={{
                                    width: 250,
                                    marginRight: 20
                                }}
                                onChange={handleVendorChange}
                                options={agentVendor.map((province) => ({
                                    label: province,
                                    value: province,
                                }))}
                            />
                            <Select
                                style={{
                                    width: 250,
                                    marginRight: 10
                                }}
                                value={Type}
                                onChange={onTypeChange}
                                options={Vendor.map((city) => ({
                                    label: city,
                                    value: city,
                                }))}
                            />
                        </Form.Item>


                        <Button
                            onClick={handleAdd}
                            type="button"
                            style={{
                                marginBottom: 16,
                                disabled: true
                            }}
                        >
                            Add Agent
                        </Button>
                        <Table
                            components={components}
                            rowClassName={() => 'editable-row'}
                            bordered
                            dataSource={dataSource}
                            columns={columns}
                            pagination={false}

                        />

                        <div style={{ marginTop: 20 }} className="mb-1">
                            <Row>
                                <Col md={{ offset: 10, span: 2 }}>
                                    <Button variant="success" size="md" name="agents-submit" type='submit' >
                                        Apply
                                    </Button></Col>

                            </Row>
                        </div>
                    </Form >
                


                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

AgentsCanva.defaultProps = {
    myAgents: {},
    setMyAgents: null
};


export default AgentsCanva

