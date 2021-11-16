exports.makeListMovie = ({ movieDB }) => {
    return async function listMovies (){
        const movies = await movieDB.findAll()
        return movies
    }
}