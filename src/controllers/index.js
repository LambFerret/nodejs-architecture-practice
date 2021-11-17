const { addMovie, showMovie, updateMovie } = require("../use-cases") //removeMovie
const { makeGetmovie } = require("./get-movie")
const { makePatchMovie } = require("./patch-movie")
const { makePostMovie } = require("./post-movie")
// const { makeDeleteMovie } = require("./post-movie")


const patchMovie = makePatchMovie({ updateMovie })
const postMovie = makePostMovie({ addMovie })
const getMovie = makeGetmovie({ showMovie })
// const deleteMovie = makeDeleteMovie({ removeMovie })

const movieController = Object.freeze({
    getMovie,
    postMovie,
    patchMovie,
    // deleteMovie,
})

module.exports = { movieController, getMovie, postMovie, updateMovie } //deleteMovie
