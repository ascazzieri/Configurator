import React from 'react'
import './PROTOCOL_TABLE.css'


const PROTOCOL_TABLE = (props) => {
    let { channels, headers, values, cardNumber, password } = props;




    /* let { protocolType, nChannels, protocolKeys } = props; */

    return (
        <div className='table-responsive table-margin'>
            <h4>{props.title}</h4>
            <table className={props.table_style}>

                <thead className='thead-dark'>
                    <tr>
                        <th key={Math.random()} scope="col">Channel</th>
                        {headers.map((header) => <th key={Math.random()} scope="col">{header}</th>)}
                    </tr>
                </thead>
                <tbody>

                    {values.map((value, index) =>
                        <tr key={Math.random()}>
                            <th className="fixed-width" key={Math.random()} scope="row">{index + 1}</th>
                            {value.map((insideValue, indx) => (password != null && indx === password) ? <td className='hidetext' key={Math.random()}>{insideValue}</td> : <td key={Math.random()}>{insideValue}</td>


                            )}
                        </tr>


                    )}







                </tbody>
            </table>

        </div >
    )
}

PROTOCOL_TABLE.defaultProps = {
    headers: ["1", "2", "3", "4", "5"],
    values: [["1", "2", "3", "4", "5"], ["1", "2", "3", "4", "5"]]
}
export default PROTOCOL_TABLE