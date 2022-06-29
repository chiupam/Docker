<img src="https://raw.githubusercontent.com/chiupam/surge/main/boxjs/icon/qndxx.jpg" alt="logo" width="140" height="140" align="right">

<h1 align="center">
  青年大学习
  <br>
  Author: chiupam
</h1>

# 使用方式
## Surge（推荐）
### 1.打开Surge订阅模块
```text
https://raw.githubusercontent.com/chiupam/QNDXX/master/surge/qndxx.sgmodule
```
### 2.获取cookie
```text
打开微信 => 点击通讯录 => 点击公众号 => 搜索云南共青团 => 
点击右下角大学习 => 点击注册团员登录学习 => 点击我的 => 点击签到 => 
【成功】写入 cookie 成功！🎉
```
> 请留意！请留意！请留意！
>> 此脚本只有在`cookie`失效时才会发送运行通知！

## 腾讯云函数（推荐）

| Name | Value |
|:---:|:---:|
|`TENCENT_SECRET_ID`| 腾讯云用户 SecretID|
|`TENCENT_SECRET_KEY`| 腾讯云账户 SecretKey|
|`COOKIE`| cookie.txt 中内容|

## docker

```shell
docker run -dit \
  --name qndxx \
  --restart always \
  -v /root/qndxx:/data \
  chiupam/qndxx:latest
```

# 申明
1. 此脚本仅用于学习研究, 不保证其合法性, 准确性, 有效性, 请根据情况自行判断, 本人对此不承担任何保证责任.
2. 您必须在下载后 **24** 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除, 若违反规定引起任何事件本人对此均不负责.
3. 请勿将此脚本用于任何商业或非法目的, 若违反规定请自行对此负责.
4. 此脚本涉及应用与本人无关, 本人对因此引起的任何隐私泄漏或其他后果不承担任何责任.
5. 本人对任何脚本引发的问题概不负责, 包括但不限于由脚本错误引起的任何损失和损害.
6. 如果任何单位或个人认为此脚本可能涉嫌侵犯其权利, 应及时通知并提供身份证明，所有权证明, 我将在收到认证文件确认后删除此脚本.
7. 所有直接或间接使用, 查看此脚本的人均应该仔细阅读此声明.
8. 本人保留随时更改或补充此声明的权利, 一旦您使用或复制了此脚本, 即视为您已接受此免责声明.

