exports.makeListMovies = ({ movieDB }) => {
    return async function listMovies (){
        const movies = await movieDB.findAll()
        return movies
        // if(!postID){
        //     throw new Error("must get post ID")
        // }
        // const movies = await movieDB.findByPostID({
        //     postID,
        //     omitReplies:false
        // })
        // const nestedMovies = nest(movies)
        // return nestedMovies
        // function nest (movies){
        //     if (movies.length === 0){
        //         return movies
        //     }
        //     return movies.reduce((nested, movies)=>{
        //         movies.replies = movies.filter(
        //             reply => reply.replyToID === movies.id
        //         )
        //         nest(movies.replies)
        //         if (movies.replyToID == null){
        //             nested.push(movies)
        //         }
        //         return nested
        //     }, [])
        // }
    }
}