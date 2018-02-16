import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

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
        const num = 3454;
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
        console.log(this.state.selected)
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => {
                        return (
                            <Home movies={this.state.movies}
                             onSelectMovie={this.selectedMovie.bind(this)} />
                        )
                    }} />

                    <Route path="/details" render={() => {
                        return (
                            <MovieDetails movie={this.state.selected} />
                        )
                    }} />
                </Switch>

                {/* <div className="col m6">
                </div>
                <div className="col m6">
                </div> */}
            </div>
        )
    }
}

export default App
