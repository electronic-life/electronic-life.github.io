'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef, useLayoutEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ScrollIndicator from '../components/scroll_indicator';
import Circle from '../components/circle';
import throttle from 'lodash/throttle';
import type { CSSProperties } from 'react';

const FADE_THRESHOLD = 0.65;
const RESIZE_THROTTLE_MS = 250;
const MOBILE_BREAKPOINT = 768;
const PULSE_THRESHOLD = 0.1;

interface CircleConfig {
  color: string;
  scaleOffset: number;
  oblongOffset: number;
  rotationOffset: number;
  strokewidth: number;
  opacity: number;
}

interface ScrollState {
  progress: number;
  decimal: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, RESIZE_THROTTLE_MS);

    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const HeaderFooter = React.memo(({ scrollProgress }: { scrollProgress: number }) => {
  // Use CSS variables for transitions to improve performance
  const opacityStyle = useMemo(() => ({
    opacity: scrollProgress >= FADE_THRESHOLD ? 1 : 0,
    transition: 'opacity 300ms ease-in-out',
    willChange: 'opacity'
  }), [scrollProgress]);

  // Direct navigation to subpages without parameters
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
    // Just let the navigation happen normally - no need to modify the URL
    // This fixes the issue of navigation taking two clicks
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50" style={opacityStyle}>
        <div onClick={handleClick}>
          <Header text_colour="black" />
        </div>
      </div>
      <nav 
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4"
        style={opacityStyle}
      >
        <a href="/approach" onClick={handleClick} className="text-black text-xl hover:text-blue-600">Approach</a>
        <a href="/objects" onClick={handleClick} className="text-black text-xl hover:text-blue-600">Objects</a>
        <a href="/people" onClick={handleClick} className="text-black text-xl hover:text-blue-600">People</a>
        <a href="/papers" onClick={handleClick} className="text-black text-xl hover:text-blue-600">Papers</a>
      </nav>
      <Footer className="fixed bottom-0 left-0 w-full z-50" style={opacityStyle} />
    </>
  );
});

HeaderFooter.displayName = 'HeaderFooter';

export default function Page() {
  const [scrollState, setScrollState] = useState<ScrollState>(() => {
    if (typeof window !== 'undefined') {
      // Use URL parameter instead of sessionStorage
      const urlParams = new URLSearchParams(window.location.search);
      const fromHome = urlParams.get('fromHome');
      const historyState = window.history.state;
      
      if (fromHome === 'true' || historyState?.scrollToBottom) {
        // Clean URL by removing the parameter after reading it
        if (fromHome) {
          const url = new URL(window.location.href);
          url.searchParams.delete('fromHome');
          window.history.replaceState({}, '', url.toString());
        }
        return { progress: 1, decimal: 100 };
      }
    }
    return { progress: 0, decimal: 0 };
  });
  
  const [isClient, setIsClient] = useState(false);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const initialScrollApplied = useRef(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const updateScroll = useCallback(() => {
    const scrollPos = window.scrollY;
    // Calculate maxScroll only once and store for reuse
    if (!scrollContainerRef.current) return;
    
    const containerHeight = scrollContainerRef.current.offsetHeight;
    const maxScroll = containerHeight - window.innerHeight;

    if (maxScroll <= 0) return;

    const progress = Math.min(Math.max(scrollPos / maxScroll, 0), 1);
    const decimal = (progress**2 * 100);

    // Only update state if values have changed significantly to avoid needless rerenders
    if (Math.abs(progress - scrollState.progress) > 0.001 || Math.abs(decimal - scrollState.decimal) > 0.1) {
      setScrollState({ progress, decimal });
    }
  }, [scrollState.progress, scrollState.decimal]);

  // Use intersection observer for more efficient scroll tracking
  useEffect(() => {
    if (!scrollContainerRef.current || typeof IntersectionObserver === 'undefined') return;
    
    const options = {
      threshold: Array.from({ length: 11 }, (_, i) => i / 10) // 0, 0.1, 0.2, ..., 1
    };
    
    const observer = new IntersectionObserver((entries) => {
      // Just trigger our normal scroll handler when sections come into view
      updateScroll();
    }, options);
    
    // Observe each section
    const sections = document.querySelectorAll('.h-screen');
    sections.forEach(section => observer.observe(section));
    
    return () => observer.disconnect();
  }, [updateScroll]);

  const handleScroll = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(updateScroll);
  }, [updateScroll]);

  useLayoutEffect(() => {
    if (!initialScrollApplied.current) {
      // Check URL param instead of sessionStorage
      const urlParams = new URLSearchParams(window.location.search);
      const fromHome = urlParams.get('fromHome');
      const historyState = window.history.state;
      
      if (fromHome === 'true' || historyState?.scrollToBottom) {
        const scrollContainer = document.querySelector('.grid-rows-6');
        if (scrollContainer) {
          const containerHeight = scrollContainer.getBoundingClientRect().height;
          window.scrollTo({
            top: containerHeight - window.innerHeight,
            behavior: 'auto'
          });
          initialScrollApplied.current = true;
        }
      }
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
    document.documentElement.style.overscrollBehavior = 'none';

    const handlePopState = () => {
      const state = window.history.state;
      if (state?.scrollToBottom && !initialScrollApplied.current) {
        const scrollContainer = document.querySelector('.grid-rows-6');
        if (scrollContainer) {
          const containerHeight = scrollContainer.getBoundingClientRect().height;
          window.scrollTo({
            top: containerHeight - window.innerHeight,
            behavior: 'auto'
          });
          initialScrollApplied.current = true;
        }
      }
    };

    // Use passive event listeners for better scroll performance
    window.addEventListener('popstate', handlePopState, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.documentElement.style.overscrollBehavior = '';
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [handleScroll]);

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < MOBILE_BREAKPOINT;

  const circleSize = useMemo(() =>
    Math.max(scrollState.decimal+1.0, 1)
    , [scrollState.decimal]);

  const backgroundScale = useMemo(() =>
      // More subtle scaling for background - only scales from 1 to 1.5
      1 + (scrollState.decimal * 0.5 / 10)
      , [scrollState.decimal]);

  const CIRCLE_CONFIGS = [
    { color: 'red', scaleOffset: 8, oblongOffset: 18.5, rotationOffset: 0, strokewidth: 7, opacity: 1},
    { color: 'orange', scaleOffset: 8.25, oblongOffset: 19.2, rotationOffset: 5, strokewidth: 7, opacity: 1},
    { color: 'yellow', scaleOffset: 8.5, oblongOffset: 20, rotationOffset: 10, strokewidth: 7, opacity: 1},
    { color: 'green', scaleOffset: 8.75, oblongOffset: 21, rotationOffset: 15, strokewidth: 7, opacity: 1},
    { color: 'blue', scaleOffset: 9, oblongOffset: 22, rotationOffset: 20, strokewidth: 7, opacity: 1},
    { color: 'indigo', scaleOffset: 9.25, oblongOffset: 23, rotationOffset: 25, strokewidth: 7, opacity: 1},
    { color: 'violet', scaleOffset: 9.5, oblongOffset: 24, rotationOffset: 30, strokewidth: 7, opacity: 1},
  ];

  // Pre-compute circle configurations to avoid recalculations
  const circles = useMemo(() => {
    return CIRCLE_CONFIGS.map(({ color, scaleOffset, oblongOffset, rotationOffset, strokewidth }) => {
      const getProps = (size: number, mobile: boolean) => ({
        width: "55vmin",
        height: "55vmin",
        scale: size**2 / (mobile ? (35 * scaleOffset) : (35 * scaleOffset)),
        oblongRatio: Math.max(1, ((size) / (mobile ? (1.0 * oblongOffset) : (1.0 * oblongOffset)))),
        blur: 0,
        rotation: mobile ? (2.0 * rotationOffset + size) : (2.0 * rotationOffset + size),
        strokeColor: color,
        strokeWidth: mobile ? strokewidth * size/23 : strokewidth * size/23,
        opacity: 0.2 + size / (mobile ? 90 : 90)
      });
      
      return { color, key: oblongOffset+color, getProps };
    });
  }, [CIRCLE_CONFIGS]);

  const renderCircles = useCallback(() => {
    return circles.map(({ key, getProps }) => (
      <div 
        key={key} 
        className="absolute inset-0 flex items-center justify-center">
        <Circle {...getProps(circleSize, isMobile)} />
      </div>
    ));
  }, [circles, circleSize, isMobile]);

  if (!isClient) {
    return (
      <div className="relative w-full bg-black">
        <div className="h-screen flex-1" />
      </div>
    );
  }

  // Create a single CSS variable for background scale to improve performance
  const backgroundScaleStyle = {
    '--bg-scale': backgroundScale,
    transform: `scale(var(--bg-scale))`
  } as CSSProperties;

  return (
    <>
      <div className="fixed inset-0 w-full h-full z-0" style={backgroundScaleStyle}>
        <img 
          src="/starfield-desktop.webp" 
          alt="starfield" 
          className="w-full h-full object-cover"
          style={{
            contain: 'paint'
          }}
        />
      </div>
      
      <div ref={scrollContainerRef} className="relative w-full z-10">
        <ScrollIndicator scrollDecimal={scrollState.decimal} />
        {/* Replace multiple empty divs with a single container using CSS grid for better performance */}
        <div className="grid grid-rows-6 h-[600vh]">
          {/* Every row is one viewport height */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-screen" />
          ))}
        </div>
        
        {/* Performance-optimized circles container with hardware acceleration */}
        <div 
          className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-transparent"
          style={{ 
            backfaceVisibility: 'hidden',
            perspective: 1000,
            transform: 'translate3d(0,0,0)'
          }}
        >
          {renderCircles()}
        </div>
      </div>
      <HeaderFooter scrollProgress={scrollState.progress} />
    </>
  );
}