#!/bin/sh -e

start() {
  if [ ! -f "/app/app.js" ]; then
    echo "未检测到 app.js 文件, 正在下载中, 请耐心等待..."
    url=https://raw.githubusercontent.com/chiupam/Docker/main/encrypt
    wget $url/app.js -O app.js >/dev/null 2>&1
    wget $url/ecosystem.config.js -O ecosystem.config.js >/dev/null 2>&1
  fi
  if [ ! -d "/app/node_modules/express" ]; then
    echo "未检测到 express 依赖, 正在安装中, 请耐心等待..."
    npm install express >/dev/null 2>&1
  fi
  echo "删除不必要的文件, 请耐心等待..."
  rm -rf $(ls | egrep -v "js|modules") >/dev/null 2>&1
  rm -rf *.json >/dev/null 2>&1
  echo "初始化完成, 启动..."
  pm2-runtime start /app/ecosystem.config.js >/dev/null 2>&1
}

start
