// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://taxi-mate.jp',
  integrations: [
    sitemap({
      // カスタムページを追加したい場合
      customPages: [],
      // 特定のページを除外したい場合
      filter: (page) => page !== 'https://taxi-mate.jp/404/',
      // 更新頻度の設定（デフォルトは月次）
      changefreq: 'monthly',
      // 優先度の設定（デフォルトは0.5）
      priority: 0.5,
      // 最終更新日の設定
      lastmod: new Date(),
      // エントリー数の制限（これを大きくすることで単一ファイルになる）
      entryLimit: 50000,
      // サイトマップのファイル名を指定
      i18n: {
        defaultLocale: 'ja',
        locales: {
          ja: 'ja',
        },
      },
      // サイトマップのファイル名を指定
      serialize(item) {
        // すべてのURLにスラッシュを付ける（trailingSlash: 'always' の設定に従う）
        if (!item.url.endsWith('/')) {
          item.url = item.url + '/';
        }
        return item;
      },
    }),
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }, // Vercel Analyticsのみ。静的サイトでは画像の最適化はAstroのImageコンポーネントで行う。Verselの画像最適化はAstroのサーバーサイドレンダリングで行われるため。
  }),
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },

  vite: {
    plugins: [tailwindcss()],
    envPrefix: ['MAKE_'],
  },
});
