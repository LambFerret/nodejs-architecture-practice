const { addMovie, listMovie, updateMovie } = require("../use-cases") //removeMovie
const { makeGetmovie } = require("./get-movie")
const { notFound } = require("./not-found")
const { makePatchMovie } = require("./patch-movie")
const { makePostMovie } = require("./post-movie")
// const { makeDeleteMovie } = require("./post-movie")


const patchMovie = makePatchMovie({ updateMovie })
const postMovie = makePostMovie({ addMovie })
const getMovie = makeGetmovie({ listMovie })
// const deleteMovie = makeDeleteMovie({ removeMovie })

const movieController = Object.freeze({
    getMovie,
    postMovie,
    patchMovie,
    // deleteMovie,
    notFound,
})

module.exports = { movieController, getMovie, postMovie, updateMovie, notFound } //deleteMovie
