import { protocol } from '../../../config'

let { channels } = protocol.opcua;

let server_headers = [];
let server_values = [];

let users_headers = [];
let users_values = [];

let tags_headers = [];
let tags_values = [];

let encryption_headers = [];
let encryption_values = [];

let Keys = [];
let ConnectionParametersKeys = [];
let AutenticationKeys = [];
let EncryptionKeys = [];



channels.map(channel => {
    let { connection_parameter, device_ID, sampling_interval, tags_file_name, select_all_tags_by_default, thing_name } = channel;
    for (const [key, values] of Object.entries(channel)) {
        Keys.push(key)
    }

    for (const [ckeys, cvalues] of Object.entries(connection_parameter)) {
        ConnectionParametersKeys.push(ckeys)
    }
    for (const [akeys, avalues] of Object.entries(connection_parameter.authentication)) {
        AutenticationKeys.push(akeys)
    }
    for (const [ekeys, evalues] of Object.entries(connection_parameter.encryption)) {
        EncryptionKeys.push(ekeys)
    }
    server_headers = [Keys[0], ConnectionParametersKeys[0], ConnectionParametersKeys[1]];
    server_values.push([device_ID, connection_parameter.opc_server_ip, connection_parameter.opc_server_port])

    users_headers = [AutenticationKeys[0], AutenticationKeys[1], AutenticationKeys[2]];
    users_values.push([connection_parameter.authentication.enabled.toString(), connection_parameter.authentication.username, connection_parameter.authentication.password]);

    tags_headers = [Keys[2], Keys[3], Keys[4], Keys[5]];
    tags_values.push([sampling_interval, tags_file_name, select_all_tags_by_default.toString(), thing_name]);

    encryption_headers = [EncryptionKeys[0], EncryptionKeys[1], EncryptionKeys[2]]
    encryption_values.push([connection_parameter.encryption.enabled.toString(), connection_parameter.encryption.cert_filename, connection_parameter.encryption.key_filename])

})

Keys.splice(6, (6 * (channels.length - 1)));
ConnectionParametersKeys.splice(4, (4 * (channels.length - 1)));
AutenticationKeys.splice(3, (3 * (channels.length - 1)));
EncryptionKeys.splice((3, (3 * (channels.length - 1))));




export { protocol, channels, server_headers, server_values, users_headers, users_values, tags_headers, tags_values, encryption_headers, encryption_values };

/* export { channels, Keys, ConnectionParametersKeys, DeviceID, ConnectionParameters, SamplingInterval, TagsFileName, SelectAllTagsByDefault, ThingName };
 */
