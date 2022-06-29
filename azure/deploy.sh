config=/app/config.json

while [ ! -f $config ]; do
  sleep 1
done

if [ "$(cat $config | jq .first)" == '"true"' ]; then
  if [ -n "$(grep -E "1016919456" $config)" ]; then
    printf "请输入 user id："
    read -r user_id
    sed -i s/1016919456/"$user_id"/g $config
  fi
  if [ -n "$(grep -E "505515432:AA" $config)" ]; then
    printf "请输入 bot api："
    read -r bot_api
    sed -i s/"505515432:AA"/"$bot_api"/g $config
  fi
  if [ -n "$(grep -E "123456789" $config)" ]; then
    printf "请输入 api id："
    read -r api_id
    sed -i s/"123456789"/"$api_id"/g $config
  fi
  if [ -n "$(grep -E "abcdefghijklmn" $config)" ]; then
    printf "请输入 api hash："
    read -r api_hash
    sed -i s/"abcdefghijklmn"/"$api_hash"/g $config
  fi
  if [ -n "$(grep -E "5700" $config)" ]; then
    printf "请输入青龙面板端口："
    read -r ql_port
    sed -i s/"5700"/"$ql_port"/g $config
  fi
  if [ -n "$(grep -E "resourceGroup" $config)" ]; then
    printf "请输入 Azure 资源组名称："
    read -r az_group
    sed -i s/"resourceGroup"/"$az_group"/g $config
  fi
  if [ -n "$(grep -E "computerName" $config)" ]; then
    printf "请输入 Azure 虚拟机名称："
    read -r az_name
    sed -i s/"computerName"/"$az_name"/g $config
  fi
  echo -e "\n开始登录 Azure ……"
  printf "请输入 Azure 登录邮箱（直接回车则使用浏览器登录）："
  read -r az_username
  if [ -n "$az_username" ]; then
    printf "请输入 Azure 登录密码："
    read -r az_password
    az login -u "$az_username" -p "$az_password"
  else
    az login
  fi
  echo -e "\n开始登录 Telegram ……"
  echo "输入手机号码和验证完成后, 请 Ctrl + C 退出, 25秒后自动启动监控..."
  sed -i 's/true/false/g' $config
  python3 main.py
else
  pm2 start ecosystem.config.js
fi
