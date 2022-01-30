import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({type: 'FETCH_GENRE_INFO'});
    }, []);

    //function that runs on click of movie box, that brings client to details page
    const handleSelectedMovie = (movie) => {
        //send the selected movie to movie object in redux (selectedMovie Redux function)
        dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie })
        //once the movie is sent to the reducer, client is brought to details page
        history.push(`/details`);
    }

    return (
        <main>
            <h2> Click a Movie For More Information</h2>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className= "movieBox" 
                            key={movie.id}
                            onClick={() => handleSelectedMovie(movie)}
                            >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} 
                                 alt={movie.title}
                                 width={350}
                                 height={400}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;