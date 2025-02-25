import React, { useMemo } from 'react';
interface CircleProps {
  width: string | number;
  height: string | number;
  scale: number;
  strokeWidth?: number;
  strokeColor?: string;
  blur?: number;
  oblongRatio?: number;
  rotation?: number;
  opacity?: number;
}

const Circle: React.FC<CircleProps> = React.memo(({
  width,
  height,
  scale = 1,
  strokeWidth = 2,
  strokeColor = '#000000',
  blur = 0,
  oblongRatio = 1,
  rotation = 0,
  opacity = 1
}) => {
  // Pre-calculate values instead of computing them on every render
  const calculatedValues = useMemo(() => {
    const baseRadius = 48;
    const ry = baseRadius * oblongRatio;
    const rx = baseRadius - 0.05 * ry;
    const blurFilter = blur > 0 ? "url(#blur-" + strokeColor + ")" : undefined;
    
    return { rx, ry, blurFilter };
  }, [oblongRatio, blur, strokeColor]);

  // CSS variables for transforms are more efficient than inline styles in some browsers
  const cssTransform = `scale(${scale}) rotate(${rotation}deg)`;

  return (
    <div style={{
      transform: cssTransform,
      willChange: 'transform',
      width,
      height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      contain: 'layout paint size' // Improves performance by limiting repaints
    }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {blur > 0 && (
          <defs>
            <filter id={`blur-${strokeColor}`}>
              <feGaussianBlur stdDeviation={blur} />
            </filter>
          </defs>
        )}
        <ellipse
          cx="100"
          cy="100"
          rx={calculatedValues.rx}
          ry={calculatedValues.ry}
          fill="rgb(255, 255, 255)"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeOpacity={opacity}
          filter={calculatedValues.blurFilter}
        />
      </svg>
    </div>
  );
});

Circle.displayName = 'Circle';
export default Circle;