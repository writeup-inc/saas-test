import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Layers3,
  MessageSquareText,
  PackageCheck,
  PenTool,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react';

import { AgencyHeader } from './agency-header';

const process = [
  { no: '01', title: '見極める', text: '標準範囲で受ける案件か、最初に判断する。', icon: SearchCheck },
  { no: '02', title: '聞く', text: '事業と代表者、2つの角度から話を聞く。', icon: MessageSquareText },
  { no: '03', title: '組み立てる', text: '信頼と共感に情報を分け、構成と原稿をつくる。', icon: Layers3 },
  { no: '04', title: 'つくる', text: 'Codexを中核に、デザインと実装を進める。', icon: PenTool },
  { no: '05', title: '確かめる', text: '事実、権利、表示、導線を人が確認する。', icon: ShieldCheck },
  { no: '06', title: '納める', text: '顧客承認後に公開し、ソースと手順を渡す。', icon: PackageCheck },
];

const faq = [
  ['Web制作の経験がなくても参加できますか？', '参加できます。ただし、顧客対応・事実確認・最終承認は自社で担っていただきます。初回3案件は納品前レビューを必須とする想定です。'],
  ['Web制作以外の案件も本部へ依頼できますか？', 'はい。広告運用、AI開発、業務のAI化、システム連携などは、本部へ相談・依頼できます。本部側で成約した場合は、受注金額のおよそ10%を紹介マージンとして還元する設計です。対象案件、料率、支払時期、担当範囲は案件ごとの契約で確定します。'],
  ['本部が仕事を紹介してくれますか？', '仕事の紹介や受注を保証するサービスではありません。まずは既存顧客から寄せられるWeb相談を、自社の商品として受けられる体制づくりを支援します。'],
  ['36万円で売れることは保証されますか？', '保証されません。36万円は、会社サイトと共感型LPの2ページ、取材・構成・制作・確認・公開を含む標準販売価格の設計例です。'],
  ['AIサービスの利用料は含まれますか？', '含まれません。利用するAI、ドメイン、ホスティング、有料素材などの外部費用は各社でご契約いただく想定です。'],
  ['WordPressやEC、予約サイトも作れますか？', '初期の標準商品には含めません。CMS、EC、予約、会員、決済、外部システム連携は、個別見積または対象外として判断します。'],
  ['制作物の責任は誰が持ちますか？', 'エンド顧客への提案・契約・納品の主体はパートナー企業です。本部は手順と品質レビューを提供します。詳細な責任分界は正式契約で明示します。'],
];

const agencySkills = [
  { no: '01', group: 'SELL', title: '案件診断', text: 'いま受けるべき相談か、標準範囲と採算から見極める。' },
  { no: '02', group: 'SELL', title: '提案・見積', text: '商品、価格、範囲を揃え、自社名義の提案へ落とし込む。' },
  { no: '03', group: 'HEAR', title: '事業ヒアリング', text: '事業内容、強み、実績、顧客像を90分で聞き切る。' },
  { no: '04', group: 'HEAR', title: '物語ヒアリング', text: '代表者の経歴、原体験、仕事への想いを言葉にする。' },
  { no: '05', group: 'DESIGN', title: '情報設計', text: '信頼に必要な情報を選び、縦長1ページへ整理する。' },
  { no: '06', group: 'DESIGN', title: '構成・コピー', text: '論理と共感を分け、見出しと原稿の草案をつくる。' },
  { no: '07', group: 'BUILD', title: 'デザイン生成', text: '業種と目的に合わせ、サイト固有の表現を設計する。' },
  { no: '08', group: 'BUILD', title: 'Codex実装', text: 'CodexでレスポンシブなWebページをコードにする。' },
  { no: '09', group: 'CHECK', title: '表示・導線確認', text: 'スマホ表示、リンク、問い合わせ導線を機械と人で確認。' },
  { no: '10', group: 'CHECK', title: '事実・権利確認', text: '事実、画像、引用、表現リスクを納品前に点検する。' },
  { no: '11', group: 'DELIVER', title: '顧客承認', text: '確認事項を整理し、公開前の承認を記録に残す。' },
  { no: '12', group: 'DELIVER', title: '公開・納品', text: '公開、ソース、更新手順まで一式で引き渡す。' },
];

const demandSignals = [
  {
    no: '01',
    value: '22.5',
    unit: '%',
    title: 'まだ、サイトがない。',
    text: '資本金1,000万円未満のインターネット利用企業では、ホームページ未開設が22.5%。',
    note: '総務省「令和6年通信利用動向調査」企業編（2024年8月末時点）',
    href: 'https://www.e-stat.go.jp/stat-search/files?cycle=0&layout=datalist&month=0&page=1&stat_infid=000040278555&tclass1=000001228812&tclass2val=0&toukei=00200356&tstat=000001228811&year=20240',
  },
  {
    no: '02',
    value: '144,757',
    unit: '件',
    title: '毎年、会社が生まれる。',
    text: '2024年の会社の設立登記。新しい会社には、信頼を伝える最初のWeb拠点が必要になる。',
    note: '法務省「令和6年における登記の概況」',
    href: 'https://www.moj.go.jp/content/001447340.pdf',
  },
  {
    no: '03',
    value: '約6',
    unit: '割',
    title: 'つくった後も、止まっている。',
    text: '小規模事業者のホームページなどの更新頻度は、約6割が「不定期」。更新・再設計にも仕事がある。',
    note: '日本商工会議所「2016年版小規模企業白書（概要）」',
    href: 'https://ab.jcci.or.jp/article/43509/',
  },
  {
    no: '04',
    value: '3',
    unit: '接点',
    title: '1社に、入口はひとつではない。',
    text: '白書掲載事例では、SNSから自社HP、さらにECへ発信・信頼・販売の接点を拡張。ページ需要は一度きりではない。',
    note: '中小企業庁「2025年版 小規模企業白書」掲載事例',
    href: 'https://www.chusho.meti.go.jp/pamflet/hakusyo/2025/shokibo/b2_1_1.html',
  },
];

export default function WebAgencyKitPage() {
  return (
    <main className="agency-page">
      <AgencyHeader />

      <section className="hero" id="top">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span />誰でもホームページ制作会社になれますパック</p>
            <h1>
              御社の中に、<br />
              <span>Web制作会社</span>を<br />
              <em>ひとつ。</em>
            </h1>
            <p className="hero-lead">
              「ホームページも頼めますか？」を、もう断らない。<br className="desktop-only" />
              Codexと12個の実務スキルを使って、既存顧客へ自社名義で<br className="desktop-only" />
              提案・制作・納品できる新事業をつくります。
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href="#entry">
                Web制作会社のつくり方を聞く <ArrowRight aria-hidden="true" />
              </a>
              <a className="text-link" href="#offer">販売する商品を見る</a>
            </div>
            <div className="hero-notes" aria-label="サービスの特徴">
              <span><Check aria-hidden="true" />既存顧客から始める</span>
              <span><Check aria-hidden="true" />自社名義で販売</span>
              <span><Check aria-hidden="true" />Codex＋12スキル</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="会社サイトと共感型LPの2つの商品イメージ">
            <div className="visual-caption">
              <span>新規採用から始めなくていい。</span>
              <strong>必要なのは、売って納める型。</strong>
            </div>
            <article className="browser-card logic-card">
              <div className="browser-bar"><i /><i /><i /><small>COMPANY SITE</small></div>
              <div className="browser-body">
                <p>LOGIC / 信頼</p>
                <h2>会社の強さを、<br />まっすぐ伝える。</h2>
                <div className="metric-row"><b>事業</b><b>実績</b><b>事例</b></div>
                <div className="line-set"><span /><span /><span /></div>
              </div>
            </article>
            <article className="browser-card emotion-card">
              <div className="browser-bar"><i /><i /><i /><small>BRAND STORY</small></div>
              <div className="browser-body">
                <p>EMOTION / 共感</p>
                <h2>この人だから、<br />お願いしたい。</h2>
                <blockquote>「なぜ、この仕事を続けるのか。」</blockquote>
              </div>
            </article>
            <div className="price-chip">
              <small>標準販売価格の設計例</small>
              <strong>36<em>万円</em></strong>
              <span>会社サイト＋共感型LP</span>
            </div>
          </div>
        </div>
      </section>

      <section className="outcome-strip" aria-label="Web制作事業を持つ3つの価値">
        <div className="shell outcome-grid">
          <article><span>01</span><div><strong>相談を、売上に変える。</strong><p>これまで断っていたWeb相談を、自社の商品として提案する。</p></div></article>
          <article><span>02</span><div><strong>既存顧客に、もう一品。</strong><p>新規開拓だけに頼らず、信頼関係のある取引先から始める。</p></div></article>
          <article><span>03</span><div><strong>制作力を、社内に残す。</strong><p>紹介して終わらず、提案と制作のノウハウを自社の資産にする。</p></div></article>
        </div>
      </section>

      <section className="problem-section">
        <div className="shell problem-grid">
          <div className="section-index"><span>01</span><small>THE MISSED OPPORTUNITY</small></div>
          <div>
            <p className="section-kicker">その相談、他社へ渡していませんか。</p>
            <h2 className="display-title">顧客はいる。<br />商品だけがない。</h2>
          </div>
          <div className="problem-copy">
            <p>「ホームページもお願いできますか？」</p>
            <p>社内に専門人材がいない。外注先の品質や見積基準もわからない。だから断るか、紹介して終わってしまう。</p>
            <strong>制作会社をゼロからつくるのではなく、必要な機能だけを御社に実装します。</strong>
          </div>
        </div>
      </section>

      <section className="difference-section section-pad" id="difference">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">WHAT MAKES IT DIFFERENT</p>
              <h2 className="display-title">人を雇うでも、<br />丸投げでもない。</h2>
            </div>
            <p>御社の中に、Web制作会社の機能をつくる。<br />営業・制作・品質管理を、自社で回せる形にします。</p>
          </div>
          <div className="compare-grid">
            <article className="compare-card quiet">
              <span>LEARN</span><h3>AI制作講座</h3><p>作り方を学ぶ</p>
              <ul><li>営業は自分で考える</li><li>契約範囲は自分で決める</li><li>納品品質は自分次第</li></ul>
            </article>
            <article className="compare-card quiet">
              <span>REFER</span><h3>紹介代理店</h3><p>案件を本部へ渡す</p>
              <ul><li>制作は本部が担当</li><li>紹介手数料を受け取る</li><li>制作能力は残りにくい</li></ul>
            </article>
            <article className="compare-card active">
              <div className="recommended">YOUR WEB COMPANY</div>
              <span>OPERATE</span><h3>自社の制作会社</h3><p>提案から納品まで自社で</p>
              <ul><li><CheckCircle2 />自社名義で提案・納品</li><li><CheckCircle2 />商品と標準範囲がある</li><li><CheckCircle2 />制作能力が社内に残る</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="offer-section section-pad" id="offer">
        <div className="shell">
          <div className="section-heading centered-heading">
            <p className="section-kicker">THE PRODUCT YOU SELL</p>
            <h2 className="display-title">最初の商談から、<br />売る商品に迷わない。</h2>
            <p>まずは、企業に必要な2つのWebサイトに絞る。左脳で納得し、右脳で惹かれるセット商品です。</p>
          </div>
          <div className="two-sites">
            <article className="site-product logic-product">
              <div className="product-no">01</div>
              <div className="product-label">LOGIC / 信頼</div>
              <h3>論理型<br />会社サイト</h3>
              <p>事業内容、実績、選ばれる理由、事例、会社情報。取引先や審査担当者が、会社をまっすぐ理解できる縦長1ページ。</p>
              <ul><li>最大8セクション</li><li>事業ヒアリング90分</li><li>基本SEO・スマホ対応</li></ul>
            </article>
            <div className="plus-mark">＋</div>
            <article className="site-product emotion-product">
              <div className="product-no">02</div>
              <div className="product-label">EMOTION / 共感</div>
              <h3>共感型<br />ブランドLP</h3>
              <p>創業の背景、代表者の経験、仕事への想い、顧客との物語。「なぜ、この会社なのか」を伝えるもう一つの入口。</p>
              <ul><li>最大8セクション</li><li>ストーリー取材60分</li><li>写真と余白を活かす設計</li></ul>
            </article>
          </div>
          <div className="offer-price-row">
            <div><small>STANDARD PRICE MODEL</small><strong>36万円<em>・税別</em></strong></div>
            <p>情報設計、原稿草案、デザイン、実装、品質確認、公開まで。<br />販売価格や受注を保証するものではありません。</p>
          </div>
        </div>
      </section>

      <section className="system-section section-pad" id="system">
        <div className="shell">
          <div className="section-heading split-heading light-heading">
            <div><p className="section-kicker">THE OPERATING SYSTEM</p><h2 className="display-title">Codexを中核に、<br />仕事を仕組みに。</h2></div>
            <p>制作会社の仕事を、6つの工程に分解。<br />12個の実務スキルが、判断から納品まで支えます。</p>
          </div>
          <div className="process-grid">
            {process.map(({ no, title, text, icon: Icon }) => (
              <article className="process-card" key={no}>
                <div><Icon aria-hidden="true" /><span>{no}</span></div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
          <div className="update-band">
            <RefreshCw aria-hidden="true" />
            <div><small>12 SKILLS / MONTHLY UPDATE</small><strong>古くなったスキルは、すぐ回収。</strong></div>
            <p>常時12個を基本に、毎月数個を点検・修正・入れ替え。古くなったスキルは止め、新しいスキルを随時追加します。</p>
          </div>
        </div>
      </section>

      <section className="included-section section-pad" id="skills">
        <div className="shell">
          <div className="included-copy">
            <div>
              <p className="section-kicker">12 SKILLS, ONE WEB COMPANY</p>
              <h2 className="display-title">12個のスキルが、<br />あなたをWeb制作会社にする。</h2>
              <p>単なるプロンプト集ではありません。売る、聞く、設計する、つくる、確かめる、納める。その仕事を12個に分け、迷う順番まで揃えます。</p>
            </div>
            <div className="codex-core">
              <span>CORE ENGINE</span>
              <strong>Codex</strong>
              <p>会話だけで終わらず、デザインをコードにし、修正し、表示まで確かめる制作基盤。</p>
            </div>
          </div>
          <div className="included-list">
            {agencySkills.map(({ no, group, title, text }) => (
              <article key={no}>
                <div><small>{group}</small><span>{no}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sales-section section-pad" id="sales">
        <div className="shell">
          <div className="section-heading centered-heading">
            <p className="section-kicker">HOW TO SELL</p>
            <h2 className="display-title">商談で見せる順番まで、<br />型になっている。</h2>
            <p>完成品を先に無料で渡さない。診断で課題を共有し、商談で可能性を見せ、契約後に相手企業だけのサイトを仕上げます。</p>
          </div>
          <div className="sales-flow">
            <article><span>STEP 01 / DIAGNOSE</span><strong>無料の簡易診断</strong><p>いまのサイトで伝わっていない3点と、許諾済みの他社事例を提示する。</p></article>
            <article><span>STEP 02 / DEMONSTRATE</span><strong>商談中に部分デモ</strong><p>ファーストビューのラフやコピー候補を、その場で一緒につくる。</p></article>
            <article><span>STEP 03 / DELIVER</span><strong>契約後に完成・納品</strong><p>相手企業固有の全ページ、公開環境、ソース一式を仕上げて渡す。</p></article>
          </div>
        </div>
      </section>

      <section className="headquarters-section section-pad" id="headquarters">
        <div className="shell">
          <div className="section-heading split-heading headquarters-heading">
            <div>
              <p className="section-kicker">PARTNER BACKOFFICE</p>
              <h2 className="display-title">Webの外側まで、<br />本部が後ろにいる。</h2>
            </div>
            <p>顧客から相談されるのは、ホームページだけとは限りません。標準外の案件は断らず、本部へつなげられます。</p>
          </div>
          <div className="hq-services" aria-label="本部へ相談できる案件例">
            <span><BriefcaseBusiness aria-hidden="true" />広告運用・集客</span>
            <span><Sparkles aria-hidden="true" />AI開発・業務AI化</span>
            <span><FileCheck2 aria-hidden="true" />システム開発・外部連携</span>
          </div>
          <div className="hq-flow">
            <article>
              <span>01</span><UsersRound aria-hidden="true" />
              <strong>顧客から相談を受ける</strong>
              <p>まず課題を聞き、Web制作の標準範囲か、それ以外かを整理する。</p>
            </article>
            <ArrowRight aria-hidden="true" />
            <article>
              <span>02</span><BriefcaseBusiness aria-hidden="true" />
              <strong>本部へ相談・依頼する</strong>
              <p>本部が対応可否、専門チーム、見積、役割分担を案件ごとに確認する。</p>
            </article>
            <ArrowRight aria-hidden="true" />
            <article className="margin-card">
              <span>03 / 成約時の目安</span>
              <strong>約10<em>%</em></strong>
              <p>本部側で成約した場合、受注金額のおよそ10%を紹介マージンとして還元。</p>
            </article>
          </div>
          <p className="hq-note">※ 対象案件、紹介料率、支払時期、業務範囲は案件ごとの契約で確定します。すべての相談の受託・成約・還元を保証するものではありません。</p>
        </div>
      </section>

      <section className="quality-section">
        <div className="shell quality-grid">
          <div className="quality-statement"><span>AI</span><small>で速く。</small><br /><span>人</span><small>が責任を持つ。</small></div>
          <div className="quality-copy">
            <h2>AIの出力を、そのまま納品しません。</h2>
            <p>事実、画像の権利、スマートフォン表示、問い合わせ導線、基本SEO、顧客承認を確認します。対応範囲外の案件を「受けない」と判断することも、制作会社の仕事です。</p>
            <div className="quality-checks"><span><Check />事実確認</span><span><Check />権利確認</span><span><Check />表示確認</span><span><Check />顧客承認</span></div>
          </div>
        </div>
      </section>

      <section className="price-section section-pad" id="price">
        <div className="shell price-wrap">
          <div className="price-heading"><p className="section-kicker">FOUNDING PARTNERS</p><h2 className="display-title">御社のWeb制作会社、<br />ここから始める。</h2><p>いまの顧客基盤と体制で取り組めるか、説明会で一緒に確認します。</p></div>
          <div className="price-card">
            <div className="price-top"><span>企画時点の価格案</span><strong><small>月額</small>5<em>万円</em><i>税別</i></strong><p>初期費用 0円</p></div>
            <div className="price-body">
              <h3>含まれるもの</h3>
              <ul><li><Check />Codexを中核とする12個の実務スキル</li><li><Check />毎月の点検・修正・スキル入れ替え</li><li><Check />営業・契約範囲・納品テンプレート</li><li><Check />月1回のグループ実践会</li><li><Check />月1案件・90分相当のレビュー</li><li><Check />月5質問までの個別チャット</li></ul>
              <p className="price-caution">Codex等のAI利用料、ドメイン、ホスティング、有料素材、撮影、制作代行は含まれません。</p>
            </div>
          </div>
          <div className="eligibility-grid">
            <article className="fit"><h3><CheckCircle2 />向いている会社</h3><ul><li>すでに地域の法人顧客と取引がある</li><li>Web相談を受けるが、自社商品がない</li><li>顧客対応と最終確認を自社で担える</li><li>制作能力を社内に残したい</li></ul></article>
            <article className="not-fit"><h3><X />向いていない会社</h3><ul><li>本部から仕事を紹介してほしい</li><li>確実な売上や短期回収を求める</li><li>制作と顧客対応をすべて任せたい</li><li>権利・品質確認を省略したい</li></ul></article>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="shell faq-grid">
          <div><p className="section-kicker">FAQ</p><h2 className="display-title">始める前に、<br />確認したいこと。</h2></div>
          <div className="faq-list">
            {faq.map(([q, a], index) => (
              <details className="faq-item" key={q}>
                <summary className="faq-trigger"><span>Q{String(index + 1).padStart(2, '0')}</span><b className="faq-question">{q}</b><i aria-hidden="true" /></summary>
                <div className="faq-content">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="demand-section section-pad" aria-labelledby="demand-heading">
        <div className="shell">
          <div className="section-heading demand-heading">
            <p className="section-kicker">WEB PRODUCTION IS NOT OVER</p>
            <h2 className="display-title" id="demand-heading">Web制作は、<br />まだ終わっていない。</h2>
            <p>会社が生まれ、最初のサイトが必要になり、古い情報を更新し、事業ごとの入口が増えていく。需要は一度で終わりません。</p>
          </div>
          <div className="demand-story">
            {demandSignals.map(({ no, value, unit, title, text, note, href }, index) => (
              <article className="demand-card" key={no}>
                <div className="demand-step"><span>{no}</span>{index < demandSignals.length - 1 && <ArrowRight aria-hidden="true" />}</div>
                <div className="demand-number"><strong>{value}</strong><em>{unit}</em></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={href} target="_blank" rel="noreferrer">
                  出典：{note}<ExternalLink aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
          <p className="demand-caution">※ 各データは調査年・対象母集団が異なります。Web制作の市場規模、受注件数、売上を示すものでも、成果を保証するものでもありません。</p>
        </div>
      </section>

      <section className="entry-section" id="entry">
        <div className="shell entry-inner">
          <div>
            <p className="section-kicker">FIRST STEP</p>
            <h2>御社の中に、<br />Web制作会社をつくりませんか。</h2>
            <p>販売する2つのサイト、提供する運営キット、標準範囲、費用、責任分界をご説明します。まずは事業として成り立つかを一緒に確認します。</p>
          </div>
          <div className="entry-box">
            <span>先行パートナー説明会</span>
            <strong>まずは事業説明から</strong>
            <p>開催日時と申込先が決まり次第、こちらから受付を開始します。</p>
            <span className="disabled-cta" aria-disabled="true">説明会の受付を準備しています</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <div className="brand"><span className="brand-mark"><Layers3 /></span><span>ホームページ制作会社パック</span></div>
          <p>法人向け先行パートナー募集・企画段階</p>
          <small>売上・受注・検索順位等を保証するサービスではありません。</small>
        </div>
      </footer>
    </main>
  );
}
