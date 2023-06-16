const movieService = require('./movieservice');

const getMovies = (done) => {
  movieService.getMovies((err, result) => {
    if (err) return done(err)
    done(null, result);
  });
}

const getMovieById = (movieId, done) => {
  movieService.getMovieById(movieId, (err, result) => {
    if (err) done(err)
    done(null, result);
  });
}

const saveMovieDetails = (movieDetails, done) => {
  movieService.saveMovieDetails(movieDetails, (err, result) => {
    if (err) return done(err);
    done(null, result);
  });
}

const updateMovieDetails = (movieId, movieDetails, done) => {
  movieService.updateMovieDetails(movieId, movieDetails, (err, result) => {
    if (err) return done(err);
    done(null, result);
  });
}

const deleteMovieById = (movieId, done) => {
  movieService.deleteMovieById(movieId, (err, result) => {
    if (err) return done(err);
    done(null, result);
  });
}

module.exports = {
  getMovies, getMovieById, saveMovieDetails, updateMovieDetails, deleteMovieById
}
