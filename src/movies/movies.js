exports.buildCreateMovie = ({ md5, makeSource }) => {
    return function CreateMovie({
        _id,
        plot,
        genres,
        runtime,
        cast,
        num_mfilx_comments,
        title,
        countries,
        released,
        direactors,
        rated,
        awards,   // nominations, text
        poster,
        languages,
        lastupdated = Date.now(),
        year,
        isDeleted = false,

    } = {}) {
        if (!title) {
            throw new Error("title must be filled")
        }
        if (!year) {
            throw new Error("year must be filled")
        }

        const validSource = makeSource(source)
        const deletedText = `It's private by request of copyright holder`
        makeHash = () => {
            return md5(
                `${title} + ${year}`
            )
        }
        return Object.freeze({
            getID: () => _id || (_id = makeHash()),
            getSource: ()=> validSource,
            getPlot: () => plot,
            getGenres: () => genres,
            getRuntime: () => runtime,
            getCast: () => cast,
            getCommentsNum: () => num_mfilx_comments,
            getTitle: () => title,
            getCountries: () => countries,
            getReleased: () => released,
            getDireactors: () => direactors,
            getRated: () => rated,
            getAwards: () => awards,
            getPoster: () => poster,
            getLanguages: () => languages,
            getLastupdated: () => lastupdated,
            getisDeleted: () => isDeleted,
            deleted: () => {
                isDeleted = true
            },
            notDeleted: () => {
                isDeleted = false
            }
        })

    }
}
