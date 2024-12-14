---
outline: deep
---

# Examples

コードの書き方がよく分かりませんか？使い方の例を見てみましょう！

:::tip 💡 あなたが使う言語と違いますか？
このページでは JavaScript のコード例を提示していますが、
実際にはお好きな言語(`Python`、`Rust`など)で自由に使うことができます。
参考程度にご覧ください。
:::

## Make It a Quote

### Quote を生成し、URL を取得する

```js
async function Quote() {
	/* POSTリクエストの送信 */
	const res = await fetch('https://miq.meru.moe/generate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: 'me_ru_ru',
			display_name: 'めるる',
			text: 'Hello World!',
			avatar: 'https://cdn.discordapp.com/avatars/1073139051617603584/1bfc4eb6fdc6ccc5ac754c6b7c5adeb9.png',
		}),
	});
	/* ステータスコードが2xxであることを確認 */
	if (res.ok) {
		/* レスポンスのjsonを取得 + 出力 */
		const data = await res.json();
		console.log(data);
	} else {
		/* リクエストが失敗した(2xxでない)時の例外処理 */
		throw new Error(`Failed to request. (${res.status})`);
	}
}
```

### 生成した Quote を保存する

:::warning `ReferenceError: __dirname is not defined in ES module scope`の対処法
`__dirname`、及び`__filename`は CommonJS でのみ定義されているため、ESModule では利用できません。

ただし、以下の定義を加える事で通常通り使えるようになります。

Node.js v21.2.0 以上の場合:

```js
const __dirname = import.meta.dirname;
const __filename = import.meta.filename;
```

Node.js v21.2.0 未満 / Deno の場合:

```js
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

:::

```js
import { writeFile } from 'fs/promises';
import { join } from 'path';

async function SaveQuote(url) {
	/* URLはQuote()で取得したurlを入力する */
	const res = await fetch(url);

	/* Bufferにする */
	const arrBuff = await res.arrayBuffer();
	const buffer = Buffer.from(arrBuff);

	/* 保存処理 */
	const filename = 'filename.png';
	const path = join(__dirname, '/quotes/', filename);
	await writeFile(path, buffer);
}
```
