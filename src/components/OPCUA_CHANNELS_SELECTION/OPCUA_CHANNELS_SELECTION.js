import React, { useState } from 'react'
import './OPCUA_CHANNELS_SELECTION.css'
import OPCUA_CARD from '../elements/OPCUA_CARD/OPCUA_CARD'
import Channelstabs from '../elements/Channelstabs/Channelstabs'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { HiOutlinePlus } from 'react-icons/hi'
import { getProtocolConf } from '../../config'
import Channelcanva from '../elements/Channelcanva/Channelcanva';






function OPCUA_CHANNELS_SELECTION() {

    const [show, setShow] = useState(false);
    const [selectedChannelModify, setSelectedChannelModify] = useState("");
    const [channelPanel, setChannelPanel] = useState(true)
    const [modifyPanel, setModifyPanel] = useState(false)
    const [createNewChannel, setCreateNewChannel] = useState(false)

    const handleClose = () => {
        setShow(false);
        setModifyPanel(false);
    }
    const handleShow = (id) => {
        setShow(true);
        setSelectedChannelModify(id)
        setModifyPanel(true)
    }
    const handleCreateNewChannel = () => {
        setCreateNewChannel(true);
        setChannelPanel(false)

    }
    const closeCreateChannel = () => {
        setCreateNewChannel(false);
        setChannelPanel(true)
    }






    return (
        <>
            {channelPanel === true && createNewChannel === false && <div className='container-fluid channels-wrapper'>
                <Row className="justify-content-md-center">

                    <Col md="auto"><h3>OPCUA Channels</h3></Col>

                </Row>


                <div className="mb-2">
                    <Row>

                        <Col md={{ span: 3, offset: 9 }}>
                            <Button variant="primary" size="sm" onClick={handleCreateNewChannel}>
                                Create new channel <HiOutlinePlus />
                            </Button></Col>
                    </Row>


                </div>
                <div className='container p-3 bg-info bg-opacity-10 border border-info rounded'>
                    <Channelstabs
                        protocolName="opcua"
                        updateMethod={getProtocolConf}
                        toggleModifyPanel={handleShow}



                    />
                </div>

            </div>}
            {channelPanel === false && createNewChannel === true && <OPCUA_CARD
                protocolName="opcua"
                updateMethod={getProtocolConf}
                toClose={closeCreateChannel} />}
            {modifyPanel && <Channelcanva
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                selectedChannelID={selectedChannelModify}
                updateMethod={getProtocolConf}
                protocolName="opcua" />}



        </>

    )
}

export default OPCUA_CHANNELS_SELECTION