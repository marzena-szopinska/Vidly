import React, { Component } from 'react';
import Liked from './liked';

const MoviesTable = (props) => {
    const { movies, onDelete, onLike, onSort } = props;

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th onClick={() => onSort('title')} scope='col'>Title</th>
                    <th onClick={() => onSort('genre.name')} scope='col'>Genre</th>
                    <th onClick={() => onSort('numberInStock')} scope='col'>Stock</th>
                    <th onClick={() => onSort('dailyRentalRate')} scope='col'>Rate</th>
                    <th></th>
                </tr>
            </thead>
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

export default MoviesTable;