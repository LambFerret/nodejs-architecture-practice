const MongoConnection = require("./MongoConnection")

exports.makeMovieDB = () => {
    init()
    return Object.freeze({
        insert,
        findAll,
        findByTitle,
        remove,
        update,
    })
    async function init() {
        const mdb = await MongoConnection.connect()
        const result = mdb.collection("movies")
        return result
    }


    async function insert({ ...movieInfo }) {
        const mdb = await init()
        const result = await mdb.insertOne({ ...movieInfo })
        return { ...result }
    }

    async function findAll() {
        const mdb = await init()
        const value = mdb.find()
        return (await value.toArray())
    }

    async function findByTitle(_title) {
        const mdb = await init()
        if (_title === undefined) {
            return mdb.find().toArray()
        }
        const found =await mdb.find({ "title": _title }).toArray()
        if (found.length === 0) {
            return null
        }
        // const{title:title, ...rest} = found[0]
        return found
    }

    async function remove({ ...movieInfo }) {
        const mdb = await init()
        const result = mdb.insertOne({ ...movieInfo })
        const { ...insertInfo } = result.ops[0]
        return { ...insertInfo }
    }

    async function update(title, { ...movieInfo }) {
        const mdb = await init()
        const result = await mdb.updateOne({ title }, { $set: { ...movieInfo } })
        return result.modifiedCount > 0 ? {...movieInfo} : null
    }
}