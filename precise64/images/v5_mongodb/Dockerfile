FROM ubuntu:latest
MAINTAINER wendll "27952278@qq.com"
#RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com.com:80 --recv 7F0CEB10
#RUN echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/10gen.list
#RUN apt-get update && apt-get install -y mongodb-org
RUN apt-get update
RUN apt-get install -y mongodb
EXPOSE 27017
RUN mkdir -p /data/db
ENTRYPOINT ["/usr/bin/mongod"]
