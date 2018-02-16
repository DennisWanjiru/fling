import React from 'react'
import moment from 'moment'

import Movie from './Movie';

const MovieDetails = (props) => {
    if(!props.movie) {
        return <div>Loading...</div>
    }

    const poster = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`
    const backdrop = `https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`
    const released = moment(props.movie.release_date).format('MMMM Do YYYY')

    const banner = {
        backgroundImage: 'url(' + backdrop + ')',
    };


    return (
        <div className="movie">
            <div className="movie__banner" style={banner}></div>

            <div className="movie__details">
                <div className="container">
                    <div className="row">
                        <div className="col m2 hide-on-small-only">
                            <div className="movie__details--image">
                                <Movie movie={props.movie} />
                            </div>
                        </div>

                        <div className="col m8 s12 m-t-small">
                            <div className="movie__details--title">
                              { props.movie.title }
                            </div>

                            <div className="movie__details--release">
                                { released }
                            </div>

                            <div className="movie__details--description">
                                { props.movie.overview }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails