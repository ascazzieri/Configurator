import React, { useState, useEffect } from 'react'
import './THINGWORX_DASHBOARD.css'
import THINGWORX_TABLE from '../Tables/THINGWORX_TABLE/THINGWORX_TABLE'
import Pagenum from '../../elements/Pagenum/Pagenum'
import Refreshconf from '../../elements/Refreshconf/Refreshconf'
import { getThingworxConf } from '../../../config'


const THINGWORX_DASHBOARD = (props) => {


    const [Thingworx, updateThingworx] = useState(getThingworxConf())
    const [isProxy, setIsProxy] = useState(Thingworx.proxy.enabled)


    useEffect(() => {
        setIsProxy(Thingworx.proxy.enabled)
    },[Thingworx.proxy.enabled] )



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
                    <Refreshconf
                        text="Refresh TW configuration"
                        updateComponent={updateThingworx}
                        toUpdate={getThingworxConf}

                    />
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

            {/*         {console.log(TW_values[2])} */}



        </>
    )
}

export default THINGWORX_DASHBOARD