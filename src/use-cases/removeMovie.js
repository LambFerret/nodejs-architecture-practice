const {createMovie} = require('../movies')

exports.makeRemoveMovie = ({ movieDB }) => {
    return async function removeMovie({ title = {} }) {
        if (!title) {
            throw new Error("Must fill title")
        }
        const temp =await movieDB.findByTitle( title )
        const movieToDelete = temp[0] 
        if (!movieToDelete) {
            return deleteNothing()
        }
        return softDelete(movieToDelete)

    }
    function deleteNothing() {
        return {
            deletedCount:0,
            softDelete: false,
            message: 'Movie not found. abort delete'
        }
    }
    async function softDelete(movieInfo) {
        const toDelete = createMovie({...movieInfo, lastupdated : null})
        toDelete.deleted()
        console.log(toDelete);
        await movieDB.update({
            title:toDelete.getTitle(),
            lastupdated:toDelete.getLastupdated(),
            isDeleted:toDelete.getisDeleted(),
        })
        return {
            deletedCount:1,
            softDelete: true,
            message: 'Movie deleted but not permanently'
        }
    }
    async function hardDelete(movieInfo){
        const toDelete = movieInfo.title
        await movieDB.delete({
            title:toDelete
        })
        return {
            deletedCount:1,
            softDelete: false,
            message: 'Movie deleted permanently'
        }
    }
}