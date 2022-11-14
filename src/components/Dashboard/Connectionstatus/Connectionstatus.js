import { Card, Col, Row } from 'antd';
import React, { useReducer, useState, useEffect } from 'react';
import { FcApproval, FcHighPriority } from 'react-icons/fc'
import Button from 'react-bootstrap/Button';
import './Connectionstatus.css'
import { TfiReload } from 'react-icons/tfi'
import { connectionStatusRequest } from '../../../config'


const errorReducer = (state, action) => {
    if (action.type === 'ALERT_ERROR') {
        console.log(action.value)
        return { alertMsg: action.value, isAlert: true, alertType: 'error' }
    } else {
        return { alertMsg: '', isAlert: false, alertType: '' }
    }

}



const Connectionstatus = (props) => {

    const [NetworkConnection, setNetworkConnection] = useState(connectionStatusRequest('network'))
    const [ThingworxConnection, setThingworxConnection] = useState(connectionStatusRequest('thingworx'))
    const [OPCServerConnection, setOPCServerConnection] = useState(connectionStatusRequest('opc-server'))
    const [SitemanagerConnection, setSitemanagerConnection] = useState(connectionStatusRequest('sitemanager'))
    const [buttonClicked, setbuttonClicked] = useState(false)

    const [ConnectionError, dispatchConnection] = useReducer(errorReducer, { alertMsg: '', isAlert: false, alertType: '' })


    const handlePeriodicRequest = (props) => {

        let Exitfunction = false;
        setbuttonClicked(!buttonClicked);
        let updatedNetwork = connectionStatusRequest('network');
        let updatedThingworx = connectionStatusRequest('thingworx');
        let updatedOPCServer = connectionStatusRequest('opc-server');
        let updateSitemanager = connectionStatusRequest('sitemanager');
        if (typeof updatedNetwork !== 'boolean') { dispatchConnection({ type: 'ALERT_ERROR', value: updatedNetwork }); Exitfunction = true }/* props.sendError(updatedNetwork); */
        if (typeof updatedThingworx !== 'boolean') { dispatchConnection({ type: 'ALERT_ERROR', value: updatedThingworx }); Exitfunction = true }/* props.sendError(updatedThingworx); */
        if (typeof updatedOPCServer !== 'boolean') { dispatchConnection({ type: 'ALERT_ERROR', value: updatedOPCServer }); Exitfunction = true }/* props.sendError(updatedOPCServer); */
        if (typeof updateSitemanager !== 'boolean') { dispatchConnection({ type: 'ALERT_ERROR', value: updateSitemanager }); Exitfunction = true }/* props.sendError(updateSitemanager) */
        /*        console.log(ConnectionError.isAlert) */
        if (Exitfunction === true) return;
        if (updatedNetwork !== NetworkConnection) setNetworkConnection(updatedNetwork);
        if (updatedThingworx !== ThingworxConnection) setThingworxConnection(updatedThingworx);
        if (updatedOPCServer !== OPCServerConnection) setOPCServerConnection(updatedOPCServer);
        if (updateSitemanager !== SitemanagerConnection) setSitemanagerConnection(updateSitemanager);
        dispatchConnection({})

    }


    useEffect(() => {
        if (ConnectionError.isAlert === true) {
            props.sendError(ConnectionError)
        }
    }, [buttonClicked])



    return (
        <div className="site-card-wrapper">
            <Row style={{ 'marginBottom': '25px' }} gutter={16}>
                <Col span={8}>
                    <Card
                        title="Network" bordered={true}>
                        {NetworkConnection === true ? <><FcApproval className='connectionstatus-icons' />Connected</> : <><FcHighPriority className='connectionstatus-icons' />Not connected</>}
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Thingworx" bordered={true}>
                        {ThingworxConnection === true ? <><FcApproval className='connectionstatus-icons' />Connected</> : <><FcHighPriority className='connectionstatus-icons' />Not connected</>}
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="OPC Server" bordered={true}>
                        {OPCServerConnection === true ? <><FcApproval className='connectionstatus-icons' />Connected</> : <><FcHighPriority className='connectionstatus-icons' />Not connected</>}
                    </Card>
                </Col>
            </Row>
            <Row style={{ 'marginBottom': '25px' }} gutter={16}>
                <Col span={8}>
                    <Card
                        title="Site Manager" bordered={true}>
                        {SitemanagerConnection === true ? <><FcApproval className='connectionstatus-icons' />Connected</> : <><FcHighPriority className='connectionstatus-icons' />Not connected</>}
                    </Card>
                </Col>
                {/*    <Col span={8}>
                    <Card title="Thingworx" bordered={true}>
                    {ThingworxConnection === true ? <><FcApproval className='connectionstatus-icons' />Connected</> : <><FcHighPriority className='connectionstatus-icons' />Not connected</>}
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="OPC Server" bordered={true}>
                    {OPCServerConnection === true ? <><FcApproval className='connectionstatus-icons' />Connected</> : <><FcHighPriority className='connectionstatus-icons' />Not connected</>}
                    </Card>
                </Col> */}
            </Row>
            

            <div className="mb-3">
                <Row>

                    <Col md={{ span: 3, offset: 20 }}>
                        <Button variant="primary" size="sm" onClick={handlePeriodicRequest}>
                            Refresh <TfiReload />
                        </Button></Col>
                </Row>


            </div>
        </div>
    )
};
export default Connectionstatus;