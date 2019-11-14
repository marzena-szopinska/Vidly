import React from 'react';
import Pagination from './pagination';
import ListGroup from './listGroup';
import MoviesTable from './moviesTable';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';

import _ from 'lodash';

class Movies extends React.Component {
    state = {
        movies: [],
        currentPage: 1,
        pageSize: 4,
        genres: [],
        selectedGenre: null,
        sortColumn: { path: 'title', order: 'asc' }
    }

    componentDidMount() {
        const genres = [{ name: 'All Genres ' }, ...getGenres()];
        // set genres and movies
        this.setState({ genres: genres, movies: getMovies() });
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
        this.setState({ selectedGenre: genre, currentPage: 1 });
    }

    handleSort = sortColumn => {

        // update the state
        this.setState({ sortColumn });
    }

    getPagedData = () => {
        const { pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies } = this.state;
        // if genre hasnt been selected render all the movies, if has been then filter out movies that are different genre than we selected
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        // use pagination
        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies };
    }

    render() {
        // if there are no movies print this message
        if (this.state.movies.length === 0) {
            return <p>There are no movies in our database.</p>
        }

        const { totalCount, data: movies } = this.getPagedData();

        // otherwise print the whole table
        return (
            <div className='row'>
                <div className='col-2'>
                    <br />
                    <br />
                    <ListGroup items={this.state.genres}
                        onItemSelect={this.handleGenreSelect}
                        selectedItem={this.state.selectedGenre} />
                </div>
                <div className='col'>
                    <p>There are {totalCount} movies in the database.</p>
                    <MoviesTable movies={movies}
                        onDelete={this.handleMovieDelete}
                        onLike={this.handleLike}
                        onSort={this.handleSort}
                        sortColumn={this.state.sortColumn} />

                    <Pagination itemsCount={totalCount}
                        pageSize={this.state.pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={this.state.currentPage} />
                </div>

            </div>
        );
    }
}

export default Movies;