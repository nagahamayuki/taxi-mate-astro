# タクシーメイト Astroプロジェクト (`taxi-mate-astro`)

## 概要

**タクシーメイト**は、タクシー業界に特化した転職支援サービスです。本リポジトリは、タクシーメイトの公式ウェブサイトをAstroで構築するためのプロジェクトです。
デザインとCMS連携、静的ページ生成、独立HTML構成など、ノンエンジニアでも運用可能な構成を目指しています。

## 特徴

- Astroベースの静的サイトジェネレーター
- Notion APIを利用したCMS的運用（求人データ管理）
- ページごとのSEO設定（`title` / `description` / `canonical`）
- 独立したLPページ（`/lp-1`）を完全HTML/CSS/JSで配置
- 全ページ共通でGoogle Tag Manager対応
- 動的ルーティング（`/job/[slug]`）で求人詳細を生成
- URL末尾のスラッシュ統一（`trailingSlash: 'always'`）によるSEO一貫性の確保
- ビルド時に自動的にサイトマップ（`sitemap.xml`）を生成

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

- **Astro**
- **Tailwind CSS**（ユーティリティクラス利用）
  - バージョン: ^4.1.3
  - `@tailwindcss/vite` プラグイン対応済み
- **Notion API**（データソースとして利用）
- **Node.js (ESM)**

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

上記1,2ができている場合は3から開発可能。3. **ローカルサーバ起動**

```bash
npm run dev
```

4. **Notion API テスト（任意）**

   ```bash
   node src/lib/test-notion.js
   ```

## 開発環境の特徴

| 項目             | 内容                                                  |
| ---------------- | ----------------------------------------------------- |
| 開発サーバー起動 | `npm run dev` で Astro 開発サーバを起動               |
| Node.js実行      | `node src/lib/test-notion.js` などを CLI で直接実行   |
| バージョン管理   | Node.js v22.5.1 を使用（Herd特有の記述なし）          |
| .envファイル     | 手動で `.env` をルートに配置して使用                  |
| パッケージ管理   | `npm install` を使用（herd install は使われていない） |

## 開発者向けメモ

- ページ単位で `title` / `description` / `url` を `BaseLayout` に渡すことでSEO情報を制御。
- `Fragment` + `slot="head"` により、ページ固有の `<meta>` を追加可能。
- `/jobs/` の一覧は Notion DB の内容を元に静的生成される。
- `[slug].astro` の `getStaticPaths()` により、動的なルーティングが設定される。

## デプロイ

本プロジェクトはVercelとGitHubを連携しており、mainブランチ（または指定ブランチ）にpushされると自動的にVercelへデプロイされます。

- デプロイ先: [Vercel](https://vercel.com/)
- 設定はVercelのWebダッシュボードで管理しています

### Vercelアダプターについて

本プロジェクトでは`@astrojs/vercel`アダプターを使用しています。このアダプターは、AstroプロジェクトをVercelで快適に動作させるための橋渡し役を果たします。

主な特徴：

- **デプロイの最適化**: Vercelの環境に合わせて自動的に最適な設定を行います
- **柔軟なレンダリング**: ページごとに静的生成（SSG）とサーバーサイドレンダリング（SSR）を選択できます
- **Edge Functions**: 必要に応じて、VercelのEdge Functionsを利用できます
- **自動設定**: Vercel特有の設定を自動的に行い、手動設定の手間を省きます

設定について：

- アダプターの基本設定は`astro.config.mjs`で管理しています
- `output: 'static'`の設定は削除しており、Vercelが各ページの特性に応じて最適な出力形式（静的/動的）を自動的に選択します
- これにより、パフォーマンスと柔軟性の両方を確保しています

### ビルド時の自動生成ファイル

- **サイトマップ**: `npm run build` 実行時に、以下の流れでサイトマップが生成・配置されます：

  1. `@astrojs/sitemap` により `dist/client` ディレクトリに `sitemap-0.xml` が生成されます
  2. `package.json` の `postbuild` スクリプトにより、生成されたサイトマップファイルが `public/sitemap.xml` にコピーされます
  3. Vercelデプロイ時に、`public` ディレクトリの内容が自動的にデプロイされます

  - 設定は `astro.config.mjs` で管理：
    - 404ページは除外設定済み
    - 更新頻度: monthly
    - 優先度: 0.5
    - エントリー数制限: 50,000（単一ファイルとして生成）
    - 日本語ロケール設定（`ja`）
    - URL末尾のスラッシュを除去する設定
  - サイトマップは `https://taxi-mate.jp/sitemap.xml` でアクセス可能

- **robots.txt**: `public/robots.txt` に配置されており、以下の設定を行っています：
  - 基本的に全てのクローラーに対してサイト全体のクロールを許可
  - Googleのクローラーに対しては求人ページ（`/jobs/`）を1秒間隔で週次クロールを許可
  - その他のクローラーに対しては7秒間隔で月次クロールを許可
  - サイトマップの場所（`https://taxi-mate.jp/sitemap.xml`）を指定
  - ビルド時に `public` ディレクトリの内容がそのままデプロイされるため、このファイルも自動的にウェブサイトのルートでアクセス可能になります

### URL構造とファイルハンドリング

本プロジェクトでは、以下のURL構造の取り扱いを実装しています：

1. **ページURL**: すべてのページURLは末尾にスラッシュ（`/`）を付けるように統一

   - 例：`/about/`, `/jobs/`, `/contact/`
   - これは`astro.config.mjs`の`trailingSlash: 'always'`と`vercel.json`の`"trailingSlash": true`で制御

2. **ファイルURL**: 特定のファイル（特にサイトマップ）は末尾スラッシュなしで提供
   - 例：`/sitemap.xml`
   - これは`vercel.json`の`rewrites`と`redirects`で制御
   - 正規表現パターン`/:path((?!index$|index\\.html$|.*\\/|$|.*\\.xml$).+)`で、XMLファイルを末尾スラッシュリダイレクトから除外

この設計により：

- SEOの一貫性を保ちながら（ページURLの末尾スラッシュ統一）
- ファイルアクセスの問題を回避（サイトマップなどのファイルは末尾スラッシュなしで提供）

## よくある質問

### Q. `/jobs` にアクセスすると404になる？

Astroは末尾スラッシュがあるURL（例：`/jobs/`）を正とみなします。本プロジェクトでは `astro.config.mjs` で `trailingSlash: 'always'` を設定し、すべてのURLで末尾スラッシュを強制することで、SEOの一貫性を確保しています。末尾なしアクセスを許容するには、サーバーまたはCDNでリダイレクト設定が必要です。

### Q. `canonical` タグは必要？

SEO観点で推奨されます。同一コンテンツに複数URLでアクセスできる場合、検索エンジンに正規URLを伝えるために使用します。

### Q. ヘッダーを固定したい

`<Header />` コンポーネントに `position: fixed` を適用し、`<main>` に `padding-top` を設定（例：`<main class="pt-[72px]">`）する設計を採用しています。

## 今後の予定

- 求人データに `slug` を含めてNotion管理（今はインデックスベース）
- TailwindベースのUIデザイン適用
- LP側のGTM計測整備とABテスト機能

## 画像最適化について

### 最適化戦略の選択

本プロジェクトでは、**Astro側で画像最適化**を実装しています。

### Astro vs Vercel での画像最適化

| 最適化手法 | メリット                           | 適用場面                          |
| ---------- | ---------------------------------- | --------------------------------- |
| **Astro**  | ビルド時に最適化、静的ファイル生成 | 静的サイト生成（SSG）             |
| **Vercel** | リクエスト時に最適化、動的処理     | サーバーサイドレンダリング（SSR） |

### 選択理由

本プロジェクトは**静的サイト生成（SSG）**で構築されているため、Astro側での画像最適化を採用しました。

#### ✅ Astro最適化の利点

- **ビルド時処理**: 画像の最適化がビルド時に完了
- **静的ファイル配信**: 最適化済みの画像ファイルを直接配信
- **高速配信**: CDNからの静的ファイル配信で高速表示
- **コスト効率**: サーバーサイド処理が不要

#### 🔄 Vercel最適化との比較

- **Vercel**: リクエスト時に動的最適化（SSR向け）
- **Astro**: ビルド時に静的最適化（SSG向け）

### 実装詳細

#### Notion API画像の処理フロー

```
Notion API → 画像取得 → Astro最適化 → 静的ファイル生成 → ビルド出力
```

#### 最適化設定

本プロジェクトでは、AstroのImageコンポーネントを使用して画像最適化を行っています。Vercelアダプターの設定では、静的サイト生成（SSG）の特性を活かし、ビルド時に画像最適化を実行します。

```js
// astro.config.mjs
export default defineConfig({
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  site: 'https://taxi-mate.jp',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
```

#### 使用例

```astro
---
// Notion APIから取得した画像URL
const imageUrl = post.cover?.external?.url || post.cover?.file?.url;
---

<Image
  src={imageUrl}
  alt={post.title}
  width={800}
  height={400}
  format="webp"
  quality={80}
/>
```

### 技術的な恩恵

#### パフォーマンス

- ✅ ビルド時最適化により配信時のCPU負荷ゼロ
- ✅ WebP/AVIF形式での軽量化
- ✅ レスポンシブ画像の自動生成

#### SEO・UX

- ✅ 適切なサイズでの画像配信
- ✅ 遅延読み込み（lazy loading）
- ✅ 累積レイアウトシフト（CLS）の改善

#### 運用面

- ✅ Notion画像の永続化（静的ファイル化）
- ✅ 外部依存の軽減
- ✅ 高い可用性とキャッシュ効率

### 1stリリース

2025年6月13日 18:39

### 2nd リリース

2025年6月15日 0:15
