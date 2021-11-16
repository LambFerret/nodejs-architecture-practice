const { makeMovieDB } = require("../dataAccess/DB");
const { makeCreateMovie } = require("./addMovie");
const { makeListMovie } = require("./listMovie");

const movieDB = makeMovieDB()

const addMovie = makeCreateMovie({ makeMovieDB })
const showMovie = makeListMovie({ movieDB })


const movieService = Object.freeze({
    showMovie,
    addMovie,
})

module.exports = {movieService, showMovie, addMovie}
