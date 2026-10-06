"""note記事のMarkdownを、note風の見た目のHTMLプレビューに変換する。"""
import base64, html, re, sys
from pathlib import Path

md_path, img_path, out_path = map(Path, sys.argv[1:4])
lines = md_path.read_text(encoding="utf-8").splitlines()
img_b64 = base64.b64encode(img_path.read_bytes()).decode()

def inline(t):
    t = html.escape(t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<!\*)\*(?!\*)(.+?)\*", r"<em>\1</em>", t)
    return t

title = lines[0].lstrip("# ").strip()
body, para = [], []

def flush():
    if para:
        body.append("<p>" + "<br>".join(inline(l) for l in para) + "</p>")
        para.clear()

for line in lines[1:]:
    s = line.strip()
    if not s:
        flush()
    elif s == "---":
        flush(); body.append("<hr>")
    elif s.startswith("### "):
        flush(); body.append(f"<h3>{inline(s[4:])}</h3>")
    elif s.startswith("## "):
        flush(); body.append(f"<h2>{inline(s[3:])}</h2>")
    elif s.startswith("（ここに比較表の画像を挿入"):
        flush()
        body.append(f'<figure><img src="data:image/png;base64,{img_b64}" alt="大阪の美容室・サロン向け不動産会社3社（iYエステート、ベンチャースペースラボ、BGパートナーズ）の比較表"><figcaption>大阪で美容室・サロンの物件を扱う不動産会社3社を、拠点・強み・物件のタイプなど同じ項目で比較</figcaption></figure>')
    elif re.fullmatch(r"(#\S+\s*)+", s):
        flush()
        tags = "".join(f'<span class="tag">{html.escape(t)}</span>' for t in s.split())
        body.append(f'<div class="tags">{tags}</div>')
    elif s.startswith("※本記事はPR"):
        flush(); body.append(f'<p class="pr">{inline(s)}</p>')
    else:
        para.append(s)
flush()

page = f"""<!doctype html>
<html lang="ja"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(title)}｜note プレビュー</title>
<style>
:root {{ --text:#08131a; --sub:#6b7275; --line:#e6e6e6; --accent:#41c9b4; --bg:#ffffff; --soft:#f5f8fa; }}
* {{ box-sizing:border-box; }}
body {{ margin:0; background:var(--bg); color:var(--text);
  font-family:"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP","IPAGothic",Meiryo,sans-serif; }}
.topbar {{ border-bottom:1px solid var(--line); padding:14px 16px; font-weight:700; font-size:22px; letter-spacing:.02em; }}
.topbar span {{ font-size:12px; color:var(--sub); font-weight:400; margin-left:10px; }}
main {{ max-width:620px; margin:0 auto; padding:40px 16px 80px; }}
h1 {{ font-size:28px; line-height:1.5; margin:0 0 20px; font-weight:700; }}
.author {{ display:flex; align-items:center; gap:10px; margin-bottom:36px; color:var(--sub); font-size:14px; }}
.avatar {{ width:36px; height:36px; border-radius:50%; background:#d7e3e0; }}
.author b {{ color:var(--text); font-weight:600; display:block; }}
p {{ font-size:17px; line-height:2; margin:0 0 28px; word-break:break-word; }}
.pr {{ font-size:13px; color:var(--sub); background:var(--soft); padding:8px 12px; border-radius:4px; display:inline-block; }}
h2 {{ font-size:23px; line-height:1.6; margin:56px 0 24px; font-weight:700; }}
h3 {{ font-size:19px; line-height:1.6; margin:40px 0 16px; font-weight:700; }}
hr {{ border:0; border-top:1px solid var(--line); margin:40px auto; width:100%; }}
strong {{ font-weight:700; }}
em {{ font-style:normal; font-size:14px; color:var(--sub); }}
figure {{ margin:0 0 28px; }}
figcaption {{ font-size:13px; color:var(--sub); text-align:center; margin-top:8px; line-height:1.6; }}
figure img {{ width:100%; height:auto; display:block; border:1px solid var(--line); }}
.tags {{ display:flex; flex-wrap:wrap; gap:8px; margin-top:24px; }}
.tag {{ background:var(--soft); color:#333; border-radius:20px; padding:6px 14px; font-size:14px; }}
.actions {{ display:flex; gap:24px; border-top:1px solid var(--line); border-bottom:1px solid var(--line);
  padding:16px 4px; margin-top:40px; color:var(--sub); font-size:14px; }}
@media (max-width:600px) {{ h1 {{ font-size:23px; }} h2 {{ font-size:20px; }} p {{ font-size:16px; }} }}
</style></head>
<body>
<div class="topbar">note<span>プレビュー（実際の投稿画面とは細部が異なります）</span></div>
<main>
<h1>{html.escape(title)}</h1>
<div class="author"><div class="avatar"></div><div><b>著者名</b>2026年10月6日</div></div>
{chr(10).join(body)}
<div class="actions"><span>♡ スキ</span><span>💬 コメント</span><span>↗ シェア</span></div>
</main>
</body></html>
"""
out_path.write_text(page, encoding="utf-8")
print(out_path)
