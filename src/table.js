import React from 'react';
import Row   from './row';

const Table =({quotes}) => {
    return(
        <div className='fl w-100 pa2'>
            <div className='dt dt--fixed w-80 center pv3'>
                <div className='dtc'>Quote Number</div>
                <div className='dtc'>Quote Type</div>
                <div className='dtc'>Creation Date</div>
                <div className='dtc'>Expiration Date</div>
                <div className='dtc tr pr4'>Quote Details</div>
            </div>
            {

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