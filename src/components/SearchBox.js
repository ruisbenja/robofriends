import React from 'react';

const SearchBox = ({searchfield,searchChange}) => {
    return (
        <div>
            <input onChange={searchChange} className='pa3 ba' type="search" name="" placeholder='Search Robots' id=""/>
        </div>
    );
}
export default SearchBox;