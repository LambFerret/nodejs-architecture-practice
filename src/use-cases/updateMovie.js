const CreateMovie = require('../movies')
exports.makeUpdateMovie = ({ movieDB }) => {
    return async function updateMovie({title, ...changes}={}){
        if (!title){
            throw new Error("insert title properly.")
        }
        const existing = await movieDB.findByTitle({title})
        if (!existing){
            throw new RangeError("Movie not found.")
        }
        const MovieInfo = CreateMovie({...existing, ...changes, lastupdated:null})
        const updated = await movieDB.update({
            title: MovieInfo.getTitle(),
            year: MovieInfo.getYear(),
            direactors: MovieInfo.getDireactors(),
            num_mfilx_comments: MovieInfo.getCommentsNum(),
            awards:{
                ip:awardNest.getWins(),
                browser:awardNest.getNominations(),
                referrer:awardNest.getText(),
            },
            source:{
                ip:movieSource.getIP(),
                browser:movieSource.getBrowser(),
                referrer:movieSource.getReferrer(),
            },
            lastupdated: MovieInfo.getLastupdated(),
            isDeleted: MovieInfo.getisDeleted(),
        })
        return {...existing, ...updated}
    }
}