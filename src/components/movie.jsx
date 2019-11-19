import React, { Component } from 'react';

class Movie extends Component {

    handleSave = () => {
        // go to home page
        this.props.history.replace('/movies');
    }

    render() {
        return (
            <div>
                <h1> Movie From - {this.props.match.params.id}  </h1>
                <button className='btn btn-small m-2' onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}

export default Movie;
