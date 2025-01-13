import React from 'react';
import { ChevronUp, ChevronUpCircle, ChevronUpSquare} from 'lucide-react';

interface ScrollIndicatorProps {
  scrollDecimal: number;
}

const ScrollIndicator = ({ scrollDecimal }: ScrollIndicatorProps) => {
  const opacity = (1-((scrollDecimal-50)/600));
  
  return (
    <div 
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 scale-2"
      style={{ opacity }}
    >
      <div 
        className="text-white"
        style={{
          animation: "bounce 1s ease-in-out infinite",
          transform: "translateY(0px)"
        }}
      >
        <style>
          {`
            @keyframes bounce {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-12px);
              }
            }
          `}
        </style>
        <ChevronUp className="text-white w-8 h-8" />
      </div>
    </div>
  );
};

export default ScrollIndicator;