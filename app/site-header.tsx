import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link className="brand" href="/" aria-label="MCP導入ガイド ホーム"><span className="brand-mark">M</span><span>MCP導入ガイド</span></Link>
        <nav className="top-nav" aria-label="メインナビゲーション"><Link href="/#guides">MCPを探す</Link><Link href="/policy">編集方針</Link><span className="nav-status"><i /> PROTOTYPE</span></nav>
      </div>
    </header>
  );
}
