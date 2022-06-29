# 简介
使用 alpine Linux 为基础镜像制作的自定义镜像，内置 python 3.9.5、pip3、selenium、requests、chrome、chromedriver 及 crontabs 服务，方便调试使用 python3 + selenium + chrome + chromedriver 的脚本。
# 目录树
```text
/data/
  `-- example.py
```
# 新建容器
```shell
docker run -dit \
  -v $PWD:/data \
  --name selenium \
  --restart always \
  chiupam/selenium:alpine
```
# 进入容器
```shell
docker exec -it selenium sh
```
# 容器内命令
## python
```shell
python example.py
```
## pip
```shell
pip freeze
```
## crontab
```shell
crontab -l # 列出定时任务
crontab -e # 修改定时任务
crontab -r # 清空定时任务
crontab <file path> # 把文件内容写入crontab定时任务蹱
```
# 示例脚本
```python
# coding=utf-8
from selenium import webdriver  # 必须

def main():
    driver.get('https://www.baidu.com/')
    print(driver.title)
    driver.close()
    driver.quit()

if __name__ == "__main__":
    chrome_options = webdriver.ChromeOptions()  # 必须
    chrome_options.add_argument('--headless')  # 必须
    chrome_options.add_argument('--no-sandbox')  # 必须
    driver = webdriver.Chrome(options=chrome_options)  # 必须
    main()

```
# 示例定时
```shell
# 每天12点自动执行一次/data/example.py脚本
0 0 * * * cd /data && python example.py >>/data/example.log 2>&1 &
```
