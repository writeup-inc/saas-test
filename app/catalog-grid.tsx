'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { categories, guides } from './catalog-data';

export default function CatalogGrid() {
  const [category, setCategory] = useState('すべて');
  const [operation, setOperation] = useState<'all' | 'read' | 'action'>('all');
  const visibleGuides = useMemo(() => guides.filter((guide) => (category === 'すべて' || guide.category === category) && (operation === 'all' || guide.risk === operation)), [category, operation]);

  return (
    <>
      <div className="filter-stack">
        <div className="filter-group"><span>業務</span><div className="filter-row" aria-label="業務カテゴリ">
          {categories.map((item) => <button className={`filter ${category === item ? 'active' : ''}`} type="button" key={item} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}
        </div></div>
        <div className="filter-group"><span>操作</span><div className="filter-row" aria-label="操作の範囲">
          <button className={`filter ${operation === 'all' ? 'active' : ''}`} type="button" onClick={() => setOperation('all')} aria-pressed={operation === 'all'}>すべて</button>
          <button className={`filter ${operation === 'read' ? 'active' : ''}`} type="button" onClick={() => setOperation('read')} aria-pressed={operation === 'read'}>読み取り中心</button>
          <button className={`filter ${operation === 'action' ? 'active' : ''}`} type="button" onClick={() => setOperation('action')} aria-pressed={operation === 'action'}>実行操作あり</button>
        </div></div>
      </div>
      <div className="result-line" aria-live="polite"><span>{visibleGuides.length}</span> guides <small>全候補で人の確認を残す前提</small></div>
      <div className="guide-grid">
        {visibleGuides.map((guide) => (
          <Link href={`/guides/${guide.slug}`} className="guide-card" key={guide.slug}>
            <div className="card-poster">
              <div className="poster-toolbar"><span>0{guides.indexOf(guide) + 1}</span><span>CANDIDATE</span></div>
              <span className="poster-mark">{guide.mark}</span>
              <div className="poster-caption"><span>{guide.category}</span><h3>{guide.name}</h3></div>
            </div>
            <div className="card-meta">
              <div className="card-status"><span className="prototype-state"><i /> 実機未検証</span></div>
              <p className="card-description">{guide.description}</p>
              <div className="card-tags"><span>{guide.access}</span></div>
              <span className="card-link">導入前チェック <b>↗</b></span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
