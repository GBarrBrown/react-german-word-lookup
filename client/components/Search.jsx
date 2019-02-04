import React from 'react'

const Search = () => {
    return(
        <div className="search-container">
            <form>
                <input type="text" name="searchStr" className="search-input" placeholder="Search.." required/>
            </form>
        </div>
    )
}

export default Search