const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//GOAL is to be passed the movie id from the client on MovieList page, 
// match the movie id to the genre id from the movies_genre table
// that will send the genres.name to reducer dispatch within axios call in Movie Details
router.get('/', (req, res) => {
  // Add query to get all genres
  const query= 
              `SELECT 
                  genres.name as genre_title,
                  genres.id as genre_id,
                  movies.id as movie_id
              FROM "movies_genres"
                  JOIN "movies" ON "movies".id = "movies_genres".movie_id
                  JOIN "genres" ON "genres".id = "movies_genres".genre_id;`
        pool.query(query)
        .then( result => {
         res.send(result.rows);
      })
        .catch(err => {
          console.log('ERROR: Get all movies', err);
          res.sendStatus(500)
      })
              
});

module.exports = router;
