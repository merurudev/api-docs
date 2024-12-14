---
outline: deep
---

# VPNGate Checker <Badge type="info" text="v1.0.0"/>

[筑波 VPN(VPNGate)](https://vpngate.net/)の IP であるかチェックできる API を提供します。

:::danger API について
この API は筑波大学から認められたものではなく**非公式の API**として稼働しています。

これを使用して発生した問題に対し、私(meruru)は一切の責任を負いません。

また、 **正確性についても保証されていません。** ご注意ください。
:::

## `GET /list` - IP リストを取得

```
GET: https://vpn.meru.moe/list
Host: vpn.meru.moe
```

### 正常なレスポンス

ステータスコードは 200 を返します。

```json
["123.456.789.0", "1.2.3.4", "56.78.9.0"]
```

## `GET /:ip` - IP が VPNGate のリストに含まれるかを確認

```
GET: https://vpn.meru.moe/:ipaddr
Host: vpn.meru.moe
```

### 正常なレスポンス

ステータスコードは 200 を返します。

#### リストに含まれた IP である場合

```json
{
	"result": "OK",
	"vpn": true
}
```

#### リストに含まれていない IP である場合

```json
{
	"result": "OK",
	"vpn": false
}
```
