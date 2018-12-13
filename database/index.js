var mongoClient = require('mongodb').MongoClient;
const env = require('../config/env');
const {ObjectId} = require('mongodb');
var db;

module.exports = {
  connectDB : function(cb){
    mongoClient.connect(env.DB_URL,{useNewUrlParser: true} , function(err, client){
      db = client.db(env.DB_NAME);
      console.log(env.DB_URL);
      cb(err);
    });
  },
  getDB : function(){
    return db;
  },
  getCollection : function(collectionName){
    return db.collection(collectionName);
  },

    toObjectID : function(stringID){
    return ObjectId(stringID);
  },

  closeDB : function(){
    db.close();
  }
};
