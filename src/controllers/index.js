const {addMovie, updateMovie, showMovie, deleteMovie} = require("../use-cases/index")
const { makePostMovie } = require("./post-movie")


exports.postMovie = makePostMovie({addMovie})

exports.commentController = Object.freeze({
    postMovie,
})
