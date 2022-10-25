let prova = {
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

function updateThingworxConfig(newThingworxConfig) {
    config.thingworx = newThingworxConfig;
    console.log(config.thingworx);
    return config.thingworx
}

function updateChannelsConfig(protocolName, newChannelsConfig) {
    config.protocol[protocolName].channels = newChannelsConfig;
    console.log(config.protocol[protocolName].channels)
    return config.protocol[protocolName].channels
    /*Send config to server */
}


function getThingworxConf() {
    /*   get_xhr("get_twx_conf()", "/conf/thingworx", get_twx_conf_hanlder) */

    /*  get_twx_conf_hanlder('') */
    return config.thingworx

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
    return config.protocol;
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


export {getThingworxConf, getProtocolConf, updateThingworxConfig, updateChannelsConfig, getConfFromServer }