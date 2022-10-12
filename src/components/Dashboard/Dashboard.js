import React from 'react'
import OPCUA_DASHBOARD from '../OPCUA_DASHBOARD/OPCUA_DASHBOARD'
import THINGWORX_DASHBOARD from '../THINWORX_DASHBOARD/THINGWORX_DASHBOARD';
import Refreshconf from '../elements/Refreshconf/Refreshconf'

const Dashboard = () => {
    return (
        <>
        <THINGWORX_DASHBOARD />
        <OPCUA_DASHBOARD />
        <Refreshconf 
        text="Refresh configuration"
        />
        </>
    )
}

export default Dashboard;