exports.makePostMovie = ({ addMovie }) => {
    return async function postMovie(httpRequest) {
        try {

            const { source = {}, ...movieInfo } = httpRequest.body
            source.ip = httpRequest.ip
            source.browser = httpRequest.headers['User-Agent']
            if (httpRequest.headers['Referer']) {
                source.referrer = httpRequest.headers['Referer']
            }
            const posted = await addMovie({
                ...movieInfo,
                source
            })
            console.log(posted);
            if(movieInfo.title != httpRequest.params.title){
                console.log(`body title is ${movieInfo.title}, but params title is ${httpRequest.params.title}`);
                throw new Error("req.params.title doesnt match with body.title")
            }
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                StatusCode: 201,
                body:  posted 
            }
        } catch (e) {
            console.log(e);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                StatusCode: 400,
                body: { error: e.message }
            }
        }
    }
}