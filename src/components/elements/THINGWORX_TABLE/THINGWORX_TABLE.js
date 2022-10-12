import React from 'react'
import './THINGWORX_TABLE.css'

function THINGWORX_TABLE(props) {
    let { headers, values, onProxyChange, cardNumber } = props;

    function handleProxyChange(event) {
        onProxyChange(event.target.value[0])
        console.log(event.target.value[0])


    }

    return (
        <>
            <div className='table-responsive table-margin'>
                <h4>{props.title}</h4>
                <table className={props.table_style}>
                    <thead className="thead-dark">
                        <tr>
                            {cardNumber === 1 && <><th scope="col">{headers[0]}</th>
                                <th scope="col">{headers[1]}</th>
                                <th scope="col" onChange={handleProxyChange}>{headers[2]}</th></>}

                            {cardNumber === 2 && <>
                                <th scope="col">{headers[1]}</th>
                                <th scope="col">{headers[2]}</th>
                                <th scope="col">{headers[3]}</th>
                                <th scope="col">{headers[4]}</th>
                            </>}
                            {/*  {headers.map((elements) => <th scope="col">{elements}</th>)} */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {cardNumber === 1 && values.map((elements) => <td key={Math.random()}>{elements}</td>)}
                            {cardNumber === 2 && <>
                                <td>{values[1]}</td>
                                <td>{values[2]}</td>
                                <td>{values[3]}</td>
                                <td className='hidetext'>{values[4]}</td>
                            </>}

                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    )
}

THINGWORX_TABLE.defaultProps = {
  headers: ["example1", "example2", "example3", "example4"],
  values: ["example1", "example2", "example3", "example4"],
  title: "Example title",
  cardNumber: 2
}

export default THINGWORX_TABLE