FROM chiupam/azure:base

WORKDIR /app

COPY ./azure/*.sh /app/

RUN set -ex \
&& apk update -f \
&& apk upgrade \
&& apk add --no-cache tzdata jq npm \
&& rm -rf /var/cache/apk/* \
&& ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
&& echo "Asia/Shanghai" > /etc/timezone \
&& npm install -g pm2@latest \
&& pip3 install Telethon==1.24.0 \
&& mv /app/entrypoint.sh /usr/local/bin \
&& chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
