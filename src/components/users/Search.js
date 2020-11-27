import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {
        text:''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    }

    onChange = (event) => this.setState({ [event.target.name]: event.target.value})

    onSubmit = (event) => {
        event.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: ''})
    }

    render() {

        const {showClear, clearUsers} = this.props;
        const {text} = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                    type="text" 
                    name="text" 
                    placeholder="Search any Github Username..." 
                    value={text}
                    onChange={this.onChange}
                    />
                    <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-light btn-block"
                    />
                </form>
                {showClear && 
                <button 
                    className="btn btn-dark btn-block" 
                    onClick={clearUsers}
                > 
                Clear
                </button>}
            </div>
        )
    }
}

export default Search