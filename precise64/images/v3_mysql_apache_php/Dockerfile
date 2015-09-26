FROM centos
MAINTAINER wendll "27952278@qq.com"
WORKDIR /root/
RUN yum -y install wget
RUN wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
RUN rpm -ivh /root/mysql-community-release-el7-5.noarch.rpm
RUN yum -y install mysql-server
RUN mysql_install_db --user=mysql
ENV MYSQL_USER test
ENV MYSQL_PASS mypassword
ENV LC_ALL en_US.UTF-8
ADD build_table.sh /root/build_table.sh
RUN chmod u+x /root/build_table.sh
RUN /root/build_table.sh
EXPOSE 3306
ADD run.sh /root/run.sh
RUN chmod u+x /root/run.sh
CMD /root/run.sh
