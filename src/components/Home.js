import React from 'react'
import { Link } from 'react-router-dom'

import Footer from './Footer';
import Header from './Header';
import Movie from './Movie';


const Home = (props) => {
    if(!props.movies) {
        return <div>Loading...</div>
    }

    const data = props.movies;
    const movies = data.map(movie => {
        return (
            <Movie movie={movie} key={movie.id} onSelectMovie={props.onSelectMovie} />
        )
    })

    const id = data.map(m => m.id)
    console.log(movies)
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