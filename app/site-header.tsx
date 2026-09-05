'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function SiteHeader() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let frameId = 0;

    const handleScroll = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0);
        const delta = currentScrollY - lastScrollY.current;

        if (currentScrollY <= 80) {
          setIsHidden(false);
          lastScrollY.current = currentScrollY;
        } else if (Math.abs(delta) >= 8) {
          setIsHidden(delta > 0);
          lastScrollY.current = currentScrollY;
        }

        frameId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <header className={`site-header${isHidden ? ' site-header--hidden' : ''}`}>
      <div className="shell nav-inner">
        <Link className="brand" href="/" aria-label="MCP導入ガイド ホーム"><span className="brand-mark">M</span><span>MCP導入ガイド</span></Link>
        <nav className="top-nav" aria-label="メインナビゲーション"><Link href="/#guides">MCPを探す</Link><Link href="/policy">編集方針</Link><span className="nav-status"><i /> PROTOTYPE</span></nav>
      </div>
    </header>
  );
}
