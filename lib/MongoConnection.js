const MongoDB = require("mongodb").MongoClient

class Connection {
    static async connect() {
        if (this.db) {
            return this.db
        }
        console.log(`this 1`);

        const client = await MongoDB.connect(this.url, this.options,(err, result)=>{
            if (err) console.log(`failed to connect mongoDB`);
            else {console.log(`mongo connected`);}
            console.log(`this 2`);
        })
        this.db = client.db("sample_mflix")
        return this.db
    }
}
Connection.db = null;
Connection.uri = "mongodb+srv://testUser:testuser1234@cluster0.nozuy.mongodb.net/sample_mflix?retryWrites=true&w=majority";
Connection.options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

module.exports = Connection;

