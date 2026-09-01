'use client';

import { useState } from 'react';

export default function ShareGuide({ name, approvals, unknowns }: { name: string; approvals: string[]; unknowns: string[] }) {
  const [label, setLabel] = useState('担当者向け依頼文をコピー');
  async function copyBrief() {
    const text = [`【${name} 検証依頼】`, `記事: ${window.location.href}`, '', '■ 小さく試す範囲', '検証用データまたは限定領域。最初は読み取り中心。', '', '■ 停止条件', '想定外の取得・操作・外部送信が発生した場合は停止。', '', '■ 人が確認すること', ...approvals.map((item) => `・${item}`), '', '■ 導入前に確認すること', ...unknowns.map((item) => `・${item}`)].join('\n');
    await navigator.clipboard.writeText(text);
    setLabel('依頼文をコピーしました');
    setTimeout(() => setLabel('担当者向け依頼文をコピー'), 2200);
  }
  return <><button className="secondary-button" type="button" onClick={copyBrief}>{label} <span>⌘</span></button><button className="print-button" type="button" onClick={() => window.print()}>印刷 / PDF <span>↗</span></button></>;
}
