exports.notFound = async () =>{
    return {
        headers:{
            'Content-Type':'application/json'
        },
        body:{error:'404 Not Found.'},
        statusCode:404,
    }
}