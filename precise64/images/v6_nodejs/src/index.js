var express = require("express");
var bodyParser = require("body-parser");
var mongo = require("mongodb");
var PORT = 8080;
var db = new mongo.Db('nginx-node-mongo', new mongo.Server('172.17.42.1',27017));
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.raw());
app.get('/node-web-api/msg/find',function(req,res){
  console.log('get:'+req.originalUrl);
  db.collection('msg_list').find().toArray(function(err,docs){
    if(err){
      res.send('-1');
    } else {
      var str = docs.length + '<br/>';
      for(var i=0; i<docs.length; ++i){
        str += docs[i].time + '.' + docs[i].data + '<br/>';
      }
      res.send(str);
    }
  });
});

app.post('/node-web-api/msg/add',function(req,res){
  console.log('post:'+req.originalUrl);
  if(!req.body || !req.body.item){
    res.send('2');
    return;
  }
  db.collection('msg_list').save({time: new Date().getTime(), data: req.body.item},function(err,result){
    if(err) {
      res.send('1');
    } else {
      res.send('0');
    }
  });
});

db.open(function(err,db){
  if(!err){
    console.log('mongodb-server connected!');
    app.listen(PORT);
    console.log('node-web-server started! port:'+PORT);
  }
});
