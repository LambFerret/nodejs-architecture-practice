const { createMovie } = require('../movies')
exports.makeAddMovie = ({ movieDB }) => {
    return async function addMovie(MovieInfo) {
        const movie = createMovie(MovieInfo)
        const exists = await movieDB.findByTitle(movie.getTitle())
        if (exists) {
            return exists
        }
        const awardNest = movie.getAwards()
        const movieSource = movie.getSource()
        return movieDB.insert({
            title: movie.getTitle(),
            year: movie.getYear(),
            direactors: movie.getDireactors(),
            num_mfilx_comments: movie.getCommentsNum(),
            awards:{
                wins:awardNest.getWins(),
                nominations:awardNest.getNominations(),
                text:awardNest.getText(),
            },
            source:{
                ip:movieSource.getIP(),
                browser:movieSource.getBrowser(),
                referrer:movieSource.getReferrer(),
            },
            lastupdated: movie.getLastupdated(),
            isDeleted: movie.getisDeleted(),
        })
    }
}