exports.makeGetmovie = ({showMovie})=> {
    return async function getMovies(httpRequest){
        const headers = {
            'Content-Type':'application/json'
        }
        try {
            const postMovies = await showMovie({
                postID : httpRequest.query.postID
            })
            return {
                headers,
                statusCode:200,
                body: postMovies
            }
        } catch (e){
            console.error(e);
            return {
                headers,
                statusCode:400,
                body:{
                    error:e.message
                }
            }
        }
    }
}