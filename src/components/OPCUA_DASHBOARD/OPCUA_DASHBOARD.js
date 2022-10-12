import React from 'react'
import './OPCUA_DASHBOARD.css'
import PROTOCOL_TABLE from '../elements/PROTOCOL_TABLE/PROTOCOL_TABLE'
import Pagenum from '../elements/Pagenum/Pagenum'
import { channels, server_headers, server_values, users_headers, users_values, tags_headers, tags_values, encryption_headers, encryption_values } from './opcua_datas'


const OPCUA_DASHBOARD = () => {

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


    </>





  )

}

export default OPCUA_DASHBOARD