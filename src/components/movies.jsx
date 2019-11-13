import React from 'react';
import Liked from './liked';
import Pagination from './pagination';
import ListGroup from './listGroup';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';

class Movies extends React.Component {
    state = {
        movies: [],
        currentPage: 1,
        pageSize: 4,
        genres: []
    }

    componentDidMount() {
        // set genres and movies
        this.setState({ genres: getGenres(), movies: getMovies() });
    }

    handleMovieDelete = (id) => {
        // loop through movies and filter out the deleted movie
        const filteredList = this.state.movies.filter((movie) => movie._id !== id);
        // update the movie state
        this.setState({ movies: filteredList });
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies]; // make a copy of our state
        const index = movies.indexOf(movie); // find index of that object
        movies[index] = { ...movies[index] };// copy this object
        movies[index].liked = !movies[index].liked; // toggle liked property
        this.setState({ movies: movies }); // update the state

        // Why not like this? 
        // const updatedMovies = this.state.movies.map(m => {
        //     if (m._id === id) {
        //         m.liked = !m.liked;
        //     }
        //     return m;
        // })

        // this.setState({ movies: updatedMovies })
    }

    handlePageChange = (page) => {
        // change currentPage to the page that has been clicked
        this.setState({ currentPage: page });
    }

    handleGenreSelect = (genre) => {
        console.log('picked genre: ', genre.name);
    }

    render() {
        // if there are no movies print this message
        if (this.state.movies.length === 0) {
            return <p>There are no movies in our database.</p>
        }

        const movies = paginate(this.state.movies, this.state.currentPage, this.state.pageSize);

        // otherwise print the whole table
        return (
            <div className='row'>
                <div className='col-2'>
                    <br />
                    <br />
                    <ListGroup items={this.state.genres} onItemSelect={this.handleGenreSelect} />
                </div>
                <div className='col'>
                    <p>There are {this.state.movies.length} movies in the database.</p>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Genre</th>
                                <th scope='col'>Stock</th>
                                <th scope='col'>Rate</th>
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
                                        <td><Liked onLike={this.handleLike} liked={movie.liked} movie={movie} /></td>
                                        <td><button onClick={() => this.handleMovieDelete(movie._id)}>Delete</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <Pagination itemsCount={this.state.movies.length}
                        pageSize={this.state.pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={this.state.currentPage} />
                </div>

            </div>
        );
    }
}

export default Movies;