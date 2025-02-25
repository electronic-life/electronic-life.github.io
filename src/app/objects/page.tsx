'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { createPagePath } from '../../utils/path';
import { ExternalLink } from 'lucide-react';

interface ProjectLink {
  title: string;
  url: string;
}

interface ProjectData {
  title: string;
  location: string;
  date: string;
  links: ProjectLink[];
  type: string;
}

interface ProjectDataMap {
  [key: number]: ProjectData;
}

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface ObjectsGridProps {
  onImageClick: (id: number) => void;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number | null;
}

const projectData: ProjectDataMap = {
  1: {
    title: 'TATE BRITAIN VOICES',
    location: 'Clore Studio | Tate Britain | London',
    date: 'October 2024',
    links: [
      { title: 'MUSEUM X MACHINE X ME. Tate Britain Late', url: 'https://www.tate.org.uk/whats-on/tate-britain/museum-machine-me-late' },
    ],
    type: 'Installation'
  },
  2: {
    title: 'ELECTRONIC LIFE',
    location: 'Taylor Digital Studio | Tate Britain | London',
    date: 'November 2023',
    links: [
      { title: 'AI Mirror Stage (or, why not to confuse AI with human intelligence)', url: '/pdfs/002_ai_mirror.pdf' }
    ],
    type: 'Installation'
  },
  3: {
    title: 'RAGE MACHINE',
    location: 'Taylor Digital Studio | Tate Britain | London',
    date: 'April 2024',
    links: [
      { title: 'Outsmarted: *Stares at Reader*: Unintended Anthropomorphism in LLMs', url: 'https://blog.sav.phd/p/outsmarted-stares-at-reader' },
      { title: 'Women in Revolt! Art and Activism in the UK 1970-1990', url: 'https://www.tate.org.uk/whats-on/tate-britain/women-in-revolt'}
    ],
    type: 'Installation'
  },
  4: {
    title: 'LISTENING MACHINE',
    location: 'Electronic Life Studio | London',
    date: 'January 2025',
    type: 'Software | Hardware',
    links: [
      { title: 'Project Site', url: 'https://listening-machine.org' }
    ]
  },
  5: {
    title: 'WEBSITE',
    location: 'Electronic Life Studio | London',
    date: 'January 2025',
    type: 'Software',
    links: [
      { title: 'Website', url: 'https://electroniclife.ai' }
    ]
  },
  // 6: {
  //   title: 'PATTERNS OF POWER',
  //   location: 'Taylor Digital Studio | Tate Britain | London',
  //   date: 'June 2024',
  //   type: 'Workshop',
  //   links: [
  //     { title: 'Peckham Soup Kitchen', url: 'https://www.peckhamsoupkitchen.org' }
  //   ]
  // }
};

const ObjectsGrid: React.FC<ObjectsGridProps> = ({ onImageClick }) => {
  const images: Image[] = [
    { id: 4, src: '/rpi.png', alt: 'LISTENING MACHINE' },
    { id: 5, src: '/el.png', alt: 'WEBSITE' },
    { id: 1, src: '/psk.png', alt: 'TATE BRITAIN VOICES' },
    // { id: 6, src: '/pop.png', alt: 'PATTERNS OF POWER' },
    { id: 2, src: '/aud.png', alt: 'ELECTRONIC LIFE' },
    { id: 3, src: '/rm.png', alt: 'RAGE MACHINE' },
  ];

  return (
    <div className="p-4 mt-16 sm:mt-20 w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10">
        {images.map((image) => (
          <div 
            key={image.id}
            className="relative flex flex-col items-center justify-center p-4 cursor-pointer transition-transform hover:scale-105"
            onClick={() => onImageClick(image.id)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="relative h-32 sm:h-24 w-auto object-contain mb-4"
              style={{
                filter: 'drop-shadow(5px 3px 10px rgba(0, 0, 0, 0.4))'
              }}
            />
            <h2 className="text-sm sm:text-base text-center mt-2">{image.alt}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, projectId }) => {
  const project = projectId ? projectData[projectId] : null;
  
  if (!project) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 w-full sm:w-96 h-full bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-6">{project.title}</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-600">{project.location}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">Date</h3>
                <p className="text-gray-600">{project.date}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Type</h3>
                <p className="text-gray-600">{project.type}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">Links</h3>
                <div className="space-y-2">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ObjectsPage() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  useEffect(() => {
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

  const handleImageClick = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = 'hidden';
  };

  const handleSidebarClose = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };
  
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="cursor-pointer" onClick={handleHeaderClick}>
        <Header text_colour='black' breadcrumb='| Objects' />
      </div>
      <main className="flex-1">
        <ObjectsGrid onImageClick={handleImageClick} />
      </main>
      <Sidebar 
        isOpen={selectedProject !== null}
        onClose={handleSidebarClose}
        projectId={selectedProject}
      />
      <Footer />
    </div>
  );
}