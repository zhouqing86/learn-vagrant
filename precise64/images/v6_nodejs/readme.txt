docker build -t wendll/ubuntu-nodejs:v1 ./
docker run -d --name test_nodejs -p 8888:8080 wendll/ubuntu-nodejs:v1

mongo 172.17.42.1
use nginx-node-mongo;
db.createCollection('msg_list');
db.msg_list.save({time: 1443268449598, data: "nishishuia"});
db.msg_list.find();

curl http://127.0.0.1:8888/node-web-api/msg/find
