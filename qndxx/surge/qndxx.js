/*

[Script]
# > 青年大学习获取cookie (home.yngqt.org.cn)
青年大学习 = type=http-request,pattern=^https?:\/\/home\.yngqt\.org\.cn\/qndxx\/user\/qiandao\.ashx, requires-body=1, max-size=-1, script-path=https://raw.githubusercontent.com/chiupam/QNDXX/master/sruge/qndxx.js
# > 青年大学习
青年大学习 = type=cron, cronexp="13 13 13,23 * * *", wake-system=1, timeout=180, script-path=https://raw.githubusercontent.com/chiupam/QNDXX/master/sruge/qndxx.js

[MITM]
hostname = %APPEND% home.yngqt.org.cn

*/

var appName = '🌼 青年大学习 🌼'
var $ = Env()
var cookie = {"Cookie": $.read("CookieQNDXX")}
let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {set_cookie()} else {sign()}

function set_cookie() {
  if ($request.headers) {
    $.set($request.headers.Cookie, "CookieQNDXX")
    $.msg(appName, "【成功】写入 cookie 成功！🎉", $request.headers.Cookie)
  } else {
    $.msg(appName, "", "【失败】无法读取 headers 啊，自查原因！🤦‍♂️")
  }
  $.done()
}

function week() {
  date = new Date();
  var date2 = new Date(date.getFullYear(), 0, 1);
  var day1 = date.getDay();
  if (day1 == 0) day1 = 7;
  var day2 = date2.getDay();
  if (day2 == 0) day2 = 7;
  var day3 = date.getTime() - date2.getTime() + (day2 - day1) * (24 * 60 * 60 * 1000)
  let day4 = Math.round(day3 / 86400000);
  if ((Math.ceil(day4 / 7) + 1) > 52) {return 1}
  return Math.ceil(day4 / 7) + 1
}

function sign() {
  const switch_aspx = {url: "http://home.yngqt.org.cn/qndxx/switch.aspx", headers: cookie}
  $.get(switch_aspx, (err, resp, data) => {$.done()})
  const default_aspx = {url: "http://home.yngqt.org.cn/qndxx/default.aspx", headers: cookie}
  $.get(default_aspx, (err, resp, data) => {$.done()})
  const index_aspx = {url: "http://home.yngqt.org.cn/qndxx/index.aspx", headers: cookie}
  $.get(index_aspx, (err, resp, data) => {$.done()})
  const sign_ashx = {url: "http://home.yngqt.org.cn/qndxx/user/qiandao.ashx", headers: cookie}
  $.post(sign_ashx, (err, resp, data) => {
    $.log(JSON.parse(data).message)
    if (JSON.parse(data).message.indexOf("登录") != -1) {
      $.msg(appName, "【过期】按下列步骤获取 cookie 噢！🤯", "微信 => 通讯录 => 公众号 => 云南共青团 => 大学习 => 注册团员登录学习 => 我的 => 签到")
    } else {
      const study_1 = {
        url: "http://home.yngqt.org.cn/qndxx/xuexi.ashx", headers: cookie,
        body: {"txtid": parseInt($.read("txtid")) || week() + 41}
      }
      $.post(study_1, (err, resp, data) => {
        if (JSON.parse(data).message.indexOf("未填写") != -1) {
          $.msg(appName, "", "【过期】当前使用的 txtid 需待更新！")
        } else {
          const study_2 = {
            url: "http://home.yngqt.org.cn/qndxx/xuexi.ashx", headers: cookie,
            body: {"txtid": parseInt($.read("txtid")) - 1 || week() + 40}
          }
          $.post(study_2, (err, resp, data) => {$.done()})
          const study_3 = {
            url: "http://home.yngqt.org.cn/qndxx/xuexi.ashx", headers: cookie,
            body: {"txtid": parseInt($.read("txtid")) - 2 || week() + 39}
          }
          $.post(study_3, (err, resp, data) => {$.done()})
        }
        $.done()
      })
    }
    $.done()
  })
}

function Env() {
  SL = () => {return undefined === this.$httpClient ? false : true}
  QX = () => {return undefined === this.$task ? false : true}
  read = (key) => {
    if (SL()) return $persistentStore.read(key)
    if (QX()) return $prefs.valueForKey(key)
  }
  set = (key, val) => {
    if (SL()) return $persistentStore.write(key, val)
    if (QX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (SL()) $notification.post(title, subtitle, body)
    if (QX()) $notify(title, subtitle, body)
  }
  get = (url, cb) => {
    if (SL()) {$httpClient.get(url, cb)}
    if (QX()) {url.method = 'GET'; $task.fetch(url).then((resp) => cb(null, {}, resp.body))}
  }
  post = (url, cb) => {
    if (SL()) {$httpClient.post(url, cb)}
    if (QX()) {url.method = 'POST'; $task.fetch(url).then((resp) => cb(null, {}, resp.body))}
  }
  put = (url, cb) => {
    if (SL()) {$httpClient.put(url, cb)}
    if (QX()) {url.method = 'PUT'; $task.fetch(url).then((resp) => cb(null, {}, resp.body))}
  }
  log = (message) => console.log(message)
  done = (value = {}) => {$done(value)}
  return { SL, QX, msg, read, set, get, post, put, log, done }
}
