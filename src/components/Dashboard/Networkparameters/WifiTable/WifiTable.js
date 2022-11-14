import {Form, Input, Popconfirm, Table, Select } from 'antd';
import { wifi_scan } from '../../../../wifi-networks'
import React, { useContext, useEffect, useRef, useState } from 'react';
import './WifiTable.css'
import { auto, end } from '@popperjs/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { GoDiffAdded } from 'react-icons/go'



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
    let customStyle = dataIndex !== 'password' ? { paddingRight: 24 } : {
        paddingRight: 24,
        WebkitTextSecurity: 'disc',
    }
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
                      /*   message: `${title} is required.`, */
                      
                    },
                ]}
            >
                {dataIndex === 'password' ? <Input.Password ref={inputRef} onPressEnter={save} onBlur={save} /> : <Input ref={inputRef} onPressEnter={save} onBlur={save} />}

            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={customStyle}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }
    return <td {...restProps}>{childNode}</td>;


};
const WifiTable = (props) => {
    let data = []

 

    props.Wifi.map((element, index) => {
        let ssid = Object.keys(element)
        let item = {
            'key': Math.random(),
            'ssid': ssid[0],
            password: element[ssid[0]]
        };
        data.push(item)


    })
    const [dataSource, setDataSource] = useState(data);
    const [scannedWifi, setScannedWifi] = useState(wifi_scan())
    const [chosenWifi, setChosenWifi] = useState('')

    useEffect(() => {
        props.returnWifi(dataSource);
    },[dataSource])

    let scannedWifiSelector = []
    scannedWifi.map((element, index) => {
        let ssid = Object.keys(element)
        let item = {
            key: Math.random(),
            value: ssid[0],
            label: ssid[0]

        }
        scannedWifiSelector.push(item)
    }
    )
  
    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };
    const defaultColumns = [
        {
            title: 'SSID',
            dataIndex: 'ssid',
            /*  width: '30%', */
            editable: true,

        },
        {
            title: 'Password',
            dataIndex: 'password',
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
    const onWifiSelection = (element) => {
        setChosenWifi(element)
    }
    const handleAdd = () => {
        const newData = {
            key: Math.random(),
            ssid: chosenWifi,
        };
        setDataSource([...dataSource, newData]);
        console.log(chosenWifi)
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
    return (
        <div className='wifi-table-div '>
            <Form.Item
                name="Wifi-networks"
                label="Wifi networks"
                rules={[
                    {
                        required: false,
                    },
                ]}
            >
                <Select
                    placeholder="Choose a Wifi networks from this list"
                    options={scannedWifiSelector}
                    onChange={onWifiSelection}
                    allowClear
                >

                </Select>
            </Form.Item>
            <div className="mb-3">
                <Row>

                    <Col md={{ offset: 9 }}>
                        <Button
                            onClick={handleAdd}
                            type="button"
                            style={{
                              /*   marginBottom: 16,
                                marginLeft: '60%', */
                                width: auto,
                            }}
                        >
                            Add Network <GoDiffAdded />
                        </Button></Col>
                </Row>


            </div>

            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
                pagination={false}

            />
        </div>
    );
};
export default WifiTable;









/* const columns = [
    {
        title: 'SSID',
        dataIndex: 'ssid',
        key: 'ssid',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Password',
        dataIndex: 'password',
        key: 'password',
    },

];

let data = []


const WifiTable = (props) => {
    const { Wifi } = props;
    console.log(Wifi)



    Wifi.map((element, index) => {
        let ssid = Object.keys(element)
        console.log(element)
        let item = {
            'key': index,
            'ssid': ssid[0],
            password: element[ssid[0]]
        };
        data.push(item)


    })

    console.log(data)

 */
