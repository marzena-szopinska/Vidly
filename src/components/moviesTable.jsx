import React, { Component } from 'react';
import Liked from './liked';
import Table from './table';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'like', content: movie => (<Liked onLike={this.props.onLike} liked={movie.liked} movie={movie} />) },
        { key: 'delete', content: movie => (<button onClick={() => this.props.onDelete(movie._id)}>Delete</button>) }
    ];

    render() {
        const { movies, sortColumn, onSort } = this.props;

        return (
            <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort} />
        );
    }
}

export default MoviesTable;