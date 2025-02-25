'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { createPagePath,createAssetPath } from '@/utils/path';
import { useEffect } from 'react';

interface Paper {
  title: string;
  description: string;
  authors: string[];
  year: number;
  pdfUrl: string;
}
const papers: Paper[] = [
  {
    title: "Rage Machine",
    description: "An AI entity that is able to hold free and open conversation developed in dialogue with Linsey Young, curator of Women in Revolt! Art and Activism in the UK 1970-1990, and presented publicly as part of the exhibition's wider programming.",
    authors: ["Sunil Manghani", "Ed D'Souza", "Tom Savage"],
    year: 2024,
    pdfUrl: "/pdfs/001_rage_machine.pdf"
  },
  {
    title: "AI Mirror Stage",
    description: "Please be gentle. We are just taking our first steps with Electronic Life. This plea seemed to galvanise the crowd, drawing us all into a common purpose: An unwritten contract, allowing us all collectively to give 'life' to something.",
    authors: ["Sunil Manghani"],
    year: 2024,
    pdfUrl: "/pdfs/002_ai_mirror.pdf"
  },
  {
    title: "Learning the Machine",
    description: "Learning the machine means first accessing new technologies. It means a free-form approach to social and experiential learning.",
    authors: ["Sunil Manghani", "Ed D'Souza"],
    year: 2024,
    pdfUrl: "/pdfs/003_learning_the_machine.pdf"
  }
];

export default function PapersPage() {
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
        <Header text_colour='black' breadcrumb=' | Papers'/>
      </div>
      <main className="container mx-auto px-10 py-10">
        <div className="space-y-4">
          <div className="grid gap-4">
            {papers.map((paper, index) => (
              <div 
                key={index}
                // rounded border
                className="bg-blue border border-black/10 p-4 hover:border-black/40 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{paper.title}</h2>
                    <p className="text-black/70 mb-2">{paper.description}</p>
                    <p className="text-black/60 text-sm">
                      {paper.authors.join(", ")} • {paper.year}
                    </p>
                  </div>
                  <a
                    href={paper.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-black/10 hover:bg-black/20 px-4 py-2 rounded transition-all text-black/90 hover:text-black"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                    PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}