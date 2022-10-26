import React, { useState } from 'react'
import './Navbar.css'
import Button from 'react-bootstrap/Button';
import Infocanva from '../Infocanva/Infocanva'
import {downloadConfig} from '../../../config'
import DateTime from '../DateTime/DateTime'





function Navbar(props) {
    const { onDashboardChange, onThingworxChange, onOPC_clientChange, /* OPC_data_refresh, */ onThingworx_logsChange, onOPC_client_logsChange } = props;



    const handlePageChange = (event) => {
        switch (event.target.name) {
            case 'Dashboard':
                onDashboardChange(true)
                onThingworxChange(false)
                onOPC_clientChange(false)
                onThingworx_logsChange(false)
                onOPC_client_logsChange(false)
                break;

            case 'Thingworx':
                onDashboardChange(false)
                onThingworxChange(true)
                onOPC_clientChange(false)
                onThingworx_logsChange(false)
                onOPC_client_logsChange(false)
                break;

            case 'OPC_Client':
                onDashboardChange(false)
                onThingworxChange(false)
                onOPC_clientChange(true)
                onThingworx_logsChange(false)
                onOPC_client_logsChange(false)
                /*   let twx_conf = props.toUpdate;
                  OPC_data_refresh(twx_conf) */
                break;

            case 'Thingworx_logs':
                onDashboardChange(false)
                onThingworxChange(false)
                onOPC_clientChange(false)
                onThingworx_logsChange(true)
                onOPC_client_logsChange(false)
                break;

            case 'OPC_Client_logs':
                onDashboardChange(false)
                onThingworxChange(false)
                onOPC_clientChange(false)
                onThingworx_logsChange(false)
                onOPC_client_logsChange(true)
                break;

            default:
                onDashboardChange(true)
                onThingworxChange(false)
                onOPC_clientChange(false)
                onThingworx_logsChange(false)
                onOPC_client_logsChange(false)
                break;

        }

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Infocanva
                show={show}
                handleShow={handleShow}
                handleClose={handleClose} />
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                <a className="navbar-brand brand-color" onClick={handleShow}><img className='navbar-brand-logo' src="./imgs/applied_logo_icon-50x50.png" width="30" height="30" alt="applied-logo" />Configurator</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className='container'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a onClick={handlePageChange} className="nav-link" name="Dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={handlePageChange} className="nav-link" name="Thingworx">Thingworx</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Driver</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a onClick={handlePageChange} className="dropdown-item" name="OPC_Client">OPC_UA</a>
                                    <a onClick={handlePageChange} className="dropdown-item" name="Modbus">Modbus</a>

                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Logs
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a onClick={handlePageChange} className="dropdown-item" name="Thingworx_logs">Thingworx_agent_logs</a>
                                    <a onClick={handlePageChange} className="dropdown-item" name="OPC_Client_logs">OPC_client_logs</a>

                                </div>
                            </li>
                        </ul>
                    </div>

                    <DateTime />
                    <Button onClick={downloadConfig} variant="outline-primary">Download Configuration </Button>

                </div>


            </nav>
        </>












    )
}

export default Navbar;