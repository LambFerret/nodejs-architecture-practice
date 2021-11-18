const { makeMovieDB } = require("../dataAccess/DB");
const { makeAddMovie } = require("./addMovie");
const { makeListMovie } = require("./listMovie");
const { makeUpdateMovie } = require("./updateMovie");
// const { makeRemoveMovie } = require("./removeMovie");


const movieDB = makeMovieDB()
const addMovie = makeAddMovie({ movieDB })
const listMovie = makeListMovie({ movieDB })
const updateMovie = makeUpdateMovie({ movieDB })
// const removeMovie = makeRemoveMovie({ movieDB })
const movieService = Object.freeze({
    listMovie,
    addMovie,
    updateMovie,
    // removeMovie,
})

module.exports = { movieService, listMovie, addMovie, updateMovie } //, removeMovie
