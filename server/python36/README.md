<h1 align="center">
  Serverless Cloud Function
  <br>
  Author: chiupam
</h1>

# 镜像包含
- [x] python 3.6
- [x] pip3

## 使用 Python 3.6 开发

```shell
docker pull chiupam/serverless:3.6.1
docker run -dit --name serverless -v $PWD:/serverless chiupam/serverless:3.6.1
docker exec -it serverless bash
wget https://raw.githubusercontent.com/chiupam/Docker/main/server/python36/get_packages.sh
```

## 打包环境方法

进入 `/serverless` 目录执行脚本即可打包环境。

```shell
cd /serverless
bash get_packages.sh
```
