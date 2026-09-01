import type { Metadata } from 'next';
import SiteFooter from '../site-footer';
import SiteHeader from '../site-header';

export const metadata: Metadata = {
  title: '編集方針｜MCP導入ガイド',
  description: 'MCP導入ガイドの確認方法、更新表示、利益相反、訂正方針。',
  alternates: { canonical: 'https://writeup-inc.github.io/saas-test/policy/' },
};

const policies = [
  ['公式情報と編集判断を分ける', '製品・仕様・提供元が示す事実と、編集部が行う評価・推奨を同じ表示に混ぜません。'],
  ['実機検証と公開情報を分ける', '実際に接続して確認した範囲、資料だけで確認した範囲、確認できなかった範囲を記事ごとに示します。'],
  ['「未確認」を空欄にしない', '提供元、権限、保存、対応クライアントなどを確認できない場合は、未確認のまま表示します。'],
  ['更新日を2種類で管理する', 'MCP提供元側の更新日と、編集部が記事内容を確認した日を別々に扱います。'],
  ['掲載と推奨を分ける', '掲載していること自体は推奨を意味しません。条件付き推奨や、現時点では見送りという判断も理由とともに扱います。'],
  ['金銭関係を開示する', '広告、紹介料、提供、導入支援などの関係がある場合は、記事単位で分かるように表示します。'],
  ['古い情報へ注意を出す', '最終確認から90日を仮の目安とし、再確認が必要な記事には注意表示を出します。正式な期限は運営体制確定後に見直します。'],
  ['訂正の経路を用意する', '誤り報告と提供元からの反論を受け付け、訂正履歴を残します。受付窓口は一般公開前に設置します。'],
];

export default function PolicyPage() {
  return <main><SiteHeader /><section className="policy-hero"><div className="shell"><p className="eyebrow">EDITORIAL POLICY</p><h1>おすすめする前に、<br />確かめた範囲を公開する。</h1><p>このページはプロトタイプ時点の編集原則です。実際の掲載開始前に、検証体制、更新期限、訂正・反論対応、収益モデルを確定します。</p><div className="policy-status"><p><b>現在の広告・アフィリエイト</b><span>なし</span></p><p><b>掲載提供元との金銭関係</b><span>なし</span></p><p><b>訂正受付</b><span className="pending">一般公開前に設置</span></p></div></div></section><section className="policy-list shell">{policies.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</section><section className="policy-note"><div className="shell"><p className="mini-label">CURRENT STATUS</p><h2>現在は、メディア体験を確認するためのプロトタイプです。</h2><p>個別MCPの実機評価や安全性審査は完了していません。公開情報だけを根拠に導入を確定しないでください。</p></div></section><SiteFooter /></main>;
}
