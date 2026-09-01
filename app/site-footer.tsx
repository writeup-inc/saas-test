import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div><Link className="brand footer-brand" href="/"><span className="brand-mark">M</span><span>MCP導入ガイド</span></Link><p>見つける。確かめる。小さく始める。</p></div>
        <div className="footer-note"><b>プロトタイプについて</b><p>掲載情報は媒体体験の検証用です。個別MCPの実機検証、提供元、権限、契約条件を確認してから導入してください。</p></div>
        <nav aria-label="フッター"><Link href="/#guides">MCPを探す</Link><Link href="/policy">編集方針</Link></nav>
      </div>
    </footer>
  );
}
