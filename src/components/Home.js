import React from 'react'

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
                        { movies }
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Home