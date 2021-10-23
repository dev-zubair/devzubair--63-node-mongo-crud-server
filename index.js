const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;              /* process.env.PORT || 5000 */


const uri = "mongodb+srv://mydbuser1:RVT7I5XOAGmkXyyt@cluster0.m3bow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("FoodPanda");
        const usersCollection = database.collection("users");
        // create a document to insert
        const doc = {
            name: "Rubel",
            address: "Sreemangal",
            phone: "01619252546"
        }
        const result = await usersCollection.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);





/* 
// Callback function 
const uri = "mongodb+srv://mydbuser1:RVT7I5XOAGmkXyyt@cluster0.m3bow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("FoodPanda").collection("users");
    // perform actions on the collection object
    console.log("Hitting the database")

    const user = { name: 'Parul Ahmed', address: 'Sreemangal', phone: '01715009322' }
    collection.insertOne(user)
    console.log('hitting success')
    // client.close();
});

 */


app.get('/', (req, res) => {
    res.send('Welcome to my Server. Wow! Running my CRUD Server and thank you for visiting')
})

app.listen(port, () => {
    console.log('This server is running from port no', port);
})



/*
Mongodb login

user : mydbuser1
pass: RVT7I5XOAGmkXyyt
*/


