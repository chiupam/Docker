## docker run

```shell
docker run -dit \
  --name offical \
  --restart always \
  --hostname official \
  -p 9000:80 \
  chiupam/official:latest
```

## docker-compose 

```shell
cat > ./docker-compose.yml << EOF
version: "2.0"
services:
  official:
    image: chiupam/official:latest
    container_name: official
    restart: always
    hostname: official
    ports:
      - 9000:80
EOF
docker-compose up -d
```