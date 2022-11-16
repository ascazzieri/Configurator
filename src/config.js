let prova = {
    "network": {
        "routes": {},
        "net_scan": [],
        "dhcp": false,
        "static": {
            "ip": [
                "192.168.111.21/24"
            ],
            "dns": [
                "10.10.90.40", "8.8.8.8"
            ],
            "gateway": "192.168.111.1"
        },
        "if_wan_medium": "ethernet",
        "wireless": [
            {
                "WiFi_Ima_Client": 'prova',
            },
            {
                "WiFi_Ima_Sec": "prova"
            }
        ],

        "ntp": [],
        "nat": true,
        "machine_to_internet": true,
        "ALIAS": {
            "any_ip": "0.0.0.0/0",
            "syslog_server": "",
            "PORT_SSH": 22,
            "PORT_DNS": 53,
            "PORT_DHCP": 67,
            "PORT_BOOTP": 68,
            "PORT_HTTP": 80,
            "PORT_NTP": 123,
            "PORT_HTTPS": 443,
            "PORT_SMB": 445,
            "PORT_SYSLOG": 514,
            "PORT_ALTSSH": 1022,
            "PORT_OPCUA": 4840,
            "PORT_ALTHTTP": 8080,
            "PORT_ALTHTTPS": 8443,
            "vscode_server": 8008
        },
        "PORTS_TCP_SERVER_WAN": {
            "PORT_SSH": [
                "any_ip"
            ],
            "PORT_ALTSSH": [
                "any_ip"
            ],
            "PORT_OPCUA": [
                "any_ip"
            ],
            "vscode_server": [
                "any_ip"
            ]
        },
        "INPUT_NAT": [
            {
                "IP_EXT": "",
                "PORT_EXT": 3389,
                "IP_DST": "192.0.2.1",
                "PORT_DST": "",
                "SOURCE": [
                    "any_ip"
                ]
            }
        ],
        "firewall_enabled": true

    },
    "reboot": false,
    "toProduction": false,
    "hostname": {
        "customer": "A207560000-0032",
        "industrial": "A207560000-0032"
    },
    "sitemanager": {
        "domain": "Talea.Accounts",
        "server": "gm.ima.it 10.10.83.66 81.208.52.93",
        "onlybidir": false,
        "enabled": true,
        "nameashostname": true,
        "name": "A207560000-0032",
        "usentp": false,
        "resetuid": false,
        "agents": {
            "Agent1": {
                "agent": "GENERIC:Desktop PC",
                "name": "Full Access",
                "sn": "#A1",
                "cfg": "PC"
            },
            "Agent2": {
                "agent": "GENERIC:Secure Shell (SSH)",
                "name": "Agent 2",
                "sn": "#01",
                "cfg": "PC"
            },
            "Agent3": {
                "agent": "GENERIC:Desktop PC",
                "name": "PC A",
                "sn": "#02",
                "cfg": "192.0.2.1"
            },
            "Agent4": {
                "agent": "Secomea:SiteManager Embedded",
                "name": "Agent 4",
                "sn": "#03",
                "cfg": "127.0.0.1"
            },
            "Agent5": {
                "agent": "GENERIC:Secure Shell (SSH)",
                "name": "Agent 5",
                "sn": "#04",
                "cfg": "127.0.0.1"
            }
        }
    },
    "thingworx": {
        "host": "development.iotdataroom.com",
        "appkey": "31aa0349-6f2b-4275-ae5a-cf665ac3bf96",
        "proxy": {
            "enabled": false,
            "host": "192.168.111.1",
            "port": 3128,
            "username": "paperino",
            "password": "paperino"
        }
    },
    "protocol": {
        "opcua": {
            "channels": [
                {
                    "device_ID": "PIPPO",
                    "connection_parameter": {
                        "opc_server_ip": "10.2.240.233",
                        "opc_server_port": 4840,
                        "authentication": {
                            "enabled": true,
                            "username": "admin",
                            "password": "admin"
                        },
                        "encryption": {
                            "enabled": false,
                            "cert_filename": "cert.pem",
                            "key_filename": "key.pem"
                        }
                    },
                    "sampling_interval": 1,
                    "tags_file_name": "OPCUA_PLC_tags.json",
                    "select_all_tags_by_default": true,
                    "thing_name": "rt_PLC",
                },

                {
                    "device_ID": "PIPPO1",
                    "connection_parameter": {
                        "opc_server_ip": "10.2.240.233",
                        "opc_server_port": 4840,
                        "authentication": {
                            "enabled": false,
                            "username": "admin",
                            "password": "admin"
                        },
                        "encryption": {
                            "enabled": false,
                            "cert_filename": "cert.pem",
                            "key_filename": "key.pem"
                        }
                    },
                    "sampling_interval": 1,
                    "tags_file_name": "OPCUA_PLC_tags.json",
                    "select_all_tags_by_default": true,
                    "thing_name": "rt_PLC"
                },
                {
                    "device_ID": "PIPPO2",
                    "connection_parameter": {
                        "opc_server_ip": "10.2.240.233",
                        "opc_server_port": 4840,
                        "authentication": {
                            "enabled": true,
                            "username": "admin",
                            "password": "admin"
                        },
                        "encryption": {
                            "enabled": false,
                            "cert_filename": "cert.pem",
                            "key_filename": "key.pem"
                        }
                    },
                    "sampling_interval": 1,
                    "tags_file_name": "OPCUA_PLC_tags.json",
                    "select_all_tags_by_default": true,
                    "thing_name": "rt_PLC"
                },
                {
                    "device_ID": "PIPPO3",
                    "connection_parameter": {
                        "opc_server_ip": "10.2.240.233",
                        "opc_server_port": 4840,
                        "authentication": {
                            "enabled": true,
                            "username": "admin",
                            "password": "admin"
                        },
                        "encryption": {
                            "enabled": false,
                            "cert_filename": "cert.pem",
                            "key_filename": "key.pem"
                        }
                    },
                    "sampling_interval": 1,
                    "tags_file_name": "OPCUA_PLC_tags.json",
                    "select_all_tags_by_default": true,
                    "thing_name": "rt_PLC"
                }
            ]

        },
        "modbus": {
            "channels": [
                {
                    "device_ID": "PIPPO",
                    "connection_parameter": {
                        "opc_server_ip": "10.2.240.233",
                        "opc_server_port": 4840,
                        "authentication": {
                            "enabled": true,
                            "username": "admin",
                            "password": "admin"
                        },
                        "encryption": {
                            "enabled": false,
                            "cert_filename": "cert.pem",
                            "key_filename": "key.pem"
                        }
                    },
                    "sampling_interval": 1,
                    "tags_file_name": "OPCUA_PLC_tags.json",
                    "select_all_tags_by_default": true,
                    "thing_name": "rt_PLC"
                },

                {
                    "device_ID": "PIPPO1",
                    "connection_parameter": {
                        "opc_server_ip": "10.2.240.233",
                        "opc_server_port": 4840,
                        "authentication": {
                            "enabled": false,
                            "username": "admin",
                            "password": "admin"
                        },
                        "encryption": {
                            "enabled": false,
                            "cert_filename": "cert.pem",
                            "key_filename": "key.pem"
                        }
                    },
                    "sampling_interval": 1,
                    "tags_file_name": "OPCUA_PLC_tags.json",
                    "select_all_tags_by_default": true,
                    "thing_name": "rt_PLC"
                },
                {
                    "device_ID": "PIPPO2",
                    "connection_parameter": {
                        "opc_server_ip": "10.2.240.233",
                        "opc_server_port": 4840,
                        "authentication": {
                            "enabled": true,
                            "username": "admin",
                            "password": "admin"
                        },
                        "encryption": {
                            "enabled": false,
                            "cert_filename": "cert.pem",
                            "key_filename": "key.pem"
                        }
                    },
                    "sampling_interval": 1,
                    "tags_file_name": "OPCUA_PLC_tags.json",
                    "select_all_tags_by_default": true,
                    "thing_name": "rt_PLC"
                },
                {
                    "device_ID": "PIPPO3",
                    "connection_parameter": {
                        "opc_server_ip": "10.2.240.233",
                        "opc_server_port": 4840,
                        "authentication": {
                            "enabled": true,
                            "username": "admin",
                            "password": "admin"
                        },
                        "encryption": {
                            "enabled": false,
                            "cert_filename": "cert.pem",
                            "key_filename": "key.pem"
                        }
                    },
                    "sampling_interval": 1,
                    "tags_file_name": "OPCUA_PLC_tags.json",
                    "select_all_tags_by_default": true,
                    "thing_name": "rt_PLC"
                }
            ]
        }
    }
}

let config = {}


function getConfFromServer() {
    config = JSON.parse(JSON.stringify(prova))
    return config;
}
getConfFromServer();

function updateNetworkConfig(newNetworkConfig) {
    config.network.routes = newNetworkConfig.routes;
    config.network.net_scan = newNetworkConfig.netscan;
    config.network.dhcp = newNetworkConfig.dhcp;
    config.network.static = newNetworkConfig.static;
    config.network.if_wan_medium = newNetworkConfig.if_wan_medium;
    config.network.wireless = newNetworkConfig.wireless;
    config.network.ntp = newNetworkConfig.ntp;
    config.network.nat = newNetworkConfig.nat;
    config.network.machine_to_internet = newNetworkConfig.machine_to_internet;

    config.network = newNetworkConfig;
    console.log(config.network);
    return config.network;
}
function updateSitemanagerConfig(newSitemanagerConfig) {
    config.sitemanager.domain = newSitemanagerConfig.domain
    config.sitemanager.server = newSitemanagerConfig.server
    config.sitemanager.nameashostname = newSitemanagerConfig.nameashostname
    config.sitemanager.name = newSitemanagerConfig.name

    console.log(config.sitemanager)
}
function updateSitemanagerAgentsConfig(newSitemanagerAgentConfig) {
    config.sitemanager.agents = newSitemanagerAgentConfig
    console.log(config.sitemanager.agents)
}

function updateThingworxConfig(newThingworxConfig) {
    config.thingworx = newThingworxConfig;
    console.log(config.thingworx);
    return config.thingworx
}

function updateChannelsConfig(protocolName, newChannelsConfig) {
    config.protocol[protocolName].channels = newChannelsConfig;

    return config.protocol[protocolName].channels
    /*Send config to server */
}
function updateFoundTags(protocolName, foundTags, channel_ID) {
    let match = ''
    config.protocol[protocolName].channels.map((channel, index) => {
        if (channel['device_ID'] === channel_ID) {
            match = index;
        }
    })
    if (match !== '') {

        config.protocol[protocolName].channels[match]['foundTags'] = foundTags;
    } else { console.error('nessun match trovato') }

}
function updateSavedTags(protocolName, savedTags, channel_ID) {
    let match = ''
    config.protocol[protocolName].channels.map((channel, index) => {
        if (channel['device_ID'] === channel_ID) {
            match = index;
        }
    })
    if (match !== '') {
        config.protocol[protocolName].channels[match]['savedTags'] = savedTags;
    } else { console.error('nessun match trovato') }
}

function getNetworkConf() {
    getConfFromServer();
    return config.network;
}
function getSitemanagerConf() {
    getConfFromServer();
    return config.sitemanager;
}


function getThingworxConf() {
    /*   get_xhr("get_twx_conf()", "/conf/thingworx", get_twx_conf_hanlder) */

    /*  get_twx_conf_hanlder('') */
    getConfFromServer();
    return config.thingworx

}
function getChannelTagsInfo(protocolName, channel_ID) {
    let match = ''
    config.protocol[protocolName].channels.map((channel, index) => {
        if (channel['device_ID'] === channel_ID) {
            match = index;
        }
    })
    let info = {
        foundTags: config.protocol[protocolName].channels[match]['foundTags'],
        savedTags: config.protocol[protocolName].channels[match]['savedTags']
    };
    return info

}

function get_twx_conf_hanlder(text) {
    try {
        /*  let twx_conf = JSON.parse(text) */
        config.thingworx = JSON.parse(JSON.stringify(prova.thingworx))


    } catch (e) {
        console.error(e.message)
        //TODO aggiungere funzione per azioni da fare in caso di errore
    }



}

const getProtocolConf = () => {
    /*   get_opc_conf_handler(''); */
    /*   getConfFromServer(); */
    console.log(config.protocol)
    return config.protocol;
}

const downloadConfig = () => {
    let currentConfig = getConfFromServer();
    let data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentConfig));
    let dateTime = new Date().toLocaleDateString();
    let downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", data);
    downloadAnchorNode.setAttribute("download", `conf_${dateTime}.json`);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

}


function get_opc_conf_handler(text) {
    try {

        /* let opc_conf = JSON.parse(text) */
        config.protocol = JSON.parse(JSON.stringify(prova.protocol))





    } catch (e) {
        console.error(e.message)
        //TODO aggiungere funzione per azioni da fare in caso di errore
    }


}

function connectionStatusRequest(obj) {
    let answ = false;

    try {
        switch (obj.toString()) {

            case 'network':
                answ = true;
                break;
            case 'thingworx':
                answ = false;
                break;
            case 'opc-server':
                answ = false.lenght[2];
                break;
            case 'sitemanager':
                answ = false;
                break;
            default:
                console.log('unknown request')
                break;


        }

        return answ;
    } catch (e) {
        return `Error: ${e}. Found in: ${obj}`
    }

}


export { getThingworxConf, getProtocolConf, updateThingworxConfig, updateChannelsConfig, getConfFromServer, downloadConfig, connectionStatusRequest, getNetworkConf, updateNetworkConfig, getSitemanagerConf, updateSitemanagerConfig, updateSitemanagerAgentsConfig, updateFoundTags, updateSavedTags, getChannelTagsInfo }