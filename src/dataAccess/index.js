const MongoDB = require("mongodb").MongoClient
const {makeMovieDB} = require("./DB").makeMovieDB()
const uri = "mongodb+srv://testUser:testuser1234@cluster0.nozuy.mongodb.net/sample_mflix?retryWrites=true&w=majority";
const client = new MongoDB(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

exports.makeDB = async()=>{
    try {
        await client.db("sample_mflix")
        console.log(`client connected`);
        return client.connect()
    } catch (e) {
        console.log(e);
    } finally {
        await client.close()
    }
}

exports.movieDB = makeMovieDB({makeDB})

/*
class makeDB {
    static async connect() {
        if (this.db) {
            return this.db
        }
        try {
            const mdb = await MongoDB.connect(this.uri, this.options)
            console.log(`mongo connected`);
            this.db = mdb.db("sample_mflix")
            return this.db
        } catch (e) {
            console.log(e);
        }
        
    }
}
makeDB.db = null;
makeDB.uri = "mongodb+srv://testUser:testuser1234@cluster0.nozuy.mongodb.net/sample_mflix?retryWrites=true&w=majority";
makeDB.options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const mdb = new makeDB()
const movieDB = makeMovieDB({mdb})
console.log(movieDB);
module.exports =  movieDB;
*/
// extract-mongo-schema -d "mongodb+srv://testUser:testuser1234@cluster0.nozuy.mongodb.net/sample_mflix?retryWrites=true&w=majority" -c "movies" -o schema.json