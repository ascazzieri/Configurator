import React, { useState } from 'react'
import './Channeltabs.css'
import Refreshconf from '../../elements/Refreshconf/Refreshconf';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { updateChannelsConfig, getProtocolConf } from '../../../config'




function Channelstabs(props) {


    let noChannels = false;

    const { protocolName, toggleModifyPanel, toggleBrowsePanel } = props
    const [Protocol, updateProtocol] = useState(getProtocolConf())



    let Channels = Protocol[protocolName].channels;

    const [channelList, updateChannelList] = useState(Channels)





    if (channelList.length === 0) {
        noChannels = true;
    }


    function modifyChannel(id) {
        toggleModifyPanel(id)
    }
    function browseTags(id) {
        toggleBrowsePanel(id)

    }

    function deleteChannel(id) {
        const newChannelList = channelList.filter((item) => item.device_ID !== id);
        updateChannelList(newChannelList)
        updateChannelsConfig(protocolName, newChannelList)
    }

    function refreshChannelTabs(refreshedProtocol) {
        let newProtocol = getProtocolConf();
        const newChannelList = newProtocol[protocolName].channels;
        updateChannelList(newChannelList);
        updateProtocol(newProtocol)
    }


    return (

        <>
            <Tab.Container defaultActiveKey="0">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            {channelList.map((item, indx) => <div key={Math.random()}><Nav.Item key={Math.random()}>
                                <Nav.Link key={Math.random()} eventKey={indx}>Channel {indx + 1}</Nav.Link>
                            </Nav.Item>
                            </div>)}

                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className='align-center'>
                            {noChannels === false ? channelList.map((item, indx) => <div key={Math.random()}>
                                <Tab.Pane eventKey={indx}>
                                    <div key={Math.random()} className="row align-items-center">
                                        <div key={Math.random()} className="col">
                                            {item.device_ID}
                                        </div>
                                        <div key={Math.random()} className="col">
                                            <button key={Math.random()} type="button" className="btn btn-outline-primary" onClick={() => modifyChannel(item.device_ID)}>Modify</button>
                                        </div>
                                        <div key={Math.random()} className="col">
                                            <button key={Math.random()} type="button" className="btn btn-outline-danger" onClick={() => deleteChannel(item.device_ID)}>Delete</button>
                                        </div>
                                        <div key={Math.random()} className="col">
                                            <button key={Math.random()} type="button" className="btn btn-outline-dark" onClick={() => browseTags(item.device_ID)}>Browse Tags</button>
                                        </div>

                                    </div>


                                </Tab.Pane>
                            </div>) : <div>No Channels created yet</div>}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <Refreshconf
                updateComponent={refreshChannelTabs}
                toUpdate={props.updateMethod}
            />
        </>







    );
}

export default Channelstabs