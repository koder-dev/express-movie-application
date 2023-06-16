const express = require('express');
const router = express.Router();
const movieController = require('./moviecontroller');

/**
 * API to get the details of all movies
 * EFFECTIVE URL: GET /api/v1/movies
 */
router.get("/", (req, res) => {
  try {
    movieController.getMovies((err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  } catch (err) {
    res.status(400).send({ message: 'Loading movies failed', reason: err });
  }
});
/**
 * API to get the details of specific movie
 * EFFECTIVE URL: GET /api/v1/movie/:movieId
 */
//
router.get("/:movieId", (req, res) => {
  try {
    const { movieId } = req.params
    movieController.getMovieById(movieId, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  } catch (err) {
    res.status(404).send({ message: 'Loading a movie failed', reason: err });
  }
});

/**
 * API to save new movie
 * EFFECTIVE URL: POST /api/v1/movies
 */
router.post("/", (req, res) => {
  try {
    const movieDetails = req.body;
    movieController.saveMovieDetails(movieDetails, (err, results) => {
     if (err) {
       res.status(400).send(err);
     } else {
       res.status(201).send(results);
     }
    });
  } catch (err) {
    res.status(400).send({ message: 'Saving a movie failed', reason: err });
  }
});

/**
 * API to edit movie detail
 * EFFECTIVE URL: PATCH /api/v1/movies/:movieId
 */
router.patch("/:movieId", (req, res) => {
  try {
    const { movieId } = req.params;
    const movieDetails = req.body;
    movieController.updateMovieDetails(movieId, movieDetails, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  } catch (err) {
    res.status(400).send({ message: 'Updating movie details failed', reason: err});
  }
});

/**
 * API to delete movie
 * EFFECTIVE URL: DELETE /api/v1/movies/:movieId
 */
router.delete("/:movieId", (req, res) => {
  try {
    const { movieId } = req.params;
    movieController.deleteMovieById(movieId, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  } catch (err) {
    res.status(400).send({ message: 'Deleting a movie failed', reason: err });
  }
});

module.exports = router;
