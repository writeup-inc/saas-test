'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Layers3 } from 'lucide-react';

export function AgencyHeader() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateHeader = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 32) {
        setVisible(true);
      } else if (delta > 8) {
        setVisible(false);
      } else if (delta < -8) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateHeader);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${visible ? 'is-visible' : 'is-hidden'}`}>
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label="ホームページ制作会社パック トップへ">
          <span className="brand-mark"><Layers3 aria-hidden="true" /></span>
          <span>ホームページ制作会社パック</span>
        </a>
        <nav className="desktop-nav" aria-label="ページ内ナビゲーション">
          <a href="#difference">違い</a>
          <a href="#offer">売る商品</a>
          <a href="#system">仕組み</a>
          <a href="#price">料金</a>
        </nav>
        <a className="header-cta" href="#entry">
          事業説明を聞く <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
