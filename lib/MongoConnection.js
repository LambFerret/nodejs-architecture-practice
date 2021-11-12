const MongoDB = require("mongodb").MongoClient

class Connection {
    static async connect() {
        if (this.db) {
            return this.db
        }

        const client = await MongoDB.connect(this.url, this.options)
        this.db = client.db(this.name)
        return this.db
    }
}
Connection.db = null;
Connection.name = "test";
Connection.uri = "mongodb+srv://testUser:testuser1234!@#$@cluster0.nozuy.mongodb.net/test0?retryWrites=true&w=majority";
Connection.options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

exports = Connection;

