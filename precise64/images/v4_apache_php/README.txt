 docker build -t wendll/centos-mysql:v1 ./
 docker run --name test_mysql -d -P wendll/centos-mysql:v1
 docker port 364acde2f046 3306

docker build -t wendll/centos-apache-php:v1 ./
docker run --name test_apache-php -d -P -e MYSQL_ADDR=172.17.42.1:32768 wendll/centos-apache-php:v1
docker port 1059acb15d96 80

curl http://127.0.0.1:32770/test.php
