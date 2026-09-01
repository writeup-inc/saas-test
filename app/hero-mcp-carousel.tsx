'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { guides } from './catalog-data';
import McpIllustration from './mcp-illustration';

const featuredSlugs = ['google-drive', 'slack', 'notion'];
const featuredGuides = featuredSlugs.map((slug) => guides.find((guide) => guide.slug === slug)).filter((guide) => guide !== undefined);

export default function HeroMcpCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const guide = featuredGuides[activeIndex];

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredGuides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [activeIndex, paused]);

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + featuredGuides.length) % featuredGuides.length);
  };

  if (!guide) return null;

  return (
    <aside className="hero-panel" aria-label="おすすめMCP">
      <div className="panel-head">
        <p className="panel-kicker">FEATURED MCP</p>
        <span>{String(activeIndex + 1).padStart(2, '0')} / 03</span>
      </div>

      <div className="featured-mcp" key={guide.slug}>
        <Link className="featured-visual" href={`/guides/${guide.slug}`} aria-label={`${guide.name}の導入前ガイドを見る`}>
          <McpIllustration slug={guide.slug} />
          <span className="featured-candidate">PICK {String(activeIndex + 1).padStart(2, '0')}</span>
        </Link>
        <div className="featured-copy">
          <div className="featured-labels"><span>{guide.category}</span><span><i /> 実機未検証</span></div>
          <h2>{guide.name}</h2>
          <p>{guide.cardDescription}</p>
          <div className="featured-footer">
            <span>{guide.access}</span>
            <Link href={`/guides/${guide.slug}`}>詳しく見る <b>↗</b></Link>
          </div>
        </div>
      </div>

      <div className="carousel-controls">
        <div className="carousel-dots" aria-label="おすすめMCPを選択">
          {featuredGuides.map((item, index) => (
            <button
              className={index === activeIndex ? 'active' : ''}
              type="button"
              key={item.slug}
              onClick={() => setActiveIndex(index)}
              aria-label={`${item.name}を表示`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
        <div className="carousel-buttons">
          <button type="button" onClick={() => move(-1)} aria-label="前のおすすめMCP">←</button>
          <button className="pause-button" type="button" onClick={() => setPaused((current) => !current)} aria-label={paused ? '自動切り替えを再開' : '自動切り替えを停止'}>{paused ? '再開' : '停止'}</button>
          <button type="button" onClick={() => move(1)} aria-label="次のおすすめMCP">→</button>
        </div>
      </div>
    </aside>
  );
}
