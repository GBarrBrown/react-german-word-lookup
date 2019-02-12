import React from 'react'

const Results = (props) => {
    var searchResultsArr = props.searchResults
    return(
        <div>
            <ul>
                {searchResultsArr.map((result) => <li>{result.word}</li>)}
            </ul>
        </div>
    )
}

export default Results