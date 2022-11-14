import React, { useState } from 'react'
import './OPCUA_CHANNELS_SELECTION.css'
import OPCUA_CARD from './OPCUA_CARD/OPCUA_CARD'
import Channelstabs from './Channelstabs/Channelstabs'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { GoDiffAdded } from 'react-icons/go'
import { getProtocolConf } from '../../config'
import Channelcanva from './Channelcanva/Channelcanva'
import BrowseTags from './BrowseTags/BrowseTags'






function OPCUA_CHANNELS_SELECTION() {

    const [show, setShow] = useState(false);
    const [selectedChannelModify, setSelectedChannelModify] = useState("");
    const [modifyPanel, setModifyPanel] = useState(false)

    const [showBrowse, setShowBrowse] = useState(false);
    const [selectedChannelBrowse, setSelectedChannelBrowse] = useState("");
    const [browsePanel, setBrowsePanel] = useState(false)


    const [channelPanel, setChannelPanel] = useState(true)
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


    const handleBrowseClose = () => {
        setShowBrowse(false);
        setBrowsePanel(false);
    }
    const handleBrowseShow = (id) => {   
        setShowBrowse(true);
        setSelectedChannelBrowse(id)
        setBrowsePanel(true)
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

                    <Col md="auto"><h3 className="text-center text-primary">OPCUA Channels</h3></Col>

                </Row>


                <div className="mb-2">
                    <Row>

                        <Col md={{ span: 3, offset: 9 }}>
                            <Button variant="primary" onClick={handleCreateNewChannel}>
                                Create new channel <GoDiffAdded />
                            </Button></Col>
                    </Row>


                </div>
                <div className='container p-3 bg-info bg-opacity-10 border border-info rounded'>
                    <Channelstabs
                        protocolName="opcua"
                        updateMethod={getProtocolConf}
                        toggleModifyPanel={handleShow}
                        toggleBrowsePanel={handleBrowseShow}

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
            {browsePanel && <BrowseTags
                show={showBrowse}
                handleShow={handleBrowseShow}
                handleClose={handleBrowseClose}
                selectedChannelID={selectedChannelBrowse}
                updateMethod={getProtocolConf}
                protocolName="opcua" />}



        </>

    )
}

export default OPCUA_CHANNELS_SELECTION