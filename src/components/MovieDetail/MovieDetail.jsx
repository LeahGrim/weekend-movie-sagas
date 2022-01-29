import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './MovieDetail.css';

function MovieDetail(){
    //set a variable for the movie that the client selected on homepage 
    //the selected movie is stored in the selected movie reducer that the client clicked on 
    const selectedMovie = useSelector((store) => store.selectedMovie)
    
    useEffect(() => {
            
    });
    return(
        <>
        <div className= "selectedMovieBox"> 
            <h2> {selectedMovie.title} </h2>
            <div className= "selectedMovieImageDescription"> 
                <img src={selectedMovie.poster}
                     width={500}
                     height={600} 
                    />    
                <p> {selectedMovie.description} </p>
            </div>
        </div>

        </>
    )
}
export default MovieDetail;