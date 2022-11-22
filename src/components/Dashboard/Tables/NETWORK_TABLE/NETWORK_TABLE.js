import React from 'react'
import './NETWORK_TABLE.css'


function NETWORK_TABLE(props) {
    let { headers, values, cardNumber } = props;

    return (
        <>
            <div className='table-responsive table-margin'>
                <h4>{props.title}</h4>
                <table className={props.table_style}>
                    <thead className="thead thead-dark">
                        <tr>
                            {cardNumber === 1 && <>
                                <th scope="col">{headers[1]}</th>
                                <th scope="col">{'connection type'}</th>
                                <th scope="col">{headers[5]}</th>
                                <th scope="col">{headers[6]}</th>
                                <th scope="col">{'firewall enabled'}</th>
                            </>}

                            {cardNumber === 2 && <>
                                <th scope="col">{'IP'}</th>
                                <th scope="col">{'Gateway'}</th>
                                <th scope="col">{'DNS'}</th>
                               {/*  <th scope="col">{headers[4]}</th> */}
                            </>}
                            {/*  {headers.map((elements) => <th scope="col">{elements}</th>)} */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {cardNumber === 1 && <>
                                <td>{values[1].toString()}</td>
                                <td>{values[3]}</td>
                                <td>{values[5].toString()}</td>
                                <td>{values[6].toString()}</td>
                                <td>{values[10].toString()}</td>
                            </>}
                            {cardNumber === 2 && <>
                                <td>{values[2].ip}</td>
                                <td>{values[2].gateway}</td>
                                <td>{values[2].dns.toString()}</td>
                               {/*  <td className='hidetext'>{values[4]}</td> */}
                            </>}

                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    )
}

NETWORK_TABLE.defaultProps = {
    headers: ["example1", "example2", "example3", "example4"],
    values: ["example1", "example2", "example3", "example4"],
    title: "Example title",
    cardNumber: 2
}


export default NETWORK_TABLE