exports.makeListMovie = ({ movieDB }) => {
    return async function listMovie({title}){
        const movies = await movieDB.findByTitle(title)

        return movies
    }
}