FROM alpine:latest

ENV PATH=/usr/local/bin:$PATH LANG=C.UTF-8

EXPOSE 80

WORKDIR /app/

COPY ./sign/* /app/

RUN set -ex \
&& apk update -f \
&& apk upgrade \
&& apk add openjdk8 busybox unzip \
&& ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
&& echo "Asia/Shanghai" > /etc/timezone \
&& rm -rf /var/cache/apk/* \
&& mv /app/*.sh /usr/local/bin \
&& chmod +x /usr/local/bin/*.sh

ENTRYPOINT ["entrypoint.sh"]
