# saas-test

SaaS検証用リポジトリ。

## 公開中のLP

### MCP導入ガイド

中小企業の社長が、業務MCPを「人気」ではなく「自社で使ってよいか」で選び、小さく試すための導入判断メディアです。

- 公開URL: https://writeup-inc.github.io/saas-test/
- トップページ: MCP一覧と絞り込み
- 詳細ページ: 権限、承認ポイント、導入手順、検証情報
- 現在の状態: 掲載候補8件、実機検証済み0件のプロトタイプ

`main`へ変更がマージされると、GitHub Actionsが自動でGitHub Pagesへ公開します。

## 運用ルール

複数人で触ります。以下は**技術的に強制されていません**（GitHub Free プランのため）。
守るかどうかは各自の運用に委ねられています。事故を防ぐため必ず読んでください。

### 1. `main` に直接 push しない

必ずブランチを切って、Pull Request 経由でマージします。

```
git switch -c feat/やること
# 作業する
git add -A
git commit -m "何をしたか"
git push -u origin feat/やること
# GitHub 上で Pull Request を作成する
```

ブランチ名の頭は用途で揃えます。

| 接頭辞 | 用途 |
|---|---|
| `feat/` | 機能追加 |
| `fix/` | バグ修正 |
| `docs/` | ドキュメントのみ |
| `chore/` | 設定・雑務 |

### 2. 秘密情報をコミットしない

APIキー・パスワード・アクセストークンをファイルに直接書かないこと。
`.env` は `.gitignore` 済みですが、**別名のファイルに書けば普通に入ってしまいます**。

一度コミットすると履歴に残り、後から消すのが最も面倒な事故になります。
push 前に `git diff --cached` で必ず目視してください。

環境変数を増やしたら `.env.example` にキー名だけ（値は空で）追記します。

### 3. Pull Request は誰か1人に見てもらう

レビュー必須の設定はプランの都合で入れられません。声かけベースで回します。

## セットアップ

```
git clone https://github.com/writeup-inc/saas-test.git
cd saas-test
cp .env.example .env   # 値は各自で埋める
npm install
npm run dev
```

公開用ビルドを手元で確認する場合:

```
npm run build:pages
```

## メモ

- ブランチ保護（main への直push禁止・レビュー必須）は GitHub Team プラン（1人 $4/月）で有効化できます。必要になったら Owner に相談してください。
