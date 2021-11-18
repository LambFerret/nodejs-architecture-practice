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
        console.log(`movieSource is ${movieSource}`);
        return movieDB.insert({
            title: movie.getTitle(),
            year: movie.getYear(),
            direactors: movie.getDireactors(),
            num_mfilx_comments: movie.getCommentsNum(),
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
            lastupdated: movie.getLastupdated(),
            isDeleted: movie.getisDeleted(),
        })
    }
}