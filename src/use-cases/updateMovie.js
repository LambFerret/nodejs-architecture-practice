const {createMovie} = require('../movies')
exports.makeUpdateMovie = ({ movieDB }) => {
    return async function updateMovie({ title, ...changes } = {}) {
        if (!title) {
            throw new Error("insert title properly.")
        }
        const temp = await movieDB.findByTitle( title )
        const existing = temp[0]
        if (!existing) {
            throw new RangeError("Movie not found.")
        }
        const MovieInfo = createMovie({ ...existing, ...changes, lastupdated: null })
        const awardNest = MovieInfo.getAwards()
        const movieSource = MovieInfo.getSource()
        const updated = await movieDB.update({
            title: MovieInfo.getTitle(),
            year: MovieInfo.getYear(),
            directors: MovieInfo.getDirectors(),
            num_mflix_comments: MovieInfo.getCommentsNum(),
            awards: {
                wins: awardNest.getWins(),
                nominations: awardNest.getNominations(),
                text: awardNest.getText(),
            },
            source: {
                ip: movieSource.getIP(),
                browser: movieSource.getBrowser(),
                referrer: movieSource.getReferrer(),
            },
            lastupdated: MovieInfo.getLastupdated(),
            isDeleted: MovieInfo.getisDeleted(),
        })
        return { ...existing, ...updated }
    }
}