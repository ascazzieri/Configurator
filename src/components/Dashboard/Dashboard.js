import React from 'react'
import './Dashboard.css'
import OPCUA_DASHBOARD from '../OPCUA_DASHBOARD/OPCUA_DASHBOARD'
import THINGWORX_DASHBOARD from '../THINWORX_DASHBOARD/THINGWORX_DASHBOARD';


const Dashboard = () => {
    return (
        <div className='dashboard'>
        <THINGWORX_DASHBOARD />
        <OPCUA_DASHBOARD />
       
        </div>
    )
}

export default Dashboard;