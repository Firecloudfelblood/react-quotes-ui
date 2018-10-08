import React from 'react'

const Row = ({quoteNumber, quoteReqType, quoteCreatedDt, quoteExpiryDt}) => {
    return(
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 h5'>
            <a href='#'> { quoteNumber } </a>
            <p> { quoteReqType } </p>
            <p> { quoteCreatedDt } </p>
            <p> { quoteExpiryDt } </p>
            <a href="#">{ quoteNumber }</a>

        </div>
    );
}

export default Row;