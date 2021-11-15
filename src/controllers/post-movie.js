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
            return {
                headers: {
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(posted.modifiedOn).toUTCString()
                },
                StatusCode: 201,
                body: { posted }
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