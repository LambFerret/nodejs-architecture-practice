const {addMovie, updateMovie, showMovie, deleteMovie} = require("../use-cases")
const { makeGetmovie } = require("./get-movie")
const { makePostMovie } = require("./post-movie")


const postMovie = makePostMovie({addMovie})
const getMovie = makeGetmovie({showMovie})

const movieController = Object.freeze({
    getMovie,
    postMovie,
})

module.exports = {movieController, getMovie, postMovie}
