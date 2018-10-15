import React from 'react'

const Row = ({quoteNumber, quoteReqType, quoteCreatedDt, quoteExpiryDt}) => {
    return(
        <div className='dt dt--fixed w-80 center grow stripe-dark pv3'>

            <a className='dtc pl2' href={`http://localhost:3000/quoteDetails/?quoteNumber=${ quoteNumber }`}>{ quoteNumber } </a>
            <p className='dtc'> { quoteReqType } </p>
            <p className='dtc'> { quoteCreatedDt } </p>
            <p className='dtc'> { quoteExpiryDt } </p>
            <a className='dtc tr pr3' href={`http://localhost:3000/quoteDetails/?quoteNumber=${ quoteNumber }`}>View Details</a>

        </div>
    );
}

export default Row;