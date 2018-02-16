import React, { Component } from 'react'

import Header from './Header'
import Home from './Home';
import MovieDetails from './MovieDetails';

const tmdb = require('moviedb') ('62b60cae9c5e7575520e6123bb753db3');

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }


        this.movieSearch();

    }

    movieSearch(movie='Jackie Chan') {
        tmdb.searchMovie({ query: movie }, (err, movies) => {
            this.setState({movies: movies.results})
        });
    }

    render () {
        console.log(this.state.movies)
        return (
            <div>
                {/* <Home movies={this.state.movies} /> */}
                <MovieDetails movie={this.state.movies[0]} />
            </div>
        )
    }
}

export default App
