const MongoDB = require("mongodb").MongoClient
// const MongoDB = require("mongoose")
class Connection {
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
Connection.db = null;
Connection.uri = "mongodb+srv://testUser:testuser1234@cluster0.nozuy.mongodb.net/sample_mflix?retryWrites=true&w=majority";
Connection.options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

module.exports = Connection;

// extract-mongo-schema -d "mongodb+srv://testUser:testuser1234@cluster0.nozuy.mongodb.net/sample_mflix?retryWrites=true&w=majority" -c "movies" -o schema.json