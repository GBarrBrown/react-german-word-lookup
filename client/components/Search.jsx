import React from 'react'

export default class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchStr : ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    onSubmit(e) {
        e.preventDefault() //dont do default
        const search = this.state.searchStr
    }

    update(e) {     
        // use this.setState({key:val}) over this.state = {key:val}
        // as state will override the whole object with your new one
        // whereas setState changes only the key:val pairs it is given
        this.setState({
            searchStr : e.target.value
        })
    }

    render() {
        return(
            <div className="search-container">
                <form onSubmit={this.onSubmit} className="search-form">
                    <input onChange={this.update} type="text" name="searchStr" className="search-input" placeholder="Search.." required/>
                </form>
            </div>
        )
    }
}
