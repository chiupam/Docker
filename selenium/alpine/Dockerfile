FROM alpine:latest

USER root

RUN set -x \
&& echo "http://dl-4.alpinelinux.org/alpine/v3.4/main" >> /etc/apk/repositories \
&& apk update -f \
&& apk upgrade \
&& apk add --no-cache -U tzdata \
&& ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
&& echo "Asia/Shanghai" > /etc/timezone \
&& apk add --no-cache python3 python3-dev py3-pip chromium chromium-chromedriver py3-requests py3-lxml py3-selenium git \
&& apk add wqy-zenhei --update-cache --repository http://nl.alpinelinux.org/alpine/edge/testing --allow-untrusted \
&& python3 -m ensurepip \
&& rm -r /usr/lib/python*/ensurepip \
&& if [[ ! -e /usr/bin/pip ]]; then ln -s pip3 /usr/bin/pip ; fi \
&& if [[ ! -e /usr/bin/python ]]; then ln -sf /usr/bin/python3 /usr/bin/python; fi \
&& rm -rf /var/cache/apk/* \
&& rm -rf ~/.cache/pip \
&& mv /usr/lib/chromium/chromedriver /usr/bin \
&& mkdir repo \
&& git clone https://github.com/chiupam/selenium.git /repo \
&& rm -rf /repo/centos \
&& mv -f /repo/alpine/* /repo \
&& crond

WORKDIR /data

CMD /bin/sh
