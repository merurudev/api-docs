---
outline: deep
---

# Make It a Quote <Badge type="info" text="v1.0.0"/>

Quote を作成できる API を提供します。

## `POST /generate` - Quote を生成

- `username`: `@`より後に続くユーザー名を入力します。
- `display_name`: 表示名を入力します。(`null`である場合、`username`が代入されます。)
- `text`: 文章を入力します。
- `avatar`: `png`または`jpg`形式の URL を入力します。

::: danger 警告！！
`avatar` に `.gif`, `.webp` 形式の画像を設定することはできません。
:::

::: warning カラーオプションについて
生成された Quote は全てカラー(色付き)になります。

モノクロ版(白黒)の Quote は今のところ生成できません。(近日中に可能になります。)
:::

```
POST: https://miq.meru.moe/generate
Host: miq.meru.moe
Content-Type: application/json

{
	"username": "me_ru_ru",
	"display_name": "めるる",
	"text": "Hello World!",
	"avatar": "https://cdn.discordapp.com/avatars/1073139051617603584/1bfc4eb6fdc6ccc5ac754c6b7c5adeb9.png"
}
```

### 正常なレスポンス

ステータスコードは 200 を返します。

```
{
	"success": true,
	"msg": "Generated",
	"url": "https://miq.meru.moe/quotes/me_ru_ru_20241211114234153.png"
}
```

### エラー(無効なボディ)

ステータスコードは 400 を返します。

```
{
	"success": false,
	"msg": "Invalid body",
	"url": null
}
```

## `GET /quotes/:filename` - 画像を取得

```
GET: https://miq.meru.moe/quotes/filename.png
Host: miq.meru.moe
```

画像が存在する場合、その画像を返します。

存在しない場合は 404 エラーを返します。
