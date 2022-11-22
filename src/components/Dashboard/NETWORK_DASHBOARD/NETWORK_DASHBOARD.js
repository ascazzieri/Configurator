import React, { useState, useEffect } from 'react'
import './NETWORK_DASHBOARD.css'
import NETWORK_TABLE from '../Tables/NETWORK_TABLE/NETWORK_TABLE'
import Pagenum from '../../elements/Pagenum/Pagenum'
import Refreshconf from '../../elements/Refreshconf/Refreshconf'
import { getNetworkConf } from '../../../config'


const NETWORK_DASHBOARD = (props) => {


    const [Network, updateNetwork] = useState(getNetworkConf())
    /*  const [isProxy, setIsProxy] = useState(Thingworx.proxy.enabled) */


    /*     useEffect(() => {
            setIsProxy(Thingworx.proxy.enabled)
        }, [Thingworx.proxy.enabled]) */



    let NT_headers = [];
    let NT_values = [];

    /*    let proxy_headers = [];
       let proxy_values = []; */



    for (let key in Network) {
        if (Network.hasOwnProperty(key)) {
            NT_headers.push(key);
            NT_values.push(Network[key])
        }
    }
    console.log(NT_headers, NT_values)

    /*     for (let key in TW_values[2]) {
            if (TW_values[2].hasOwnProperty(key)) {
                proxy_headers.push(key);
                proxy_values.push(TW_values[2][key])
    
    
            }
        } */

    /*    if (proxy_values[0] === true) {
           TW_values[2] = 'true';
       } else if (proxy_values[0] === false) {
           TW_values[2] = 'false';
       } */
    return (
        <>
            <div className='container-fluid tw-dashboard'>
                <div id="carouselNWDash" className="carousel slide" data-ride="carousel" data-interval="false" data-keyboard="true">

                    <div className="carousel-inner">
                        <div className="carousel-item active">

                            <Pagenum
                                nPage={1}
                                totalPages={2}
                                key={Math.random()}
                            />


                            <NETWORK_TABLE
                                headers={NT_headers}
                                values={NT_values}
                                cardNumber={1}
                                title="Network"
                                table_style="table table-secondary table-bordered table-sm"
                            />
                        </div>

                        <div className="carousel-item">

                            <Pagenum
                                nPage={2}
                                totalPages={2}
                                key={Math.random()}

                            />
                            <NETWORK_TABLE
                                headers={NT_headers}
                                values={NT_values}
                                cardNumber={2}
                                title="Connection parameters"
                                table_style="table table-secondary table-bordered table-sm"
                            />

                        </div>


                    </div>
                    <Refreshconf
                        text="Refresh Network configuration"
                        updateComponent={updateNetwork}
                        toUpdate={getNetworkConf}

                    />

                    <a className="carousel-control-prev" href="#carouselNWDash" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                    </a>
                    <a className="carousel-control-next" href="#carouselNWDash" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>

                    </a>


                </div>

            </div>

            {/*         {console.log(TW_values[2])} */}



        </>
    )
}

export default NETWORK_DASHBOARD