#!/bin/sh -e

main() {
  url=https://raw.githubusercontent.com/chiupam/Docker/main/azure
  if [ ! -f "/app/config.json" ]; then
    wget $url/config.json -O config.json >/dev/null 2>&1
  fi
  if [ ! -f "/app/main.py" ]; then
    wget $url/main.py -O main.py >/dev/null 2>&1
    wget $url/deploy.sh -O deploy.sh >/dev/null 2>&1
    wget $url/ecosystem.config.js -O ecosystem.config.js >/dev/null 2>&1
  fi
}

main
while [ "$(cat "/app/config.json" | jq .first)" == '"true"' ]; do
  sleep 1
done
echo "初始化完成, 启动..."
sleep 24
pm2-runtime start /app/ecosystem.config.js >/dev/null 2>&1
