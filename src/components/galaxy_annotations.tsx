import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface GalaxyAnnotationsProps {
  scrollProgress: number;
  galaxyPositions?: Array<{ left: string; top: string; }>;
}

interface BoxDimension {
  width: number;
  height: number;
}

interface Annotation {
  label: string;
  link: string;
  offset: { x: number; y: number };
}

const GalaxyAnnotations: React.FC<GalaxyAnnotationsProps> = ({ scrollProgress, galaxyPositions }) => {
  const router = useRouter();
  const MODIFIED_THRESHOLD = 0.74;
  const annotationOpacity = Math.max(0, Math.min(1, (scrollProgress - MODIFIED_THRESHOLD) * 4));
  const [boxDimensions, setBoxDimensions] = useState<BoxDimension[]>([]);
  const annotationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const galaxyRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const annotationData: Annotation[] = [
    {
      label: 'Projects',
      link: '/research',
      offset: { x: -40, y: -80 }
    },
    {
      label: 'People',
      link: '/people',
      offset: { x: 20, y: 60 }
    },
    {
      label: 'Papers',
      link: '/papers',
      offset: { x: -90, y: 60 }
    },
    {
      label: 'Approach',
      link: '/approach',
      offset: { x: -60, y: -100 }
    }
  ];

  useEffect(() => {
    const updateDimensions = () => {
      const dimensions = annotationRefs.current.map(ref => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          return {
            width: rect.width,
            height: rect.height
          };
        }
        return { width: 0, height: 0 };
      });
      setBoxDimensions(dimensions);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  if (!galaxyPositions || galaxyPositions.length === 0) {
    return null;
  }

  const handleAnnotationClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      router.push(link);
    } catch (error) {
      console.error('Navigation error:', error);
      window.location.href = link;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 pointer-events-none"
      style={{ opacity: annotationOpacity }}
    >
      {galaxyPositions.slice(0, 4).map((position, index) => {
        const annotation = annotationData[index];
        
        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: position.left,
              top: position.top,
              transform: 'translate(-50%, -50%)',
              zIndex: 60
            }}
          >
            {/* Galaxy reference point */}
            <div
              ref={el => { galaxyRefs.current[index] = el }}
              className="w-2 h-2"
            />

            {/* Line */}
            <svg
              className="absolute pointer-events-none"
              style={{
                width: '100%',
                height: '100%',
                overflow: 'visible',
                top: 0,
                left: 0,
              }}
            >
              <line
                x1={0}
                y1={0}
                x2={annotation.offset.x + (annotation.offset.x < 0 ? boxDimensions[index]?.width || 0 : 0)}
                y2={annotation.offset.y + (annotation.offset.y < 0 ? boxDimensions[index]?.height || 0 : 10)}
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.8"
              />
            </svg>
            
            {/* Annotation */}
            <div
              ref={el => { annotationRefs.current[index] = el }}
              className="absolute"
              style={{
                transform: `translate(${annotation.offset.x}px, ${annotation.offset.y}px)`,
                zIndex: 70
              }}
            >
              <button
                onClick={(e) => handleAnnotationClick(e, annotation.link)}
                className="block bg-black border border-white/80 px-2 py-1 hover:border-white/40 text-white/90 text-base cursor-pointer hover:text-white select-none pointer-events-auto"
              >
                {annotation.label}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GalaxyAnnotations;