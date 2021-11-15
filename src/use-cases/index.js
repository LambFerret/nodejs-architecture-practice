const { makeCreateMovie } = require("./addMovie");

const handleModeration = makeHandleModeration({
    isQuestionable,
    initateReview: async () => { }
})
exports.addMovie = makeCreateMovie({ movieDB, handleModeration })

exports.movieService = Object.freeze({
    addMovie,
})
