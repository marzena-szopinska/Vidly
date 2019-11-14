import React, { Component } from 'react';
import Liked from './liked';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'like', content: movie => (<Liked onLike={this.props.onLike} liked={movie.liked} movie={movie} />) },
        { key: 'delete', content: movie => (<button onClick={() => this.props.onDelete(movie._id)}>Delete</button>) }
    ];

    render() {
        const { movies, sortColumn, onSort } = this.props;

        return (
            <table className='table'>
                <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
                <TableBody columns={this.columns} data={movies} />
            </table>
        );
    }
}

export default MoviesTable;