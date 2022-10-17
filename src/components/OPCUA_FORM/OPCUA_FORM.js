import React from 'react'
import './OPCUA_FORM.css'
import OPCUA_CARD from '../elements/OPCUA_CARD/OPCUA_CARD'
import Pagenum from '../elements/Pagenum/Pagenum';



const OPCUA_FORM = () => {
    return (
        <>
            <div id="carouselOPCUAForm" className="carousel slide" data-ride="carousel" data-interval="false" data-keyboard="true">

                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <Pagenum
                            nPage={1}
                            totalPages={4}
                            key={Math.random()}
                        />
                        <OPCUA_CARD
                            title="OPCUA Server"
                            cardNumber={1}
                            key={Math.floor(Math.random())} />
                    </div>
                    <div className="carousel-item">

                        <Pagenum
                            nPage={2}
                            totalPages={4}
                            key={Math.random()}

                        />
                        <OPCUA_CARD
                            title="OPCUA Users"
                            cardNumber={2}
                            key={Math.random()} />
                    </div>
                    <div className="carousel-item">

                        <Pagenum
                            nPage={3}
                            totalPages={4}
                            key={Math.random()}
                        />
                        <OPCUA_CARD
                            title="OPCUA Tags"
                            cardNumber={3}
                            key={Math.random()} />

                    </div>
                    <div className="carousel-item">

                        <Pagenum
                            nPage={4}
                            totalPages={4}
                            key={Math.random()}
                        />
                        <OPCUA_CARD
                            title="OPCUA Encryption"
                            cardNumber={4}
                            key={Math.random()} />

                    </div>
                </div>
                <a className="carousel-control-prev carousel-control-width" href="#carouselOPCUAForm" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                </a>
                <a className="carousel-control-next carousel-control-width" href="#carouselOPCUAForm" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>

                </a>
            </div>

        </>
    )
}

export default OPCUA_FORM