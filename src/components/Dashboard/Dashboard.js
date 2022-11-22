import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { AiOutlineRight } from 'react-icons/ai'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Networkparameters from './Networkparameters/Networkparameters'
import Connectionstatus from './Connectionstatus/Connectionstatus'
import NETWORK_DASHBOARD from './NETWORK_DASHBOARD/NETWORK_DASHBOARD'
import THINGWORX_DASHBOARD from './THINWORX_DASHBOARD/THINGWORX_DASHBOARD';
import OPCUA_DASHBOARD from './OPCUA_DASHBOARD/OPCUA_DASHBOARD'
import SITEMANAGER from './Sitemanager/Sitemanager'
import { getProtocolConf } from '../../config'
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = (props) => {

    const [Protocol, updateProtocol] = useState()
    useEffect(() => {
        updateProtocol(getProtocolConf())
    }, [])


    const [Home, setHome] = useState(true)
    const [Network, setNetwork] = useState(false)
    const [ConnectionStatus, setConnectionStatus] = useState(false)
    const [Tables, setTables] = useState(false)
    const [Sitemanager, setSitemanager] = useState(false)

    let [currentPage, setCurrentPage] = useState('Home')


    function handleDashboardMenuClick(page) {
        switch (page) {
            case 'Home':
                setHome(true);
                setNetwork(false)
                setConnectionStatus(false)
                setTables(false)
                setSitemanager(false)
                break;
            case 'Network':
                setHome(false);
                setNetwork(true)
                setConnectionStatus(false)
                setTables(false)
                setSitemanager(false)
                break;

            case 'Connection Status':
                setHome(false);
                setNetwork(false)
                setConnectionStatus(true)
                setTables(false)
                setSitemanager(false)
                break;
            case 'Tables':
                setHome(false);
                setNetwork(false)
                setConnectionStatus(false)
                setTables(true)
                setSitemanager(false)
                break;
            case 'Sitemanager':
                setHome(false);
                setNetwork(false)
                setConnectionStatus(false)
                setTables(false)
                setSitemanager(true)
                break;
            default:
                setNetwork(false)
                setHome(true);
                setConnectionStatus(false)
                setTables(false)
                break;


        }
        setCurrentPage(page)


    }

    const sendAlertToDashboard = (alert) => {
        props.sendError(alert)
    }

    return (
        <Layout
            style={{
                minHeight: '90vh',

            }}>
            <Sider
                style={{
                    backgroundColor: '#fff',
                }}
                className="site-layout-background"
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    /*    console.log(broken); */
                }}
                onCollapse={(collapsed, type) => {
                    /*    console.log(collapsed, type); */
                }}
            >
                <div style={{ padding: 0 }} className="logo" />

                <Row style={{ width: 235 }} className="justify-content-md-center">

                    <Col className='dashboard-title-col' md="auto"><h3 className='dashboard-title'>DASHBOARD</h3></Col>

                </Row>


                <Menu

                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={['Home', 'Network', 'Connection Status', 'Tables', 'Sitemanager', 'Firewall', 'Other Stuff', 'Other Stuff'].map(
                        (item, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(AiOutlineRight),
                            label: `${item}`,
                        }),
                    )}
                    onClick={(event) => handleDashboardMenuClick(event.domEvent.target.innerText)}
                />
            </Sider>
            <Layout>
                <Header
                    className="site-layout-sub-header-background"
                    style={{

                        padding: 10,
                        backgroundColor: '#fff'
                    }}
                > <Row className="justify-content-md-center">

                        <Col md="auto"><h3 className="text-center text-primary">{currentPage}</h3></Col>

                    </Row></Header>
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        {Home && <div>Home</div>}
                        {Network && <Networkparameters sendError={sendAlertToDashboard} />}
                        {ConnectionStatus && <Connectionstatus
                            sendError={sendAlertToDashboard}
                        />}
                        {Tables && <>
                            <NETWORK_DASHBOARD />
                            <THINGWORX_DASHBOARD />
                            {Object.keys(Protocol).map((protocol, index) => <div key={protocol}>
                                {
                                    protocol === 'opcua' && Protocol.opcua !== undefined ? <OPCUA_DASHBOARD
                                    /> : null}
                                {protocol === 'modbus' && Protocol.modbus !== undefined ? <div>Modbus Table</div> : null}
                            </div>
                            )}</>}
                        {Sitemanager && <SITEMANAGER sendError={sendAlertToDashboard} />}

                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Applied ©2022 Created by IoT solutions developing Team
                </Footer>
            </Layout>
        </Layout>
    )

};
export default Dashboard;

