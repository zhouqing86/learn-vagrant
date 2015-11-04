docker run -d -i -v /vagrant/images/v7_nginx/server.conf:/etc/nginx/conf.d/default.conf:ro -v /vagrant/images/v7_nginx/www:/home/node/www:ro -p 8080:80 nginx
http://192.168.33.80:8080/
