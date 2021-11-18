exports.makeGetmovie = ({listMovie})=> {
    return async function getMovie(httpRequest){
        const headers = {
            'Content-Type':'application/json'
        }
        try {
            const postMovies = await listMovie({
                title : httpRequest.params.title
            })
            return {
                headers,
                StatusCode:200,
                body: postMovies
            }
        } catch (e){
            console.error(e);
            return {
                headers,
                StatusCode:400,
                body:{
                    error:e.message
                }
            }
        }
    }
}