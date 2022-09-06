### 该服务在ARM机器上无法运行，请自觉放弃部署

## docker

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

## sign
### URL
```text
http://<ip>:80/jd/sign
```
### REQUEST BODY
```text
body={...}&functionId=...
```
### RESPONSE BODY
```json
{
    "code": 200,
        "data": {
            "body": {},
            "client": "android",
            "clientVersion": "11.0.2",
            "convertUrl": "",
            "functionId": "",
            "sign": "",
            "st": "",
            "sv": "111",
            "uuid": "",
            "ep": "xxxxxx",
            "converUrlNew": "body..."
      }
}
```
## Command
### URL
```text
http://<ip>:80/jd/jKeyCommand
```
### REQUEST BODY
```text
key=12:/xxxxxx因为有你助力，温暖了四季
```
### RESPONSE BODY
```json
{
    "code": 200,
        "data": {
            "userName": "xxxxxx",
            "title": "帮我点一点，膨胀红包就差你的助力啦~",
            "jumpUrl": "https://wbbny.m.jd.com/XXXXXXXXXX"
      }
}
```
## demo.py

```python
# -*- coding: utf-8 -*-
import requests


def sign():
    url = "http://127.0.0.1:9000/jd/sign"  # 容器内运行请修改端口为 80
    data = {
        "functionId": "",  # 这里根据自身需要填写（不传入参数绝对报错）
        "body": {}  # 这里根据自身需要填写（不传入参数绝对报错）
    }
    response = requests.post(url, data=data).json()['data']['convertUrl']
    print(response)


def jKeyCommand():
    url = "http://127.0.0.1:9000/jd/jKeyCommand"  # 容器内运行请修改端口为 80
    data = {
        "key": ""  # 这里根据自身需要填写（不传入参数绝对报错）
    }
    response = requests.post(url, data=data).json()['data']['jumpUrl']
    print(response)


if __name__ == '__main__':
    sign()
    jKeyCommand()
```