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
* URL末尾のスラッシュ統一（`trailingSlash: 'always'`）によるSEO一貫性の確保
* ビルド時に自動的にサイトマップ（`sitemap.xml`）を生成

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
  - バージョン: ^4.1.3
  - `@tailwindcss/vite` プラグイン対応済み
* **Notion API**（データソースとして利用）
* **Node.js (ESM)**

## セットアップ手順(新しいPC)

1. **依存パッケージのインストール**

   ```bash
   npm install
   ```

2. **環境変数の設定**
   `.env` ファイルを作成し、以下の内容を記述：

   ```env
   # Notion API Configuration
   NOTION_API_KEY=your_notion_integration_secret
   NOTION_DATABASE_ID=your_database_id
   
   # Webhook URLs
   MAKE_CONTACT_WEBHOOK_URL=your_contact_webhook_url
   MAKE_JOB_ENTRY_WEBHOOK_URL=your_job_entry_webhook_url
   ```

   **環境変数の詳細：**
   - `NOTION_API_KEY`: Notion API統合キー（Notion Integrationから取得）
   - `NOTION_DATABASE_ID`: 求人情報を管理するNotionデータベースのID
   - `MAKE_CONTACT_WEBHOOK_URL`: お問い合わせフォーム（`/contact`）用のWebhook URL
   - `MAKE_JOB_ENTRY_WEBHOOK_URL`: 求人応募フォーム（`/jobs/[slug]`）用のWebhook URL

   **注意事項：**
   - `PUBLIC_`プレフィックスが付いた環境変数はクライアントサイドのコードに公開されます
   - `.env`ファイルは絶対にバージョン管理にコミットしないでください
   - `.gitignore`に`.env`が含まれていることを確認してください

上記1,2ができている場合は3から開発可能。
3. **ローカルサーバ起動**

   ```bash
   npm run dev
   ```

4. **Notion API テスト（任意）**

   ```bash
   node src/lib/test-notion.js
   ```

## 開発環境の特徴

| 項目             | 内容                                                                 |
|------------------|----------------------------------------------------------------------|
| 開発サーバー起動 | `npm run dev` で Astro 開発サーバを起動                              |
| Node.js実行      | `node src/lib/test-notion.js` などを CLI で直接実行                  |
| バージョン管理   | Node.js v22.5.1 を使用（Herd特有の記述なし）                         |
| .envファイル     | 手動で `.env` をルートに配置して使用                                 |
| パッケージ管理   | `npm install` を使用（herd install は使われていない）                |

## 開発者向けメモ

* ページ単位で `title` / `description` / `url` を `BaseLayout` に渡すことでSEO情報を制御。
* `Fragment` + `slot="head"` により、ページ固有の `<meta>` を追加可能。
* `/jobs/` の一覧は Notion DB の内容を元に静的生成される。
* `[slug].astro` の `getStaticPaths()` により、動的なルーティングが設定される。

## デプロイ

本プロジェクトはVercelとGitHubを連携しており、mainブランチ（または指定ブランチ）にpushされると自動的にVercelへデプロイされます。

- デプロイ先: [Vercel](https://vercel.com/)
- 設定はVercelのWebダッシュボードで管理しています

### ビルド時の自動生成ファイル

- **サイトマップ**: `npm run build` 実行時に、`@astrojs/sitemap` により自動的に `sitemap.xml` が生成されます
  - 設定は `astro.config.mjs` で管理
  - 404ページは除外設定済み
  - 更新頻度: weekly、優先度: 0.7で設定

## よくある質問

### Q. `/jobs` にアクセスすると404になる？

Astroは末尾スラッシュがあるURL（例：`/jobs/`）を正とみなします。本プロジェクトでは `astro.config.mjs` で `trailingSlash: 'always'` を設定し、すべてのURLで末尾スラッシュを強制することで、SEOの一貫性を確保しています。末尾なしアクセスを許容するには、サーバーまたはCDNでリダイレクト設定が必要です。

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
