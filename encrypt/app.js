// 引入 express 框架
const express = require('express');
const bodyParser = require('body-parser');
// 创建网站服务器
const app = express();
// 拦截所有请求
// extended: false  方法内部使用 querystring 模块处理请求参数的格式
// extended: true   方法内部使用第三方模块 qs 来处理请求参数的格式
app.use(bodyParser.urlencoded({extended: false}));

function n(e) {
  R = new Array(e);
  for (var t = 0; t < R.length; t++)
    R[t] = 0;
  q = new i,
  F = new i,
  F.digits[0] = 1
}

function i(e) {
  this.digits = "boolean" == typeof e && 1 == e ? null : R.slice(0),
  this.isNeg = !1
}

function r(e) {
  var t = new i(!0);
  return t.digits = e.digits.slice(0),
  t.isNeg = e.isNeg,
  t
}

function o(e) {
  var t = new i;
  t.isNeg = e < 0,
  e = Math.abs(e);
  for (var a = 0; e > 0; )
    t.digits[a++] = e & X,
    e = Math.floor(e / j);
  return t
}

function c(e) {
  for (var q = "", a = 0; a < 4; ++a){
    q += J[15 & e],
    e >>>= 4;
  }
  for (var t = "", a = q.length - 1; a > -1; --a){
    t += q.charAt(a);
  }
return t
}

function u(e) {
  for (var t = "", a = (h(e),
  h(e)); a > -1; --a)
    t += c(e.digits[a]);
  return t
}

function p(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 90 ? 10 + e - 65 : e >= 97 && e <= 122 ? 10 + e - 97 : 0
}

function m(e) {
  for (var t = 0, a = Math.min(e.length, 4), n = 0; n < a; ++n)
    t <<= 4,
    t |= p(e.charCodeAt(n));
  return t
}

function d(e) {
  for (var t = new i, a = e.length, n = a, r = 0; n > 0; n -= 4,
  ++r)
    t.digits[r] = m(e.substr(Math.max(n - 4, 0), Math.min(n, 4)));
  return t
}

function g(e, t) {
  var a;
  if (e.isNeg != t.isNeg)
    t.isNeg = !t.isNeg,
    a = _(e, t),
    t.isNeg = !t.isNeg;
  else {
    a = new i;
    var n, r;
    r = 0;
    for (var o = 0; o < e.digits.length; ++o)
      n = e.digits[o] - t.digits[o] + r,
      a.digits[o] = n % j,
      a.digits[o] < 0 && (a.digits[o] += j),
      r = 0 - Number(n < 0);
    if (-1 == r) {
      r = 0;
      for (var o = 0; o < e.digits.length; ++o)
        n = 0 - a.digits[o] + r,
        a.digits[o] = n % j,
        a.digits[o] < 0 && (a.digits[o] += j),
        r = 0 - Number(n < 0);
        a.isNeg = !e.isNeg
    } else
      a.isNeg = e.isNeg
  }
  return a
}

function h(e) {
  for (var t = e.digits.length - 1; t > 0 && 0 == e.digits[t]; )
      --t;
  return t
}

function v(e) {
  var t, a = h(e), n = e.digits[a], i = (a + 1) * B;
  for (t = i; t > i - B && 0 == (32768 & n); --t)
    n <<= 1;
  return t
}

function E(e, t) {
  for (var a, n, r, o = new i, s = h(e), l = h(t), c = 0; c <= l; ++c) {
    a = 0,
    r = c;
    for (var u = 0; u <= s; ++u,
    ++r)
      n = o.digits[r] + e.digits[u] * t.digits[c] + a,
      o.digits[r] = n & X,
      a = n >>> K;
    o.digits[c + s + 1] = a
  }
  return o.isNeg = e.isNeg != t.isNeg,
  o
}

function b(e, t) {
  var a, n, r, o = new i;
  a = h(e),
  n = 0;
  for (var s = 0; s <= a; ++s)
    r = o.digits[s] + e.digits[s] * t + n,
    o.digits[s] = r & X,
    n = r >>> K;
  return o.digits[1 + a] = n,
  o
}

function y(e, t, a, n, i) {
  for (var r = Math.min(t + i, e.length), o = t, s = n; o < r; ++o,
  ++s)
    a[s] = e[o]
}

function w(e, t) {
  var a = Math.floor(t / B)
    , n = new i;
  y(e.digits, 0, n.digits, a, n.digits.length - a);
  for (var r = t % B, o = B - r, s = n.digits.length - 1, l = s - 1; s > 0; --s,
  --l)
    n.digits[s] = n.digits[s] << r & X | (n.digits[l] & V[r]) >>> o;
  return n.digits[0] = n.digits[s] << r & X,
  n.isNeg = e.isNeg,
  n
}

function T(e, t) {
  var a = Math.floor(t / B)
    , n = new i;
  y(e.digits, a, n.digits, 0, e.digits.length - a);
  for (var r = t % B, o = B - r, s = 0, l = s + 1; s < n.digits.length - 1; ++s,
  ++l)
    n.digits[s] = n.digits[s] >>> r | (n.digits[l] & Y[r]) << o;
  return n.digits[n.digits.length - 1] >>>= r,
  n.isNeg = e.isNeg,
  n
}

function S(e, t) {
  var a = new i;
  return y(e.digits, 0, a.digits, t, a.digits.length - t),
  a
}

function x(e, t) {
  var a = new i;
  return y(e.digits, t, a.digits, 0, a.digits.length - t),
  a
}

function O(e, t) {
  var a = new i;
  return y(e.digits, 0, a.digits, 0, t),
  a
}

function C(e, t) {
  if (e.isNeg != t.isNeg)
    return 1 - 2 * Number(e.isNeg);
  for (var a = e.digits.length - 1; a >= 0; --a)
    if (e.digits[a] != t.digits[a])
      return e.isNeg ? 1 - 2 * Number(e.digits[a] > t.digits[a]) : 1 - 2 * Number(e.digits[a] < t.digits[a]);
  return 0
}

function k(e, t) {
  var a, n, o = v(e), s = v(t), l = t.isNeg;
  if (o < s)
    return e.isNeg ? (a = r(F),
    a.isNeg = !t.isNeg,
    e.isNeg = !1,
    t.isNeg = !1,
    n = g(t, e),
    e.isNeg = !0,
    t.isNeg = l) : (a = new i,
    n = r(e)),
    new Array(a,n);
  a = new i,
  n = e;
  for (var c = Math.ceil(s / B) - 1, u = 0; t.digits[c] < G; )
    t = w(t, 1),
    ++u,
    ++s,
    c = Math.ceil(s / B) - 1;
  n = w(n, u),
  o += u;
  for (var p = Math.ceil(o / B) - 1, m = S(t, p - c); -1 != C(n, m); )
    ++a.digits[p - c],
    n = g(n, m);
  for (var d = p; d > c; --d) {
    var f = d >= n.digits.length ? 0 : n.digits[d]
      , E = d - 1 >= n.digits.length ? 0 : n.digits[d - 1]
      , y = d - 2 >= n.digits.length ? 0 : n.digits[d - 2]
      , x = c >= t.digits.length ? 0 : t.digits[c]
      , O = c - 1 >= t.digits.length ? 0 : t.digits[c - 1];
    a.digits[d - c - 1] = f == x ? X : Math.floor((f * j + E) / x);
    for (var k = a.digits[d - c - 1] * (x * j + O), N = f * z + (E * j + y); k > N; )
      --a.digits[d - c - 1],
      k = a.digits[d - c - 1] * (x * j | O),
      N = f * j * j + (E * j + y);
    m = S(t, d - c - 1),
    n = g(n, b(m, a.digits[d - c - 1])),
    n.isNeg && (n = _(n, m),
    --a.digits[d - c - 1])
  }
  return n = T(n, u),
  a.isNeg = e.isNeg != l,
  e.isNeg && (a = l ? _(a, F) : g(a, F),
  t = T(t, u),
  n = g(t, n)),
  0 == n.digits[0] && 0 == h(n) && (n.isNeg = !1),
  new Array(a,n)
}

function N(e, t) {
  return k(e, t)[0]
}

function I(e) {
  this.modulus = r(e),
  this.k = h(this.modulus) + 1;
  var t = new i;
  t.digits[2 * this.k] = 1,
  this.mu = N(t, this.modulus),
  this.bkplus1 = new i,
  this.bkplus1.digits[this.k + 1] = 1,
  this.modulo = A,
  this.multiplyMod = P,
  this.powMod = W
}

function A(e) {
  var t = x(e, this.k - 1)
    , a = E(t, this.mu)
    , n = x(a, this.k + 1)
    , i = O(e, this.k + 1)
    , r = E(n, this.modulus)
    , o = O(r, this.k + 1)
    , s = g(i, o);
  s.isNeg && (s = _(s, this.bkplus1));
  for (var l = C(s, this.modulus) >= 0; l; )
    s = g(s, this.modulus),
    l = C(s, this.modulus) >= 0;
  return s
}

function P(e, t) {
  var a = E(e, t);
  return this.modulo(a)
}

function W(e, t) {
  var a = new i;
  a.digits[0] = 1;
  for (var n = e, r = t; ; ) {
    if (0 != (1 & r.digits[0]) && (a = this.multiplyMod(a, n)),
    r = T(r, 1),
    0 == r.digits[0] && 0 == h(r))
      break;
    n = this.multiplyMod(n, n)
  }
  return a
}

function M(e, t, a) {
  this.e = d(e),
  this.d = d(t),
  this.m = d(a),
  this.chunkSize = 2 * h(this.m),
  this.radix = 16,
  this.barrett = new I(this.m)
}

function D(e, t, a) {
  return new M(e,t,a)
}

function L(e, t) {
  for (var a = new Array, n = t.length, r = 0; r < n; )
    a[r] = t.charCodeAt(r),
    r++;
  for (; a.length % e.chunkSize != 0; )
    a[r++] = 0;
  var o, s, c, p = a.length, m = "";
  for (r = 0; r < p; r += e.chunkSize) {
    for (c = new i,
    o = 0,
    s = r; s < r + e.chunkSize; ++o)
      c.digits[o] = a[s++],
      c.digits[o] += a[s++] << 8;
    var d = e.barrett.powMod(c, e.e);
    m += (16 == e.radix ? u(d) : l(d, e.radix)) + " "
  }
  return m.substring(0, m.length - 1)
}

var U, R, q, F, K = 16, B = K, j = 65536, G = j >>> 1, z = j * j, X = j - 1;
n(20);
var H = (o(1e15),
new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"))
, J = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f")
, V = new Array(0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535)
, Y = new Array(0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535)
n(131);

function main(tt) {
  let ee = "010001"
  let aa = "00b5eeb166e069920e80bebd1fea4829d3d1f3216f2aabe79b6c47a3c18dcee5fd22c2e7ac519cab59198ece036dcf289ea8201e2a0b9ded307f8fb704136eaeb670286f5ad44e691005ba9ea5af04ada5367cd724b5a26fdb5120cc95b6431604bd219c6b7d83a6f8f24b43918ea988a76f93c333aa5a20991493d4eb1117e7b1"
  let hh = D(ee, "", aa)
  let gg = L(hh, tt)
  return gg
}

app.post('/', (requests, response) => {
  if (requests.body.password) {
    var password = requests.body.password
    response.send(main(password))
  } else {
    response.send("hello world!")
  }
})

app.get('/', (requests, response) => {
  if (requests.query.password) {
    var password = requests.query.password
    response.send(main(password))
  } else {
    response.send("hello world!")
  }
})

// Web 类型云函数，只能监听 9000 端口
app.listen(9000, () => {
  console.log(`Server start on http://localhost:9000`);
});
