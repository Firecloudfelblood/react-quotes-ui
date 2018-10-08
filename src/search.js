import React from 'react'

const Search = ({search, searchChange}) =>{
    return(
        <div className='w-100 h3 '>
                <label className='fw6 lh-copy f6 pr2'
                       htmlFor="searchQuote">
                    Search Quote:
                </label>

                <input
                    className='pa3 ba b--blue'
                    type="search"
                    placeholder='Input quote search'
                    onChange={searchChange}
                />
        </div>

    );

}

export default Search;