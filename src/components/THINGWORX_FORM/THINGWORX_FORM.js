import React from 'react'
import './THINGWORX_FORM.css'
import THINGWORX_CARD from '../elements/THINGWORX_CARD/THINGWORX_CARD'
import Pagenum from '../elements/Pagenum/Pagenum'

function THINGWORX_FORM() {
    return (
        <> <div id="carouselTWForm" className="carousel slide" data-ride="carousel" data-interval="false" data-keyboard="true">

            <div className="carousel-inner">
                <div className="carousel-item active">

                    <Pagenum
                        nPage={1}
                        totalPages={2}
                        key={Math.random()}
                    />
                    <THINGWORX_CARD
                        title="Thingworx"
                        cardNumber={1}
                        key={Math.random()}
                    />
                </div>
                <div className="carousel-item">

                    <Pagenum
                        nPage={2}
                        totalPages={2}
                        key={Math.random()}

                    />
                    <THINGWORX_CARD
                        title="Proxy"
                        cardNumber={2}
                        key={Math.random()}
                    />
                </div>

            </div>
            <a className="carousel-control-prev carousel-control-width" href="#carouselTWForm" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon form" aria-hidden="true"></span>

            </a>
            <a className="carousel-control-next carousel-control-width" href="#carouselTWForm" role="button" data-slide="next">
                <span className="carousel-control-next-icon " aria-hidden="true"></span>

            </a>
        </div>


        </>

    )
}

export default THINGWORX_FORM;