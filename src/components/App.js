import React, { Component } from 'react'

import Header from './Header'
import Home from './Home';
import MovieDetails from './MovieDetails';

const tmdb = require('moviedb') ('62b60cae9c5e7575520e6123bb753db3');

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            selected: null
        }

        this.movieSearch();
    }

    movieSearch(movie='good lie') {
        tmdb.searchMovie({ query: movie }, (err, movies) => {
            this.setState({movies: movies.results})
        });
    }

    selectedMovie(id) {
        tmdb.movieInfo({ id: id }, (err, selected) => {
            this.setState({selected})
        });
    }

    render () {
        return (
            <div>
                <div className="col m6">
                    <Home movies={this.state.movies} onSelectMovie={this.selectedMovie.bind(this)} />
                </div>
                <div className="col m6">
                    <MovieDetails movie={this.state.selected} />
                </div>
            </div>
        )
    }
}

export default App
