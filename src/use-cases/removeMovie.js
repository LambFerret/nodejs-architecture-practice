const makeMovie = require('../movies')

exports.makeRemoveMovie = ({ movieDB }) => {
    return async function removeMovie({ title = {} }) {
        if (!title) {
            throw new Error("Must fill title")
        }

        const movieToDelete = await movieDB.findByTitle({ title })
        if (!movieToDelete) {
            return deleteNothing()
        }
        if (await hasR(movieToDelete)) {
            return deleteNothing()
        }
        if (!movieToDelete) {
            return deleteNothing()
        }

    }
}