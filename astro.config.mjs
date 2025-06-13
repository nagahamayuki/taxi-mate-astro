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
      entryLimit: 10000,
    }),
  ],
  adapter: vercel({
    imageService: true,
  }),
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
    envPrefix: ['MAKE_'],
  },
});
