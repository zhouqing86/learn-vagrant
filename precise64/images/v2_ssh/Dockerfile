# Version: 1.0.1
FROM ubuntu:latest

MAINTAINER wendll "27952278@qq.com"

USER root

RUN apt-get install -y openssh-server

RUN mkdir -p /var/run/sshd

RUN mkdir -p /root/.ssh

RUN sed -ri 's/session    required       pam_launchd.so/#session    required       pam_launchd.so/g' /etc/pam.d/sshd

ADD authorized_keys /root/.ssh/authorized_keys

RUN echo "#!/bin/bash" > /root/run.sh

RUN echo "/usr/sbin/sshd -D" >> /root/run.sh

RUN chmod u+x /root/run.sh

EXPOSE 22

CMD ["/root/run.sh"]
