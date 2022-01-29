import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail.jsx'
import MovieListHeader from '../MovieListHeader/MovieListHeader.jsx'
function App() {
  return (
    <div className="App">
     
      
      <Router>        
        <Route path="/" exact>
          <MovieListHeader />
          <MovieList />
        </Route>
        <Route path="/details" exact>
            <MovieDetail />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
