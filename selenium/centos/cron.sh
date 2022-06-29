# 自动删除3天前的log文件
0 5 * * * bash /repo/delete.sh >/dev/null 2>&1 &
