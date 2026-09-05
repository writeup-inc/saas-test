import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGuide, guides } from '../../catalog-data';
import SiteFooter from '../../site-footer';
import SiteHeader from '../../site-header';
import ShareGuide from '../../share-guide';
import { absoluteSiteUrl } from '../../site-config';

type GuidePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const guide = getGuide(slug);
  if (!guide) return {};
  const description = `${guide.description} 対応クライアント、権限、承認ポイント、導入前チェックを紹介。`;
  const url = absoluteSiteUrl(`guides/${slug}/`);
  return { title: `${guide.name} 導入前ガイド｜MCP導入ガイド`, description, alternates: { canonical: url }, openGraph: { title: `${guide.name} 導入前ガイド`, description, url, images: [] }, twitter: { card: 'summary', title: `${guide.name} 導入前ガイド`, description, images: [] } };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();

  return (
    <main>
      <SiteHeader />
      <div className="detail-shell shell">
        <div className="breadcrumbs"><Link href="/">ホーム</Link><span>/</span><Link href="/#guides">MCPを探す</Link><span>/</span><b>{guide.name}</b></div>

        <section className="detail-hero">
          <div className="detail-title"><span className="guide-mark detail-mark">{guide.mark}</span><div><p className="card-category">{guide.category}</p><h1>{guide.name}</h1></div></div>
          <p className="detail-lead">{guide.description}</p>
          <div className="verification-banner"><span className="warning-dot">!</span><div><b>プロトタイプ掲載 / 実機未検証</b><p>このページは情報設計を確認するための掲載候補です。利用するMCPサーバーを特定し、提供元・権限・実機動作を確認してから導入してください。</p></div></div>
        </section>

        <nav className="detail-jump" aria-label="ページ内ナビゲーション"><a href="#decision">社長の判断</a><a href="#setup">担当者の導入手順</a><a href="#sources">検証情報</a></nav>

        <section className="detail-section" id="decision">
          <div className="section-label"><span>01</span><p>FOR DECISION MAKERS</p></div>
          <div className="detail-content">
            <div className="detail-intro"><h2>社長の判断</h2><p>{guide.purpose}</p></div>
            <div className="fit-grid">
              <article className="fit-card good"><p className="mini-label">向いている会社</p><ul>{guide.bestFor.map((item) => <li key={item}>{item}</li>)}</ul></article>
              <article className="fit-card pause"><p className="mini-label">いったん見送る会社</p><ul>{guide.notFor.map((item) => <li key={item}>{item}</li>)}</ul></article>
            </div>
            <div className="content-grid">
              <article><p className="mini-label">できること</p><ul className="check-list">{guide.canDo.map((item) => <li key={item}>{item}</li>)}</ul></article>
              <article><p className="mini-label">まだ確認できていないこと</p><ul className="unknown-list">{guide.cannotConfirm.map((item) => <li key={item}>{item}</li>)}</ul></article>
            </div>
            <article className="flow-card"><p className="mini-label">想定するデータの流れ</p><p>{guide.dataFlow}</p></article>
            <article className="approval-card"><p className="mini-label">人の承認を残すポイント</p><div>{guide.approvals.map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}</div></article>
            <article className="starter-card"><div><p className="mini-label">小さく始める最小構成</p><h3>読むだけ・狭い範囲・すぐ止められる。</h3></div><dl><div><dt>試す範囲</dt><dd>検証用データまたは限定領域</dd></div><div><dt>停止条件</dt><dd>想定外の取得・操作・外部送信</dd></div><div><dt>承認者</dt><dd>業務責任者と設定担当者</dd></div></dl></article>
          </div>
        </section>

        <section className="detail-section setup-section" id="setup">
          <div className="section-label"><span>02</span><p>FOR IMPLEMENTERS</p></div>
          <div className="detail-content">
            <div className="detail-intro"><h2>担当者の導入手順</h2><p>本番へつなぐ前に、限定された検証環境で「読むだけ」の小さなタスクから始めます。</p></div>
            <ol className="setup-steps">
              <li><span>1</span><div><h3>使うMCPサーバーを特定する</h3><p>同じサービス名でも実装が複数ある場合があります。配布元、リポジトリ、更新履歴、ライセンスを確認します。</p></div></li>
              <li><span>2</span><div><h3>ツールと権限を一覧にする</h3><p>読み取り・作成・更新・削除・送信を分け、最初に許可する操作を決めます。</p></div></li>
              <li><span>3</span><div><h3>検証用アカウントで接続する</h3><p>対象データを限定し、CodexまたはClaude Codeの公式手順に沿ってサーバーを登録します。</p></div></li>
              <li><span>4</span><div><h3>小さな依頼で結果を照合する</h3><p>検索や要約などの読み取りタスクを実行し、原本・操作ログ・権限範囲を確認します。</p></div></li>
            </ol>
            <div className="client-grid">
              <article><p className="mini-label">Codex</p><h3>接続方法は実装特定後に確認</h3><p>Codex CLIにはMCPサーバー管理機能があります。選定したサーバーの通信方式と起動コマンドを確認して登録します。</p><span className="unknown-chip">設定値：未確認</span></article>
              <article><p className="mini-label">Claude Code</p><h3>接続方法は実装特定後に確認</h3><p>Claude CodeにもMCPサーバー管理機能があります。HTTPまたはローカル実行など、サーバー側の方式に合わせて登録します。</p><span className="unknown-chip">設定値：未確認</span></article>
            </div>
          </div>
        </section>

        <section className="detail-section sources-section" id="sources">
          <div className="section-label"><span>03</span><p>VERIFICATION</p></div>
          <div className="detail-content"><div className="detail-intro"><h2>検証情報</h2><p>公開時は、提供元側の更新日と編集部の最終検証日を分けて記録します。</p></div><dl className="verification-table"><div><dt>検証方法</dt><dd>一般的な接続用途の整理のみ</dd></div><div><dt>実機検証</dt><dd><span className="unknown-chip">未実施</span></dd></div><div><dt>Codexでの確認</dt><dd>クライアント側のMCP管理機能のみ確認</dd></div><div><dt>Claude Codeでの確認</dt><dd>クライアント側のMCP管理機能のみ確認</dd></div><div><dt>提供元・実装</dt><dd><span className="unknown-chip">選定前</span></dd></div><div><dt>最終確認日</dt><dd>2026年9月1日</dd></div></dl></div>
        </section>

        <section className="next-action"><p className="eyebrow">NEXT STEP</p><h2>導入を決める前に、<br />実装を1つに絞って検証する。</h2><p>このページの未確認項目が埋まるまで、本番データや送信・削除権限は渡さないのが安全です。</p><div className="next-buttons"><ShareGuide name={guide.name} approvals={guide.approvals} unknowns={guide.cannotConfirm} /><Link className="primary-button" href="/#guides">ほかのMCPを見る <span>→</span></Link></div></section>
      </div>
      <SiteFooter />
    </main>
  );
}
