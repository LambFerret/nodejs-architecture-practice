exports.makeDeleteMovie = ({removeMovie})=>{
    return async function deleteMovie(httpRequest){
        const headers = {
            'Content-Type':'application/json'
        }
        try {
            const deleted = await removeMovie({title:httpRequest.params.title})
            return {
                headers,
                StatusCode:deleted.deletedCount ===0? 404: 200,
                body: deleted
            }
        } catch (e) {
            console.log(e);
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