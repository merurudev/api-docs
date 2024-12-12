---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "meruru's API"
  text: 'Documentation'
  tagline: シンプルなREST APIのドキュメント。
  image:
    src: /meru.webp
    alt: meruru
  actions:
    - theme: brand
      text: 始める
      link: /getting-started
    - theme: alt
      text: Examples
      link: /examples

features:
  - icon: '💰'
    title: (100%)無料。
    details: このドキュメントにあるものなら、全部無料で利用できます。
  - icon: '😊'
    title: シンプルで簡単に使える
    details: 必要なのはJSONデータの構造を理解する力だけ。簡単に扱えます。
  - icon: '🕶'
    title: ログは残しません。
    details: プライバシーは重要です。あなたのログがaccess.logに記録される事は一切ありません。
---

<style>
:root {
  --vp-home-hero-name-color: transparent !important;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #2ee8ff 40%, #d1e6f3) !important;

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #66adff 50%, #419edf 50%) !important;
  --vp-home-hero-image-filter: blur(44px) !important;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px) !important;
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px) !important;
  }
}
</style>
