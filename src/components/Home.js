import React from 'react'
import { Link } from 'react-router-dom'

import Footer from './Footer';
import Header from './Header';
import Movie from './Movie';


const Home = (props) => {
    if(!props.movies) {
        return <div>Loading...</div>
    }

    const movies = props.movies.map(movie => {
        return (
            <Movie movie={movie} key={movie.id} onSelectMovie={props.onSelectMovie} />
        )
    })

    return (
        <div>
            <Header />

            <main>
                <div className="container">
                    <div className="row">
                        <Link to="/details">{ movies }</Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Home