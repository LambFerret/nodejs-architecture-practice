exports.makePatchMovie = ({ updateMovie }) => {
    return async function patchMovie(httpRequest) {
        try {
            const { source = {}, ...movieInfo } = httpRequest.body
            source.ip = httpRequest.ip
            source.browser = httpRequest.headers['User-Agent']
            if (httpRequest.headers['Referer']) {
                source.referrer = httpRequest.headers['Referer']
            }
            const toUpdate = {
                ...movieInfo,
                source,
                title: httpRequest.params.title
            }
            const patched = await updateMovie(toUpdate)
            return {
                headers: {
                    'Content-Type': 'application/json',
                    'Last=Modified': new Date(patched.lastupdated).toUTCString()
                },
                statusCode: 200,
                body: { patched }
            }
        } catch (e) {
            console.log(e);
            if (e.name === 'RangeError') {
                return {
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  statusCode: 404,
                  body: {
                    error: e.message
                  }
                }
              }
              return {
                headers: {
                  'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                  error: e.message
                }
              }
            }
          }
        }
        