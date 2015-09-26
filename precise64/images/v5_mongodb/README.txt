docker build -t wendll/ubuntu-mongodb:v1 ./
docker run --name test_mongo -p 27017:27017 -i -d wendll/ubuntu-mongodb:v1
docker run --name test_mongo -p 27017:27017 -i -t --entrypoint /bin/bash wendll/ubuntu-mongodb:v1
