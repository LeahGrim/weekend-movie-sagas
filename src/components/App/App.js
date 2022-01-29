import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail.jsx'

function App() {
  return (
    <div className="App">
      <h1><strong>
        Looking for a Movie? Discover What Tickles Your Fancy
      </strong></h1>
      
      <Router>        
        <Route path="/" exact>
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
