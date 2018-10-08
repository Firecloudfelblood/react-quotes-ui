const express = require('express');
const async   = require('async');
const mongo   = require('mongodb').MongoClient;

const app     = express();
const port    = process.env.PORT || 3005;

const user = encodeURIComponent('quotes');
const pass = encodeURIComponent('2XVgHKLLAA2Q');


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
    mongo.connect(`mongodb://${user}:${pass}@uspgh-fsquotes1-d1.amer.thermo.com:27017/dev1_us_quotes`, (err, db) =>{
            if (err){
                throw err;
            } else {
                db.collection('quotes', (err, collection) =>{
                    collection.find().toArray((err, items) => {
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

function searchMongo(req, callback) {
    mongo.connect(`mongodb://${user}:${pass}@uspgh-fsquotes1-d1.amer.thermo.com:27017/dev1_us_quotes`, (err, db) =>{
        if (err){
            throw err;
        } else {
            db.collection('quotes', (err, collection) =>{
                collection.find({quoteNumber: req.quoteNumber}).toArray((err, items) => {
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