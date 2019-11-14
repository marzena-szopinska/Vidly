import React, { Component } from 'react';
import Liked from './liked';
import TableHeader from './tableHeader';

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'like' },
        { key: 'delete' }
    ];

    render() {
        const { movies, onDelete, onLike, sortColumn, onSort } = this.props;

        return (
            <table className='table'>
                <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
                <tbody>
                    {/* loop through the movies and transform each movie into a row of bunch information */}
                    {movies.map(movie => {
                        return (
                            <tr key={movie._id}>
                                <th scope='row'>{movie.title}</th>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Liked onLike={onLike} liked={movie.liked} movie={movie} /></td>
                                <td><button onClick={() => onDelete(movie._id)}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default MoviesTable;