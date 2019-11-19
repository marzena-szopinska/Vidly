import React, { Component } from 'react';

class Movie extends Component {

    handleSave = () => {
        // go to home page
        this.props.history.replace('/movies');
    }

    render() {
        return (
            <div>
                <h1> Movie From - id  </h1>
                <button className='btn btn-small' onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}

export default Movie;
