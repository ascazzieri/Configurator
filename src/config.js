let config = {
    "thingworx": {
        "host": "development.iotdataroom.com",
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

let thingworx = config.thingworx;
let protocol = config.protocol;


export { thingworx, protocol }