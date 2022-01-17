import React from 'react'
import '../App.css'

const Search = (props) => {
    return (
        <div className='mg-2 flex'>
            <input 
            type="text" 
            placeholder='search' 
            onChange={e => props.handleInput(e)}
            />
        </div>
    )
}

export default Search
