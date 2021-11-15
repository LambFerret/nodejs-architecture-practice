const {addMovie, updateMovie, showMovie, deleteMovie} = require("../use-cases/index")
const { makeGetmovie } = require("./get-movie")
const { makePostMovie } = require("./post-movie")


exports.postMovie = makePostMovie({addMovie})
exports.getMovie = makeGetmovie({showMovie})

// exports.commentController = Object.freeze({
//     getMovie,
// })
