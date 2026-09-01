import CatalogGrid from './catalog-grid';
import SiteFooter from './site-footer';
import SiteHeader from './site-header';

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span /> MCP CATALOG / FOR BUSINESS</p>
            <h1><span className="hero-title-row"><span>見つける。</span><span>確かめる。</span></span><span className="hero-title-accent">小さく始める。</span></h1>
            <p className="hero-lead">経営判断に必要な情報を、<br />接続前の1ページに。</p>
            <p className="hero-body">AIを業務につなぐMCPを、できることだけでなく、必要な権限・人の承認・対応クライアントまで整理して紹介します。</p>
            <div className="audience-line"><p><b>対象</b> 自社でAI活用を進めたい中小企業の社長</p><p><b>対象外</b> 無確認で全面自動化したい方</p></div>
            <p className="prototype-count"><span>PROTOTYPE</span> 掲載候補 8件 / 実機検証済み 0件</p>
            <div className="hero-actions"><a className="primary-button" href="#guides">おすすめMCPを見る <span>↓</span></a><a className="text-button" href="/policy">編集方針を見る <span>↗</span></a></div>
          </div>
          <aside className="hero-panel" aria-label="このガイドで分かること">
            <div className="panel-head"><p className="panel-kicker">DECISION INDEX</p><span>3 SIGNALS</span></div>
            <div className="panel-row"><span>01</span><p><b>SCOPE</b><small>どの業務とデータを扱うか</small></p></div>
            <div className="panel-row"><span>02</span><p><b>ACCESS</b><small>読み取り・更新・送信の範囲</small></p></div>
            <div className="panel-row"><span>03</span><p><b>APPROVAL</b><small>誰が最終判断を残すか</small></p></div>
          </aside>
        </div>
      </section>

      <section className="definition-strip">
        <div className="shell definition-inner"><span>MODEL CONTEXT PROTOCOL</span><p>AIアプリケーションを、業務データやツールにつなぐためのオープンな標準です。</p><a href="https://modelcontextprotocol.io/" target="_blank" rel="noreferrer">公式仕様 ↗</a></div>
      </section>

      <section className="catalog shell" id="guides">
        <div className="section-heading"><div><p className="eyebrow"><span /> GUIDE CANDIDATES</p><h2>仕事で選ぶ、<br />MCP一覧。</h2></div><p>人気順ではなく、解決したい仕事と導入条件から選びます。掲載順は推奨度や優劣を示しません。</p></div>
        <CatalogGrid />
      </section>

      <section className="decision-section">
        <div className="shell decision-grid">
          <div><p className="eyebrow"><span /> A BETTER DECISION</p><h2>「使える」より先に、<br />「使ってよいか」を見る。</h2></div>
          <div className="decision-list">
            <article><span>01</span><div><h3>できないことも書く</h3><p>便利な機能だけでなく、未対応・未確認・向かない会社を同じ重さで表示します。</p></div></article>
            <article><span>02</span><div><h3>権限と承認を分ける</h3><p>読み取り、更新、削除、送信などを区別し、人が確認すべき操作を明確にします。</p></div></article>
            <article><span>03</span><div><h3>検証の限界を残す</h3><p>公式情報、編集部の実機検証、未検証範囲を混ぜず、確認日と一緒に残します。</p></div></article>
          </div>
        </div>
      </section>

      <section className="trust-strip"><div className="shell trust-inner"><p><span>01</span> 公式情報と編集判断を分ける</p><p><span>02</span> 未確認は「未確認」と表示する</p><p><span>03</span> 最終検証日を残す</p></div></section>
      <SiteFooter />
    </main>
  );
}
