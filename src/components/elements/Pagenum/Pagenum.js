import React from 'react'
import './Pagenum.css'



function Pagenum(props) {
    let nPageArray = []

    for (let i = 1; i <= props.totalPages; i++) {
        nPageArray.push(i);
    }
    /*  console.log(nPageArray) */

    return (
        <nav className="navigation-margins" aria-label="Page navigation example">
            <ul className="pagination">
                {nPageArray.map((item) => props.nPage === item ? <li key={Math.random()} className="page-item active"><a className="page-link">{item}</a></li> : <li key={Math.random()} className="page-item disabled"><a className="page-link">{item}</a></li>
                )}



            </ul>
        </nav>
    )
}

export default Pagenum