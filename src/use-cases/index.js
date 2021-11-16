const { makeMovieDB } = require("../dataAccess/DB");
const { makeCreateMovie } = require("./addMovie");
const { makeHandleModeration } = require("./handleModeration");
const { makeListMovies } = require("./listMovie");

const movieDB = makeMovieDB()

const handleModeration = makeHandleModeration()
// exports.addMovie = makeCreateMovie({ makeMovieDB, handleModeration })
exports.showMovie = makeListMovies({ movieDB })

// exports.movieService = Object.freeze({
//     showMovie,
// })
