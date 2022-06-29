FROM python:alpine

RUN set -x \
&& apk update -f \
&& apk upgrade \
&& apk add gcc musl-dev python3-dev libffi-dev openssl-dev cargo make \
&& pip3 install -U pip \
&& pip3 install azure-cli==2.34.0

