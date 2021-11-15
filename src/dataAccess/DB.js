exports.makeMovieDB = ({ makeDB }) => {
    return Object.freeze({
        insert,
    })

    async function insert({ ...movieInfo }) {
        const db = await makeDB()
        const result = await db
            .collection("movies")
            .insertOne({ ...movieInfo })
        const { ...insertInfo = result.ops[0] }
        return { ...insertInfo }
    }
}