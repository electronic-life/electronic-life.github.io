import React, { useMemo } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollIndicatorProps {
  scrollDecimal: number;
}

// Move keyframe animation to stylesheet to avoid inline style recreation
const keyframes = `
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-12px);
    }
  }
`;

// Standard function component
const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ scrollDecimal }) => {
  // Calculate opacity only when scrollDecimal changes significantly
  const opacity = useMemo(() => {
    return (1-((scrollDecimal-50)/600));
  }, [Math.floor(scrollDecimal)]); // Only recalculate when integer value changes
  
  // Avoid rendering when indicator is not visible
  if (opacity <= 0.05) return null;
  
  return (
    <>
      <style>{keyframes}</style>
      <div 
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 scale-2"
        style={{ 
          opacity,
          willChange: 'opacity',
          transform: 'translate3d(-50%, 0, 0)' // Hardware acceleration
        }}
      >
        <div 
          className="text-white"
          style={{
            animation: "bounce 1s ease-in-out infinite",
          }}
        >
          <ChevronUp className="text-white w-8 h-8" />
        </div>
      </div>
    </>
  );
};

ScrollIndicator.displayName = 'ScrollIndicator';
export default ScrollIndicator;