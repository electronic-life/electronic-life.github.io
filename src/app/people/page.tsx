'use client';
import { useRouter } from 'next/navigation';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { createPagePath } from '../../utils/path';
import { useEffect } from 'react';

interface Bio {
  name: string;
  content: string;
}

const bios: Bio[] = [
  {
    name: "Partners & Affiliates",
    content: "Electronic Life has been supported by Tate, Winchester School of Art, University of Southampton, the Alan Turing Institute, and is also affiliated with the Kochi Biennale."
  },
  {
    name: "Sunil Manghani",
    content: "Professor of Theory, Practice & Critique at Winchester School of Art, University of Southampton (UK). He is Editor of Journal of Visual Art Practice and Managing Editor of Theory, Culture & Society. His books include Image Studies (2013), Rhythm and Critique(2020), Zero Degree Seeing (2019), India's Biennale Effect (2016) and Farewell to Visual Studies(2015). He curated Barthes/Burgin at the John Hansard Gallery (2016), along with Building an Art Biennale (2018) and Itinerant Objects (2019) at Tate Exchange, Tate Modern."
  },
  {
    name: "Ed D'Souza",
    content: "Professor of Critical Practice at Winchester School of Art, University of Southampton (UK). He is Editor of Journal of Visual Art Practice. His books include India's Biennale Effect (2016), Barcelona Masala: Narratives and Interactions in Cultural Space (2013) and Outside India: Dialogues and Documents of Art and Social Change (2012). His work has been exhibited widely including Bergen Kunstall 3,14 (2019), osloBIENNALEN (2019), India Habitat Centre (2019), Tate Exchange, Tate Modern (2018) and Kochi-Muziris Biennale (2014)."
  }, 
  {
    name: "Tom Savage",
    content: "Researcher in Process Systems Engineering at Imperial College London. He holds an MPhil in Chemical Engineering & Biotechnology from the University of Cambridge (2021), a BEng in Chemical Engineering from the University of Manchester (2020) and has previously been a PhD Enrichment Student at the Alan Turing Institute (2024). He has published in journals including Nature Chemical Engineering and presented at conferences across machine learning, operations research, and chemical engineering fields."
  },
];

export default function PeoplePage() {
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
    <div className="min-h-screen bg-white text-black">
      <div 
        className="cursor-pointer" 
        onClick={handleHeaderClick}
      >
        <Header text_colour='black' breadcrumb='| People' />
      </div>
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-3">
          <div className="grid gap-0">
            
            {/* Detailed bios */}
            {bios.map((bio, index) => (
              <div 
                key={index}
                className="bg-white/80 border border-white/20 p-6 hover:border-white/40 transition-all"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{bio.name}</h2>
                  <p className="text-black/70 leading-relaxed">
                    {bio.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer  />
    </div>
  );
}