import React from 'react'

const Results = (props) => {
    var searchResultsArr = props.searchResults
    return(
        <div className="outer-results-container">
            <div className="results-container">
                <ul>
                    {searchResultsArr.map((result, key) => {
                        return<li key={key}>
                        <strong>{result.word}</strong> - {result.translations.map((translation, i) => {
                            if(i == 0){
                                return <span>{translation}</span>
                            }else{
                                return <span>, {translation}</span>
                            }
                        })}
                            </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Results