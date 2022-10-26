import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { AiOutlineRight } from 'react-icons/ai'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import THINGWORX_DASHBOARD from './THINWORX_DASHBOARD/THINGWORX_DASHBOARD';
import OPCUA_DASHBOARD from './OPCUA_DASHBOARD/OPCUA_DASHBOARD'
import { getProtocolConf } from '../../config'
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {

    const [Protocol, updateProtocol] = useState(getProtocolConf())
    useEffect(() => {
        updateProtocol(getProtocolConf())
    }, [Protocol])


    const [Home, setHome] = useState(true)
    const [ConnectionStatus, setConnectionStatus] = useState(false)
    const [Tables, setTables] = useState(false)
    let [currentPage, setCurrentPage] = useState('Home')


    function handleDashboardMenuClick(page) {
        switch (page) {
            case 'Home':
                setHome(true);
                setConnectionStatus(false)
                setTables(false)
                break;
            case 'Connection Status':
                setConnectionStatus(true);
                setHome(false)
                setTables(false)
                break;
            case 'Tables':
                setTables(true);
                setHome(false)
                setConnectionStatus(false)
                break;
            default:
                setHome(true);
                setConnectionStatus(false)
                setTables(false)
                break;


        }
        setCurrentPage(page)


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
                <div className="logo" />

                <Row className="justify-content-md-center">

                    <Col className='dashboard-title-col' md="auto"><h3 className='dashboard-title'>DASHBOARD</h3></Col>

                </Row>


                <Menu

                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={['Home', 'Connection Status', 'Tables', 'Other Stuff', 'Other Stuff', 'Other Stuff', 'Other Stuff'].map(
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

                        <Col md="auto"><h3>{currentPage}</h3></Col>

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
                        {ConnectionStatus && <div>Connection Status</div>}
                        {Tables && <><THINGWORX_DASHBOARD />
                            {Object.keys(Protocol).map((protocol, index) => <div key={protocol}>
                                {
                                    protocol === 'opcua' && <OPCUA_DASHBOARD
                                    />}
                                {protocol === 'modbus' && <div>Modbus Table</div>}
                            </div>
                            )}</>}

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


{/*   <THINGWORX_DASHBOARD />
                <OPCUA_DASHBOARD /> */}



{/*   <Tags 
        title = "OPCUA Tags"/> */}