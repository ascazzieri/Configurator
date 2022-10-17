import React, { useState } from 'react'
import './THINGWORX_DASHBOARD.css'
import THINGWORX_TABLE from '../elements/THINGWORX_TABLE/THINGWORX_TABLE'
import Pagenum from '../elements/Pagenum/Pagenum'
import thingworx from './thingworx_datas'
import Refreshconf from '../elements/Refreshconf/Refreshconf'
import { get_twx_conf } from '../../config'


/* console.log(proxy_values) */
/* console.log(proxy_headers);
console.log(proxy_values) */


const THINGWORX_DASHBOARD = (props) => {


    const [Thingworx, updateThingworx] = useState(thingworx)
  


    let TW_headers = [];
    let TW_values = [];

    let proxy_headers = [];
    let proxy_values = [];



    for (let key in Thingworx) {
        if (Thingworx.hasOwnProperty(key)) {
            TW_headers.push(key);
            TW_values.push(Thingworx[key])
        }
    }

    for (let key in TW_values[2]) {
        if (TW_values[2].hasOwnProperty(key)) {
            proxy_headers.push(key);
            proxy_values.push(TW_values[2][key])


        }
    }

    if (proxy_values[0] === true) {
        TW_values[2] = 'true';
    } else if (proxy_values[0] === false) {
        TW_values[2] = 'false';
    }


    const [isProxy, setIsProxy] = useState(proxy_values[0])







    return (
        <>
            <div className='container-fluid tw-dashboard'>
                <div id="carouselTWDash" className="carousel slide" data-ride="carousel" data-interval="false" data-keyboard="true">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {isProxy && <>
                                <Pagenum
                                    nPage={1}
                                    totalPages={2}
                                    key={Math.random()}
                                />
                            </>}

                            <THINGWORX_TABLE
                                headers={TW_headers}
                                values={TW_values}
                                onProxyChange={setIsProxy}
                                cardNumber={1}
                                title="Thingworx"
                                table_style="table table-secondary table-bordered table-sm"
                            />
                        </div>
                        {isProxy && <>
                            <div className="carousel-item">

                                <Pagenum
                                    nPage={2}
                                    totalPages={2}
                                    key={Math.random()}

                                />
                                <THINGWORX_TABLE
                                    headers={proxy_headers}
                                    values={proxy_values}
                                    cardNumber={2}
                                    title="Proxy server"
                                    table_style="table table-secondary table-bordered table-sm"
                                />

                            </div></>}


                    </div>
                    {isProxy && <>
                        <a className="carousel-control-prev" href="#carouselTWDash" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                        </a>
                        <a className="carousel-control-next" href="#carouselTWDash" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>

                        </a></>
                    }

                </div>

            </div>
            <Refreshconf
                text="Refresh TW configuration"
                ClickToRefresh={get_twx_conf}
                updateComponent={updateThingworx}
                toUpdate={get_twx_conf}

            />



        </>
    )
}

export default THINGWORX_DASHBOARD