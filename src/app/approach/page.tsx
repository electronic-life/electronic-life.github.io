'use client';

import { useRouter } from 'next/navigation';
import { createPagePath } from '../../utils/path';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useEffect } from 'react';


export default function ApproachPage() {
  const router = useRouter();
  
  useEffect(() => {
    // When mounted, update history state to include scroll position
    window.history.replaceState(
      { scrollToBottom: true },
      '',
      window.location.href
    );
  }, []);
  
  const handleHeaderClick = () => {
    sessionStorage.setItem('lastScrollState', 'full');
    router.push(createPagePath('/'));
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <div 
        className="cursor-pointer flex-grow" 
        onClick={handleHeaderClick}
      >
        <Header text_colour='black' breadcrumb='| Approach' />
        <div className="bg-white/80 border border-white/20 p-0 ml-10 mt-10 mr-10">
          <p className="text-black/60 text-m leading-relaxed">
            <i>
              Rigorous Creativity /ˈrɪɡərəs kriːˈeɪtɪvɪti/: Disciplined application of imagination and innovation, blending strict analytical methods with creative making to produce solutions that are both original and well-founded; balancing of analytical rigor with creative exploration, ensuring inventive ideas and applications grounded in thorough research, critical assessment, and practical feasibility. 
            </i>
          </p>
          <br></br>
          <p className="text-black/90 text-l text-leading-relaxed">
            As leaders in the field, we support a range of partners with critical and creative approaches for the development and application of AI tools, techniques and practices. Taking a makerly approach combined with high-level technical and conceptual expertise, we pursue rigorous creativity, working alongside key partners and communities for the social good.
            Our 'AI Studio' builds around people and situations - offering an innovative, adaptive constellation of tools, techniques, and methodologies, underpinned by long-term experience in social and creative practices. 
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}