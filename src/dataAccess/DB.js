const MongoConnection = require("./MongoConnection")


exports.makeMovieDB = () => {
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
        const mdb = await MongoConnection.connect()
        const result = mdb.collection("movies")
        const value = result.find()
        return (await value.toArray())
    }
}