FROM node:alpine

ENV PATH=/usr/local/bin:$PATH LANG=C.UTF-8

EXPOSE 9000

WORKDIR /app

ADD ./encrypt/*.sh /app/

RUN set -ex \
&& apk update -f \
&& apk upgrade \
&& apk add --no-cache tzdata wget npm \
&& rm -rf /var/cache/apk/* \
&& ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
&& echo "Asia/Shanghai" > /etc/timezone \
&& npm install -g pm2@latest \
&& mv /app/*.sh /usr/local/bin \
&& chmod +x /usr/local/bin/*.sh

ENTRYPOINT ["entrypoint.sh"]
