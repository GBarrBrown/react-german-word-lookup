import React from 'react'

const Results = (props) => {
    var searchResultsArr = props.searchResults
    return(
        <div>
            <ul>
    {searchResultsArr.map((result, key) => {
        return<li key={key}>{result.word}</li>
        }
        )}
            </ul>
        </div>
    )
}

export default Results