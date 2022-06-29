# 自动删除3天前的log文件
2 13 * * * sh /repo/docker/delete.sh >/dev/null 2>&1 &
# 执行主程序
3 13 * * * python /repo/main.py >> /data/$(date +\%Y-\%m-\%d).log 2>&1 &
