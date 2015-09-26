FROM ubuntu:latest
MAINTAINER wendll "27952278@qq.com"
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y npm
RUN curl -sL https://deb.nodesource.com/setup | sudo bash -
RUN apt-get update
RUN apt-get install -y nodejs
COPY ./src /src
RUN cd /src; npm install;
EXPOSE 8080
CMD ["nodejs", "src/index.js"]
