import type { Metadata } from 'next';
import './agency.css';

const publicUrl = 'https://writeup-inc.github.io/saas-test/web-agency-kit/';

export const metadata: Metadata = {
  title: 'ホームページ制作会社パック｜御社の中にWeb制作会社をひとつ',
  description: '既存顧客からのWeb相談を、自社の新しい収益源へ。提案・制作・品質管理・納品までを回せるWeb制作事業の運営キット。',
  alternates: { canonical: publicUrl },
  openGraph: {
    title: '御社の中に、Web制作会社をひとつ。',
    description: '既存顧客へのWeb提案を、新しい収益源に。提案から納品までを自社で回すための運営キット。',
    url: publicUrl,
    siteName: 'ホームページ制作会社パック',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: `${publicUrl}og.png`, width: 1200, height: 630, alt: 'ホームページ制作会社パック' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '御社の中に、Web制作会社をひとつ。',
    description: '既存顧客へのWeb提案を、新しい収益源に。',
    images: [`${publicUrl}og.png`],
  },
};

export default function WebAgencyKitLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
