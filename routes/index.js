const express = require('express');
const async   = require('async');
const mongo   = require('mongodb').MongoClient;
require('dotenv').config();

const app     = express();
const port    = process.env.port;
const user = process.env.user;
const pass = process.env.pass;
const DB_port = process.env.DB_port;
const db = process.env.db;
const table = process.env.table;
const url = process.env.url;


app.get('/table', (req, res) =>{
    getTableContent(req,res);
});

app.get('/quoteDetails', (req, res) =>{
    searchQuote(req,res);
});



app.get('/search', (req, res)=>{
   searchQuote(req, res);
});



function getTableContent(req, res) {
    async.parallel({
        query: function(callback) {
            queryMongo(req, callback);
        }
        }, function (err, results){
            if(!err) {
                res.json({express: results});
            }else{
                res.json({express: err});
            }
        }
    )
}



function searchQuote(req, res) {
    async.parallel({
            query: function(callback) {
                searchMongo(req, callback);
            }
        }, function (err, results){
            if(!err) {
                res.json({express: results});
            }else{
                res.json({express: err});
            }
        }
    )
}

function queryMongo(req, callback) {
    mongo.connect(`mongodb://${user}:${pass}@${url}:${DB_port}/${db}`, (err, db) =>{
            if (err){
                throw err;
            } else {
                db.collection(table, (err, collection) => {
                    if(collection){
                    collection.find().toArray((err, items) => {
                        if (err) {
                            throw err;
                            console.log("error");
                        } else {
                            callback(null, items);
                        }
                    });
                }else{
                        callback(null,{error:'response came empty'})
                    }

                })
            }
    });

}

function searchMongo(req, callback) {
    let number = req.query.quoteNumber;
    console.log(number);
    mongo.connect(`mongodb://${user}:${pass}@${url}:${DB_port}/${db}`, (err, db) =>{
        if (err){
            throw err;
        } else {
            db.collection('quotes', (err, collection) =>{
                collection.find({quoteNumber: req.query.quoteNumber}).toArray((err, items) => {
                    if (err){
                        throw err;
                    } else{
                        callback(null, items);
                    }
                });
            })
        }
    });
}


app.listen(port, () => console.log(`Listening on port ${port}`));