const { createMovie } = require('../movies')
exports.makeCreateMovie = ({ movieDB, handleModeration }) => {
    return async function addMovie(MovieInfo) {
        const movie = createMovie(MovieInfo)
        const exists = await movieDB.findByID({ ID: movie.getID() })
        if (exists) {
            return exists
        }
        const moderated = await handleModeration({ movie })
        const movieSource = moderated.getSource()
        return movieDB.insert({
            _id : moderated.getID,
            source:{
                ip:movieSource.getIP(),
                browser:movieSource.getBrowser(),
                referrer:movieSource.getReferrer(),
            },
            plot: moderated.getPlot(),
            genres: moderated.getGenres(),
            runtime: moderated.getRuntime(),
            cast: moderated.getCast(),
            num_mfilx_comments: moderated.getCommentsNum(),
            title: moderated.getTitle(),
            countries: moderated.getCountries(),
            released: moderated.getReleased(),
            direactors: moderated.getDireactors(),
            rated: moderated.getRated(),
            awards: moderated.getAwards(),
            poster: moderated.getPoster(),
            languages: moderated.getLanguages(),
            lastupdated: moderated.getLastupdated(),
            isDeleted: moderated.getisDeleted(),

        })
    }
}