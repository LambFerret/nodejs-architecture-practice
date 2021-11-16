exports.buildCreateMovie = ({ makeSource, makeNest }) => {
    return function CreateMovie({
        title,
        year,
        direactors,
        num_mfilx_comments,
        awards,   // nominations, wins
        source,
        lastupdated = Date.now(),
        isDeleted = false,

    } = {}) {
        if (!title) {
            throw new Error("title must be filled")
        }
        if (!year) {
            throw new Error("year must be filled")
        }
        if (!direactors) {
            throw new Error("direactors must be filled")
        }
        if (!source) {
            throw new Error('Comment must have a source.')
        }
        const NestedAwards = makeAwards(awards)
        const validSource = makeSource(source)
        return Object.freeze({
            getTitle: () => title,
            getYear: () => year,
            getDireactors: () => direactors,
            getCommentsNum: () => num_mfilx_comments,
            getAwards: () => NestedAwards,
            getSource: () => validSource,
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


