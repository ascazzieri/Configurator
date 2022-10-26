import React, { Component, useState } from 'react'
import './Body.css'
import THINGWORX_CARD from '../elements/THINGWORX_CARD/THINGWORX_CARD'
import Dashboard from '../Dashboard/Dashboard'

import Navbar from '../elements/Navbar/Navbar'
import OPCUA_CHANNELS_SELECTION from '../OPCUA_CHANNELS_SELECTION/OPCUA_CHANNELS_SELECTION'
import { getThingworxConf } from '../../config'


let Dashboard_page = true;
let Thingworx_page = false;
let OPC_Client_page = false;
let Thingworx_agent_logs_page = false;
let OPC_client_logs_page = false;


/* function manageWindow(element) {
    windowManagement.Dashboard_page = false;
    windowManagement.Thingworx_page = false;
    windowManagement.OPC_Client_page = false;
    windowManagement.Thingworx_agent_logs_page = false;
    windowManagement.OPC_client_logs_page = false;

    windowManagement[`${element.target.text}_page`] = true
    console.log(windowManagement);
} */



const Body = (props) => {

    const [dashboardWindow, setDashboardWindow] = useState(true)
    const [thingworxWindow, setThingworxWindow] = useState(false)
    const [OPC_clientWindow, setOPC_clientWindow] = useState(false)
    const [thingworx_logsWindow, setThingworx_logsWindow] = useState(false)
    const [OPC_client_logsWindow, setOPC_client_logsWindow] = useState(false)

    return (
        <React.StrictMode>

            <Navbar
                onDashboardChange={setDashboardWindow}
                onThingworxChange={setThingworxWindow}
                onOPC_clientChange={setOPC_clientWindow}
                onThingworx_logsChange={setThingworx_logsWindow}
                onOPC_client_logsChange={setOPC_client_logsWindow}
            />

            {dashboardWindow && <Dashboard />}
            {thingworxWindow && <THINGWORX_CARD
                updateMethod={getThingworxConf}
            />}
            {OPC_clientWindow && <OPCUA_CHANNELS_SELECTION />}
            {/*   {OPC_clientWindow && <OPCUA_FORM />} */}
            {/*   {thingworx_logsWindow && <THINGWORX_LOGS />}
            {OPC_client_logsWindow && <OPC_CLIENT_LOGS />} */}



        </React.StrictMode>



    )




}


export default Body