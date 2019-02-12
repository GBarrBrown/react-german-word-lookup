import React from 'react'

const Results = (props) => {
    var searchResultsArr = props.searchResults
    return(
        <div className="outer-results-container">
            <div className="results-container">
                <ul>
        {searchResultsArr.map((result, key) => {
            return<li key={key}>{result.word}</li>
            }
            )}
                </ul>
            </div>
        </div>
    )
}

export default Results