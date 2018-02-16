import React from 'react'
import img from '../images/nat-6.jpg'

const Movie = (props) => {
    const poster = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`

    return (
        <div className="col m2 s6 m-b-small">
             <div className="card card__movie hoverable"
              onClick={() => props.onSelectMovie(props.movie.id)}>
                <img src={poster} alt={props.movie.original_title} className="responsive-img"/>
            </div>
        </div>
    )
}

export default Movie