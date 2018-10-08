import React from 'react';
import Row   from './row';

const Table =({quotes}) => {
    return(
        <div className='fl w-100 pa2'>{
            quotes.map((user, index) => {
                return (
                    <Row
                        key            = {index}
                        quoteNumber    = {quotes[index].quoteNumber ? quotes[index].quoteNumber : "N/A"}
                        quoteReqType   = {quotes[index].quoteReqType.ignoreCase === "w" ? "WEB" : "SALES"}
                        quoteCreatedDt = {quotes[index].quoteCreatedDt ? quotes[index].quoteCreatedDt : "N/A"}
                        quoteExpiryDt  = {quotes[index].quoteExpiryDt ? quotes[index].quoteExpiryDt : "N/A"}
                    />

                );
            })
        }
        </div>
    )
}
export default Table;