let prova = {
    "thingworx": {
        "host": "development.iotdataroom.com",
        "appkey": "31aa0349-6f2b-4275-ae5a-cf665ac3bf96",
        "proxy": {
            "enabled": true,
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
                    "device_ID": "Pippo2",
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
            ]

        }
    }
}

let config = {
    "thingworx": {
        "host": "non aggiornato",
        "appkey": "31aa0349-6f2b-4275-ae5a-cf665ac3bf96",
        "proxy": {
            "enabled": true,
            "host": "192.168.111.1",
            "port": 3128,
            "username": "",
            "password": ""
        }
    },
    "protocol": {
        "opcua": {
            "channels": [
                {
                    "device_ID": "PLC",
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
                    "device_ID": "PLC",
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
                }
            ]

        }
    }
}


function get_twx_conf() {
    /*   get_xhr("get_twx_conf()", "/conf/thingworx", get_twx_conf_hanlder) */

    get_twx_conf_hanlder('')
    return config.thingworx

}

function get_twx_conf_hanlder(text) {
    try {
        /*  let twx_conf = JSON.parse(text) */
        let twx_conf = prova.thingworx
        config.thingworx = twx_conf

    } catch (e) {
        console.error(e.message)
        //TODO aggiungere funzione per azioni da fare in caso di errore
    }



}

function get_opc_conf() {
    /* get_xhr("get_opc_conf()", "/conf/opcua", get_opc_conf_handler) */

    get_opc_conf_handler('')
    return config.protocol
}

function get_opc_conf_handler(text) {
    try {

        /* let opc_conf = JSON.parse(text) */
        let protocol_conf = prova.protocol
        config.protocol = protocol_conf




    } catch (e) {
        console.error(e.message)
        //TODO aggiungere funzione per azioni da fare in caso di errore
    }


}

let thingworx = config.thingworx;
let protocol = config.protocol;


export { thingworx, protocol, get_twx_conf, get_opc_conf }