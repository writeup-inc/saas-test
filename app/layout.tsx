import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const publicUrl = 'https://writeup-inc.github.io/saas-test/';

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl),
  title: 'MCP導入ガイド｜見つける。確かめる。小さく始める。',
  description: '中小企業のためのMCP導入判断メディア。業務に合うMCPを探し、権限・対応クライアント・導入条件まで確認できます。',
  alternates: { canonical: publicUrl },
  icons: { icon: `${publicUrl}favicon.svg` },
  openGraph: {
    title: 'MCP導入ガイド｜見つける。確かめる。小さく始める。',
    description: '中小企業のためのMCP導入判断メディア。',
    url: publicUrl,
    siteName: 'MCP導入ガイド',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: `${publicUrl}og.png`, width: 1200, height: 630, alt: 'MCP導入ガイド' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCP導入ガイド｜見つける。確かめる。小さく始める。',
    description: '中小企業のためのMCP導入判断メディア。',
    images: [`${publicUrl}og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja" data-scroll-behavior="smooth"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
