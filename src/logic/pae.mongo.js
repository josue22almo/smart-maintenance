import { MongoClient } from "mongodb";

const mongoUrl = "mongodb://pae-test:5ZaReL9V9qEVKIM0ct9WetSQd05RpqbRHR0OFpuvZ235r4gj8nu9r97Poayp9vlLnKfgTQaFwMFSMbvO93XWWA==@pae-test.documents.azure.com:10250/mean?ssl=true";
const collectionName = "testing";
const databaseName = "pae-test";

let client;
MongoClient.connect(mongoUrl, { useNewUrlParser: true }).then((cl) => {
  client = cl;
});

const fetchData = function(type, limit, callback) {
  // Get the documents collection
  const db = client.db(databaseName);
  const collection = db.collection(collectionName);
  // Find some documents
  collection.find({
    type
  }).limit(limit).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

const addDocuments = function(documents, callback) {
  // Get the documents collection
  const db = client.db(databaseName);
  const collection = db.collection(collectionName);
  // Insert documents
  collection.insertMany(docs, function(err, result) {
    assert.equal(err, null);
    assert.equal(docs.length, result.result.n);
    assert.equal(docs.length, result.ops.length);
    console.log("Inserted documents into the collection:", docs.length);
    callback(result);
  });
}

export {
  fetchData,
  addDocuments
}