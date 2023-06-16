const axios = require('axios');

const dbUrl = 'http://localhost:3000/movies';
const getMovies = (done) => {
  axios.get(dbUrl)
    .then((res) => done(null, res.data))
    .catch((err) => done({ message: 'Getting movies from JSON server failed', reason: err }));
}

const getMovieById = (movieId, done) => {
  axios.get(`${dbUrl}/${movieId}`)
    .then((res) => done(null, res.data))
    .catch((err) => done({ message: 'Getting a movie from JSON server failed', reason: err }));
}

const saveMovieDetails = (movieDetails, done) => {
  axios.post(dbUrl, movieDetails)
    .then((res) => done(null, res.data))
    .catch((err) => done({ message: 'Saving movie to JSON server failed', reason: err }));
}

const updateMovieDetails = (movieId, movieDetails, done) => {
  axios.put(`${dbUrl}/${movieId}`, movieDetails)
    .then((res) => done(null, res.data))
    .catch((err) => done({ message: 'Updating a movie from JSON server failed', reason: err }));
}

const deleteMovieById = (movieId, done) => {
  axios.delete(`${dbUrl}/${movieId}`)
    .then((res) => done(null, res.data))
    .catch((err) => done({ message: 'Deleting a movie from JSON server failed', reason: err }));
};

module.exports = {
  getMovies, getMovieById, saveMovieDetails, deleteMovieById, updateMovieDetails
}
