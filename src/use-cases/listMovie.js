exports.makeListMovie = ({ movieDB }) => {
    return async function listMovies ({title}={}){
        const movies = await movieDB.findByTitle(title)
        return movies
    }
}