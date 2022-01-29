import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h2> Click a Movie For More Information</h2>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className= "movieBox" key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} 
                                 alt={movie.title}
                                 width= {350}
                                 height= {400}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;