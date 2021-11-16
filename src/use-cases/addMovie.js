const { createMovie } = require('../movies')
exports.makeCreateMovie = ({ movieDB }) => {
    return async function addMovie(MovieInfo) {
        const exists = await movieDB.findByTitle({ title: movie.getTitle() })
        if (exists) {
            return exists
        }
        const awardNest = MovieInfo.getAwards()
        const movieSource = MovieInfo.getSource()
        return movieDB.insert({
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
    }
}