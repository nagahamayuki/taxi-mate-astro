# タクシーメイト Astroプロジェクト (`taxi-mate-astro`)

## 概要

**タクシーメイト**は、タクシー業界に特化した転職支援サービスです。本リポジトリは、タクシーメイトの公式ウェブサイトをAstroで構築するためのプロジェクトです。
デザインとCMS連携、静的ページ生成、独立HTML構成など、ノンエンジニアでも運用可能な構成を目指しています。

## 特徴

* Astroベースの静的サイトジェネレーター
* Notion APIを利用したCMS的運用（求人データ管理）
* ページごとのSEO設定（`title` / `description` / `canonical`）
* 独立したLPページ（`/lp-1`）を完全HTML/CSS/JSで配置
* 全ページ共通でGoogle Tag Manager対応
* 動的ルーティング（`/job/[slug]`）で求人詳細を生成

## ディレクトリ構成

```
taxi-mate-astro/
├── src/
│   ├── layouts/           # ベースレイアウト（head, slot対応）
│   ├── components/        # Header / Footer など共通パーツ
│   ├── lib/               # Notion連携や共通関数
│   ├── pages/
│   │   ├── index.astro    # トップページ
│   │   ├── about.astro    # サービス説明
│   │   ├── contact.astro  # お問い合わせ
│   │   ├── jobs/          # 求人一覧（/jobs/）
│   │   │   └── [slug].astro # 求人詳細（/jobs/job-1 など）
│   │   └── lp-1/          # 独立LPページ
```

## 使用技術

* **Astro**
* **Tailwind CSS**（ユーティリティクラス利用）
* **Notion API**（データソースとして利用）
* **Node.js (ESM)**

## セットアップ手順

1. **依存パッケージのインストール**

   ```bash
   npm install
   ```

2. **環境変数の設定**
   `.env` ファイルを作成し、以下の内容を記述：

   ```env
   NOTION_API_KEY=your_notion_integration_secret
   NOTION_DATABASE_ID=your_database_id
   ```

3. **ローカルサーバ起動**

   ```bash
   npm run dev
   ```

4. **Notion API テスト（任意）**

   ```bash
   node src/lib/test-notion.js
   ```

## 開発者向けメモ

* ページ単位で `title` / `description` / `url` を `BaseLayout` に渡すことでSEO情報を制御。
* `Fragment` + `slot="head"` により、ページ固有の `<meta>` を追加可能。
* `/jobs/` の一覧は Notion DB の内容を元に静的生成される。
* `[slug].astro` の `getStaticPaths()` により、動的なルーティングが設定される。

## よくある質問

### Q. `/jobs` にアクセスすると404になる？

Astroは末尾スラッシュがあるURL（例：`/jobs/`）を正とみなします。末尾なしアクセスを許容するには、サーバーまたはCDNでリダイレクト設定が必要です。

### Q. `canonical` タグは必要？

SEO観点で推奨されます。同一コンテンツに複数URLでアクセスできる場合、検索エンジンに正規URLを伝えるために使用します。

### Q. ヘッダーを固定したい

`<Header />` コンポーネントに `position: fixed` を適用し、`<main>` に `padding-top` を設定（例：`<main class="pt-[72px]">`）する設計を採用しています。

## 今後の予定

* 求人データに `slug` を含めてNotion管理（今はインデックスベース）
* TailwindベースのUIデザイン適用
* LP側のGTM計測整備とABテスト機能

---

必要に応じて、ライセンス情報やデプロイ手順（Vercelなど）も追記可能です。必要であればそのセクションも追加します。
