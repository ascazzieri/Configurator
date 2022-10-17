import React, {useState} from 'react'
import './OPCUA_DASHBOARD.css'
import PROTOCOL_TABLE from '../elements/PROTOCOL_TABLE/PROTOCOL_TABLE'
import Pagenum from '../elements/Pagenum/Pagenum'
import Refreshconf from '../elements/Refreshconf/Refreshconf'
/* import { protocol, channels, server_headers, server_values, users_headers, users_values, tags_headers, tags_values, encryption_headers, encryption_values } from './opcua_datas' */
import { protocol } from '../../config'
import { get_opc_conf } from '../../config'


const OPCUA_DASHBOARD = () => {

  const [Protocol, updateProtocol] = useState(protocol)

let { channels } = Protocol.opcua;
  
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



  return (
    <>
      <div className='container-fluid opcua-dashboard'>
        <div id="carouselOPCUADash" className="carousel slide" data-ride="carousel" data-interval="false" data-keyboard="true">

          <div className="carousel-inner">
            <div className="carousel-item active">

              <Pagenum
                nPage={1}
                totalPages={4}
                key={Math.random()}
              />
              <PROTOCOL_TABLE
                title="OPCUA Server"
                cardNumber = {1}
                headers={server_headers}
                values={server_values}
                channels={channels}
                table_style="table table-secondary table-bordered table-sm"

              />

            </div>

            <div className="carousel-item">

              <Pagenum
                nPage={2}
                totalPages={4}
                key={Math.random()}

              />
              <PROTOCOL_TABLE
                title="OPCUA Users"
                cardNumber = {2}
                channels={channels}
                headers={users_headers}
                values={users_values}
                table_style="table table-secondary table-bordered table-sm"

              />


            </div>
            <div className="carousel-item">

              <Pagenum
                nPage={3}
                totalPages={4}
                key={Math.random()}

              />
              <PROTOCOL_TABLE

                title="OPCUA Tags"
                cardNumber = {3}
                channels={channels}
                headers={tags_headers}
                values={tags_values}
                table_style="table table-secondary table-bordered table-sm"

              />


            </div>
            <div className="carousel-item">

              <Pagenum
                nPage={4}
                totalPages={4}
                key={Math.random()}

              />
              <PROTOCOL_TABLE

                title="OPCUA Encryption"
                cardNumber = {4}
                channels={channels}
                headers={encryption_headers}
                values={encryption_values}
                table_style="table table-secondary table-bordered table-sm"

              />


            </div>


          </div>

          <a className="carousel-control-prev" href="#carouselOPCUADash" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>

          </a>
          <a className="carousel-control-next" href="#carouselOPCUADash" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>

          </a>


        </div>


      </div>
      <Refreshconf
        text="Refresh OPC configuration"
        ClickToRefresh= {get_opc_conf}
        updateComponent={updateProtocol}
        toUpdate={get_opc_conf}
      />


    </>





  )

}

export default OPCUA_DASHBOARD