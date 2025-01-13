'use client';
import React from 'react';
import { useState, useEffect, useCallback, useRef} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import StarGalaxyLayout from '../components/stargalaxy';
import GalaxyAnnotations from '../components/galaxy_annotations';
import ScrollIndicator from '../components/scroll_indicator';  
import { throttle } from 'lodash';

const INITIAL_SCROLL_DECIMAL = 0.0;
const SCROLL_MULTIPLIER = 400;
const BASE_SCROLL = 40;
const MOBILE_BREAKPOINT = 768;
const RESIZE_THROTTLE_MS = 250;

const easeInQuad = (x: number): number => x * x;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = throttle(() => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    }, RESIZE_THROTTLE_MS);
    
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
};

const HeaderFooter = React.memo(({ scrollProgress }: { scrollProgress: number }) => {
  const FADE_THRESHOLD = 0.74;
  const shouldShow = scrollProgress >= FADE_THRESHOLD;

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-full transition-opacity duration-300 ${
          shouldShow ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Header text_colour="white"/>
      </div>
      <Footer 
        className={`fixed bottom-0 left-0 w-full transition-opacity duration-300 ${
          shouldShow ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
});

HeaderFooter.displayName = 'HeaderFooter';

export default function Page() {
  const [scrollState, setScrollState] = useState({
    progress: 0,
    decimal: INITIAL_SCROLL_DECIMAL
  });
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();
  const scrollRef = useRef({ lastScrollY: 0, ticking: false });
  
  const handleScroll = useCallback(() => {
    if (!scrollRef.current.ticking) {
      scrollRef.current.ticking = true;
      
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const linearProgress = Math.min(Math.max(scrollY / windowHeight, 0), 1);
        const nonlinearProgress = easeInQuad(linearProgress);
        
        setScrollState({
          progress: linearProgress,
          decimal: BASE_SCROLL + (nonlinearProgress * SCROLL_MULTIPLIER * 1.5)
        });
        
        scrollRef.current.lastScrollY = scrollY;
        scrollRef.current.ticking = false;
      });
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
    window.scrollTo(0, 0);
    
    setScrollState({
      progress: 0,
      decimal: INITIAL_SCROLL_DECIMAL
    });
    
    const lastScrollState = sessionStorage.getItem('lastScrollState');
    if (lastScrollState === 'full') {
      setScrollState({
        progress: 1,
        decimal: BASE_SCROLL + SCROLL_MULTIPLIER * 1.5
      });
      
      requestAnimationFrame(() => {
        const fullScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo({
          top: fullScrollHeight,
          behavior: 'auto'
        });
      });
      
      sessionStorage.removeItem('lastScrollState');
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!isClient) {
    return (
      <div className="relative w-full">
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
    );
  }

  const starVisualState = (scrollState.decimal / 440);
  const zoomScale = 1 + (scrollState.decimal / 800);

  return (
    <>
      <div className="relative w-full">
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="fixed top-0 left-0 w-full h-screen bg-black overflow-hidden">
          {/* Background Layer */}
          <div 
            className="absolute inset-0 w-full h-full origin-center flex items-center justify-center"
            style={{
              transform: `scale(${zoomScale})`,
            }}
          >
            <img 
              src={isMobile ? "starfield-bg-mobile.svg" : "starfield-bg.svg"}
              alt="Star background" 
              className={`w-full h-full object-cover ${isMobile ? 'object-center' : ''}`}
            />
            
            <div className="absolute inset-0 scale-50">
              <StarGalaxyLayout 
                isMobile={isMobile} 
                starVisualState={starVisualState}
              >
                <GalaxyAnnotations scrollProgress={scrollState.progress} />
              </StarGalaxyLayout>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute top-0 left-0 w-full">
            <ScrollIndicator scrollDecimal={scrollState.decimal} />
          </div>
          
        </div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>

      {/* Header and Footer rendered outside the main container */}
      <HeaderFooter scrollProgress={scrollState.progress} />
    </>
  );
}