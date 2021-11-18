const { makeMovieDB } = require("../dataAccess/DB");
const { makeAddMovie } = require("./addMovie");
const { makeListMovie } = require("./listMovie");
const { makeUpdateMovie } = require("./updateMovie");
// const { makeRemoveMovie } = require("./removeMovie");


const movieDB = makeMovieDB()
const addMovie = makeAddMovie({ movieDB })
const showMovie = makeListMovie({ movieDB })
const updateMovie = makeUpdateMovie({ movieDB })
// const removeMovie = makeRemoveMovie({ movieDB })
const movieService = Object.freeze({
    showMovie,
    addMovie,
    updateMovie,
    // removeMovie,
})

module.exports = { movieService, showMovie, addMovie, updateMovie } //, removeMovie
