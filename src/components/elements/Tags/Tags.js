import React from 'react'
import './Tags.css'
import { opcua_plc_tags } from './tags_data'

/* let tagsName = Object.keys(opcua_plc_tags);
console.log(tagsName) */

let tagsName = [];
for (const key in opcua_plc_tags) {
    /*     console.log(`${key}: ${opcua_plc_tags[key]}`); */
    tagsName.push(key)

}

function Tags(props) {


    return (
        <>


            <div className="container tags-align-title">
                <h3>{props.title}</h3>
                {tagsName.map((item, indx) => { indx % 2 === 0 && <input type="checkbox" /> }
                    /*     <div className="row">
                            <div className="col-sm">
                                <div key={item + 'opc_tags'} className="input-group mb-3">
                                    <div key={item + 'opc_tags'} className="input-group-prepend">
                                        <div key={item + 'opc_tags'} className="input-group-text">
                                            <input key={item + 'opc_tags'} type="checkbox" aria-label="Checkbox for following text input" />
                                        </div>
                                    </div>
                                    <div key={item + 'opc_tags'} type="text" className="form-control" aria-label="Text input with checkbox"> {tagsName[indx]}</div>
                                </div>

                            </div>
                            <div className="col-sm">
                                <div key={item + 'opc_tags'} className="input-group mb-3">
                                    <div key={item + 'opc_tags'} className="input-group-prepend">
                                        <div key={item + 'opc_tags'} className="input-group-text">
                                            <input key={item + 'opc_tags'} type="checkbox" aria-label="Checkbox for following text input" />
                                        </div>
                                    </div>
                                    <div key={item + 'opc_tags'} type="text" className="form-control" aria-label="Text input with checkbox"> {tagsName[indx + 1]}</div>
                                </div>

                            </div>

                        </div> */



                )}
            </div>

        </>

    )
}

export default Tags