---
outline: deep
---

# 始める

API の利用は非常に簡単で、HTTP(s)通信ができる環境、そしてライブラリがあれば誰でも始められます。
Python であれば、`requests`, `httpx`, `aiohttp`のライブラリが必要です。
JavaScript であれば、`fetch`, `axios`のライブラリが必要です。

## 接続を確認する

```
GET https://meru.moe/cdn-cgi/trace
Host: meru.moe
```

正常にリクエストが送信された場合、以下のレスポンスが返答されます。

```
fl=000f000
h=meru.moe
ip=123.456.789.0
ts=0000000000.000
visit_scheme=https
uag=Mozilla/5.0
colo=NRT
sliver=none
http=http/2
loc=JP
tls=TLSv1.3
sni=plaintext
warp=off
gateway=off
rbi=off
kex=X00000
```

## API を使ってみる

正常に接続できたら、早速 API を使い始めてみましょう！

以下は、現在提供中の API です。

- [Make It a Quote](/miq-api)
- [VPNGate Checker](/vpngate)
- [Discord Watcher](/dc-watcher)
