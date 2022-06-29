FROM centos:latest

USER root

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
&& echo 'Asia/Shanghai' >/etc/timezone \
&& yum -y update \
&& yum -y groupinstall development \
&& yum -y install epel-release \
&& yum -y install crontabs \
&& yum -y install python36 \
&& if [[ ! -e /usr/bin/pip ]]; then ln -s pip3 /usr/bin/pip ; fi \
&& if [[ ! -e /usr/bin/python ]]; then ln -sf /usr/bin/python3 /usr/bin/python; fi \
&& pip install selenium \
&& pip install requests \
&& pip install lxml \
&& mkdir repo \
&& git clone https://github.com/chiupam/selenium.git /repo \
&& rm -rf /repo/alpine \
&& mv -f /repo/centos/* /repo \
&& cp /repo/chromedriver /usr/bin \
&& chmod +x /usr/bin/chromedriver \
&& yum -y localinstall /repo/google-chrome.rpm \
&& crond

WORKDIR /data

CMD /bin/bash
