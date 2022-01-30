import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './MovieDetail.css';
import CabinIcon from '@mui/icons-material/Cabin';
import { useHistory } from 'react-router-dom';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import axios from 'axios';
function MovieDetail(){
    //using history to push the user back to the homepage
    //chose this method over nav link for styling purposes
    const history = useHistory();
    //set a variable for the movie that the client selected on homepage 
    //the selected movie is stored in the selected movie reducer that the client clicked on 
    const selectedMovie = useSelector((store) => store.selectedMovie);
    const genres = useSelector(store=> store.genres);
    //genre is our genre store in index.js but our selectedMovie.id range starts at 1, 
    // in order to negate the array being off by 1, we specify that the selectedMovie.id
    //range should be set at 0
    const selectedGenre = genres[selectedMovie.id-1];
    console.log('selected genre is, ', selectedGenre);
    console.log('selected movie is', selectedMovie)
    // console.log('selectedMovie is, ', selectedGenre.movie.title);
    const homePageDirection= () => {
        history.push('/')
    }

  
    return(
        <>

        <div className= "selectedMovieBox"> 
            <h1> {selectedMovie.title} </h1>
            <div className= "selectedMovieImage"> 
                <img src={selectedMovie.poster}
                     width={700}
                     height={650} 
                    />   
                    </div> 
                    <div className="selectedMovieDescription"> 
                          <h2>
                          {selectedMovie.description} 
                          </h2>
                    </div>
                    <h2>  </h2>
        </div>
                  
          <footer>
          <div className= "cabin">
          <h2> Return To Search</h2>
          <div className= "cabinIcon"> 
                <CabinIcon sx={{ fontSize: 70 }}
                  onClick={()=> homePageDirection()}
          /> 
          </div>
          </div>
          </footer>
        </>
    )
}
export default MovieDetail;