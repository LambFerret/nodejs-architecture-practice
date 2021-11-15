exports.makeHandleModeration = () => {
    return async function handleModeration ({movie}){
        const shouldModerate = await isQuestionable({
            ip:movie.getSource().getIP(),
            browser: movie.getSource().getBrowser(),
            referrer: movie.getSource().getReferrer(),
            title:movie.getTitle(),
            year:movie.getYear()
        })
        const moderated = {...movie}
        if (shouldModerate){
            moderated.deleted()
        } else{
            moderated.notDeleted()
        }
        function isQuestionable(){return true}
    }
}