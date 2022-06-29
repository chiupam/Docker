# 某平台加密算法

## 部署命令

```shell
docker run -dit \
  --name encrypt \
  --retart always \
  --hostname encrypt \
  -p 9000:9000 \
  chiupam/encrypt:latest
```

## 接口测试

```shell
curl http://ip:9000/?passwoed=
```