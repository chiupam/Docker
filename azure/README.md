# Azure 更换 IP 

1、首先部署容器，如果没有镜像的会直接拉取。

```shell
docker run -dit --name azure chiupam/azure:latest
```

2、然后执行部署脚本输入个人信息，根据提示进行操作。

```shell
docker exec -it azure sh deploy.sh
```

3、等待25秒后程序自动启动

## 使用方法

直接在机器人内发送命令即可，监控493错误自动切换ip。

## 命令

```text
az ==>  查看机器人是否在线
/azip ==> 查看当前 Azure 的 IP 地址
/ghip ==> 重拔 Azure 以更换 IP 地址
```

## 重点

```text
1、禁止在需要更换 IP 的 Azure 上部署！！！
2、禁止在需要更换 IP 的 Azure 上部署！！！
3、禁止在需要更换 IP 的 Azure 上部署！！！
```
