FROM python:3.6.1

USER root

WORKDIR /serverless

RUN apt-get update \
&& apt-get -y install zip \
&& cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
&& pip install -U pip

CMD /bin/bash
