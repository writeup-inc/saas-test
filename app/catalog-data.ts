export type Guide = {
  slug: string;
  mark: string;
  name: string;
  category: string;
  description: string;
  access: string;
  risk: 'read' | 'action';
  accent: string;
  purpose: string;
  bestFor: string[];
  notFor: string[];
  canDo: string[];
  cannotConfirm: string[];
  approvals: string[];
  dataFlow: string;
};

export const guides: Guide[] = [
  {
    slug: 'google-drive', mark: 'G', name: 'Google Drive MCP', category: '文書・ナレッジ', accent: '#247653', access: '読み取り中心から', risk: 'read',
    description: '社内資料を探し、読み取り、必要な情報を業務判断へつなげる。',
    purpose: 'Driveに分散した提案書、議事録、社内資料をAIから横断的に扱うための接続候補です。',
    bestFor: ['資料探しに時間がかかっている', '会議前の情報収集を短くしたい', '複数資料から要点をまとめたい'],
    notFor: ['閲覧権限の棚卸しができていない', '機密文書を一律にAIへ渡したい', '出典確認なしで自動回答したい'],
    canDo: ['権限のあるファイルを検索する', '文書の内容を読み取り要約する', '複数資料の共通点や差分を整理する'],
    cannotConfirm: ['採用するMCP実装の提供元と保守状態', '共有ドライブを含む対応範囲', 'ファイル更新・作成機能の有無'],
    approvals: ['初回は限定フォルダだけを許可', '外部共有や更新操作は人が確認', '重要判断では原文リンクを再確認'],
    dataFlow: 'AIクライアント → 選定したMCPサーバー → 許可済みのGoogle Drive領域。認証方式と保存有無は実装ごとに確認します。',
  },
  {
    slug: 'slack', mark: 'S', name: 'Slack MCP', category: '営業・顧客対応', accent: '#5d47a8', access: '送信権限に注意', risk: 'action',
    description: '会話や決定事項を見つけ、チームの状況把握を速くする。',
    purpose: 'Slackの会話から決定、担当、期限を探し、確認や共有を支援するための接続候補です。',
    bestFor: ['重要な決定が会話に埋もれる', '商談前に過去のやり取りを確認したい', 'チームの状況を短く把握したい'],
    notFor: ['全チャンネルを無条件で検索させたい', '人の確認なしに投稿させたい', '保持ポリシーが未整理'],
    canDo: ['許可された会話を検索する', '決定事項や未対応事項を整理する', '共有文面の下書きを作る'],
    cannotConfirm: ['投稿・編集・削除ツールの有無', 'DMとプライベートチャンネルの対象範囲', '採用実装のデータ保持方針'],
    approvals: ['投稿は初期運用では下書き止まり', '送信先・本文・添付を人が確認', '顧客情報を含む会話は対象を限定'],
    dataFlow: 'AIクライアント → 選定したMCPサーバー → 許可済みSlackワークスペース。送信機能の有無と権限範囲を個別に確認します。',
  },
  {
    slug: 'notion', mark: 'N', name: 'Notion MCP', category: '文書・ナレッジ', accent: '#26322c', access: 'ページ権限を限定', risk: 'action',
    description: '社内Wikiやプロジェクト情報を、必要なときにAIから引き出す。',
    purpose: 'Notionに蓄積した規程、議事録、プロジェクト情報を検索・整理するための接続候補です。',
    bestFor: ['社内Wikiが育っている', 'ナレッジ検索を会話型にしたい', '定型報告の材料を集めたい'],
    notFor: ['ページ構造と権限が未整理', '原本確認なしで規程回答を自動化したい', '全社員の個人ページまで接続したい'],
    canDo: ['許可ページの検索と読み取り', '複数ページの要約と整理', '記事・議事録の下書き作成支援'],
    cannotConfirm: ['データベース更新の対応範囲', '添付ファイルの扱い', '採用する実装の公式性'],
    approvals: ['最初は検証用ページだけを接続', '更新は人が差分を確認', '規程回答には原文リンクを添える'],
    dataFlow: 'AIクライアント → 選定したMCPサーバー → 明示的に共有したNotionページ。書き込み可否は採用実装で確認します。',
  },
  {
    slug: 'github', mark: 'GH', name: 'GitHub MCP', category: '開発・サイト運用', accent: '#27313b', access: '読み書きあり', risk: 'action',
    description: '開発状況や課題を読み解き、修正やレビューの入口をつくる。',
    purpose: 'リポジトリ、Issue、Pull RequestなどをAIから参照し、開発の確認や作業を支援する接続候補です。',
    bestFor: ['開発状況を経営側も把握したい', 'Issue整理を速くしたい', 'レビュー準備を効率化したい'],
    notFor: ['本番リポジトリへ広い権限を即時付与したい', 'レビューなしでマージしたい', '秘密情報がコードに混在している'],
    canDo: ['コードやIssueを参照する', '変更案やレビュー観点を整理する', '実装によってはIssueやPRを操作する'],
    cannotConfirm: ['利用できるツールの完全な一覧', '組織・リポジトリ単位の最小権限', 'マージや削除操作の可否'],
    approvals: ['最初は読み取り専用リポジトリ', '変更・PR・マージは人が確認', '本番反映は別の承認フローを維持'],
    dataFlow: 'AIクライアント → 選定したMCPサーバー → 許可したGitHub組織・リポジトリ。トークン権限を最小化します。',
  },
  {
    slug: 'playwright', mark: 'PW', name: 'Playwright MCP', category: '開発・サイト運用', accent: '#2d7e62', access: 'ブラウザ操作あり', risk: 'action',
    description: 'Web画面を開き、表示確認や定型操作をAIと一緒に進める。',
    purpose: 'ブラウザ上の表示確認や操作をAIから実行し、サイトQAや定型確認を支援する接続候補です。',
    bestFor: ['公開前の画面確認を効率化したい', '複数画面の同じ確認を繰り返す', '操作手順を再現可能にしたい'],
    notFor: ['購入・送信を無承認で行わせたい', '規約上自動操作できないサイト', '認証情報の保管方法が未定'],
    canDo: ['ページを開いて要素を確認する', 'フォーム入力や画面遷移を試す', '表示状態の検証を支援する'],
    cannotConfirm: ['対象サイトで許される自動操作', '認証セッションの安全な保管方法', '採用実装が扱うブラウザ範囲'],
    approvals: ['送信・購入・公開の直前で停止', '対象サイトの規約を確認', '検証アカウントと本番を分離'],
    dataFlow: 'AIクライアント → ブラウザ操作MCP → 対象Webサイト。入力内容や画面情報の扱いを事前に決めます。',
  },
  {
    slug: 'postgresql', mark: 'PG', name: 'PostgreSQL MCP', category: 'データ・分析', accent: '#356584', access: 'DB権限に注意', risk: 'read',
    description: '業務データを照会し、集計や状況把握の下準備を短くする。',
    purpose: 'PostgreSQLのデータをAIから照会し、分析やレポート作成を支援する接続候補です。',
    bestFor: ['定型集計に時間がかかる', '自然言語でデータ確認したい', '読み取り用DBを用意できる'],
    notFor: ['本番DBへ管理者権限で接続したい', '個人情報を無制限に返したい', 'クエリ負荷を監視できない'],
    canDo: ['許可テーブルの構造を確認する', '読み取りクエリを実行する', '集計結果の意味を説明する'],
    cannotConfirm: ['書き込み操作の有無', 'クエリ制限とタイムアウト', '採用実装のログ・保持方針'],
    approvals: ['読み取り専用ユーザーを作成', '対象スキーマと行を限定', '重要数値は元クエリと照合'],
    dataFlow: 'AIクライアント → 選定したMCPサーバー → 読み取り用DBまたはレプリカ。個人情報と本番負荷を分離します。',
  },
  {
    slug: 'calendar', mark: 'C', name: 'Calendar MCP', category: '社内業務', accent: '#b05b39', access: '予定変更に注意', risk: 'action',
    description: '予定を確認し、会議候補の整理や準備を支援する。',
    purpose: 'カレンダーをAIから参照し、日程調整や会議準備を助けるための接続候補です。',
    bestFor: ['会議調整が多い', '予定前の準備を定型化したい', '空き時間の確認を速くしたい'],
    notFor: ['人の確認なしに予定を確定したい', '全社員の予定を無制限に公開したい', 'タイムゾーン運用が曖昧'],
    canDo: ['予定と空き時間を確認する', '候補日時を整理する', '会議準備のチェックリストを作る'],
    cannotConfirm: ['予定作成・変更・削除の対応範囲', '参加者への通知仕様', '対象カレンダーの共有範囲'],
    approvals: ['予定の作成・変更は人が確定', '社外参加者と時刻を再確認', '非公開予定の扱いを決める'],
    dataFlow: 'AIクライアント → 選定したMCPサーバー → 許可済みカレンダー。変更系ツールは初期段階で無効化または承認必須にします。',
  },
  {
    slug: 'stripe', mark: 'ST', name: 'Stripe MCP', category: '経理・決済', accent: '#6250c7', access: '金銭操作に注意', risk: 'action',
    description: '決済情報の確認や顧客対応の下調べを、会話から始める。',
    purpose: '決済・請求情報の検索や説明を支援する接続候補です。金銭に関わるため、特に慎重な権限設計が必要です。',
    bestFor: ['決済状況の照会が多い', 'サポート前の確認を速くしたい', 'テスト環境から試せる'],
    notFor: ['返金や請求変更を無承認で実行したい', '本番秘密鍵を広く共有したい', '操作ログを残せない'],
    canDo: ['許可された決済情報を照会する', '請求状態を整理する', '顧客対応文の下書きを作る'],
    cannotConfirm: ['返金・請求・顧客更新の実行可否', '利用できるAPIスコープ', '採用実装の監査ログ範囲'],
    approvals: ['必ずテストモードから開始', '返金・請求・顧客変更は人が最終実行', '秘密情報を会話へ貼り付けない'],
    dataFlow: 'AIクライアント → 選定したMCPサーバー → 制限付きStripe環境。金銭操作は初期段階では読み取りと下書きに限定します。',
  },
];

export const categories = ['すべて', ...Array.from(new Set(guides.map((guide) => guide.category)))];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
