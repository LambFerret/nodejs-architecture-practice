exports.makeMovieDB = ({ makeDB }) => {
    return Object.freeze({
        // insert,
        findAll,
    })

    async function insert({ ...movieInfo }) {
        const db = await makeDB()
        const result = await db
            .collection("movies")
            .insertOne({ ...movieInfo })
        // const { ...insertInfo = result.ops[0] }
        return { ...insertInfo }
    }

    async function findAll() {
        const db = await makeDB()
        console.log(db);
        const result = await db.collection("movies")
        const value = await result.find()
        return (await value.toArray())
    }
}