import React, { useRef, useMemo, useCallback } from 'react';
import Star from './star';
import Galaxy from './galaxy';

interface GalaxyChildProps {
  galaxyPositions: Array<{ left: string; top: string; }>;
}

interface StarGalaxyLayoutProps {
  isMobile: boolean;
  starVisualState: number;
  scale?: number;
  children?: React.ReactElement<GalaxyChildProps>;
}

interface RandomValue {
  color: number;
  radius: number;
  offset: number;
  size: number;
  initialdist?: number;
}

interface GalaxyPosition {
  left: string;
  top: string;
  angle: number;
  galaxyRadius: number;
  transform: string;
  color: number;
  size: number;
  initialdist?: number;
}

const calculateGalaxyPositions = (
  randomValues: RandomValue[],
  scale: number
): GalaxyPosition[] => {
  return randomValues.map((randVals, index) => {
    const baseAngle = (index * 2 * Math.PI) / 3;
    const angle = baseAngle + randVals.offset;
    const adjustedRadius = randVals.radius * scale;
    const x = 50 + Math.cos(angle) * adjustedRadius;
    const y = 50 + Math.sin(angle) * adjustedRadius;
    
    return {
      left: `${x}%`,
      top: `${y}%`,
      angle,
      galaxyRadius: adjustedRadius,
      transform: `translate(-50%, -50%) scale(${scale})`,
      color: randVals.color,
      size: randVals.size,
      initialdist: randVals.initialdist
    };
  });
};

const StarGalaxyLayout = ({ 
  isMobile, 
  starVisualState, 
  scale = 1.35,
  children 
}: StarGalaxyLayoutProps) => {
  // Memoize the initial random values
  const randomValues = useRef<RandomValue[]>([
    { color: 0.9430922818612874, radius: 23.09134685194573, offset: 5.952903634814243, size: 0.5120802169648176 },
    { color: 0.2866895967234122, radius: 15.37152248703324, offset: 4.607660682566115, size: 0.5843049276927211 },
    { color: 0.7264764111384534, radius: 19.83473021340826, offset: 6.28302882438003, size: 0.5967083752367214 },
    { color: 0.055625980366973415, radius: 24.33595916206409, offset: 2.1, size: 0.5796641517202228 }
  ]);

  const otherValues = useRef<RandomValue[]>(
    Array.from({ length: 20 }, () => ({
      color: Math.random(),
      radius: 10 + Math.random() * 20,
      offset: Math.random() * Math.PI * 2,
      size: 0.5 + Math.random() * 0.1,
    }))
  );

  // Memoize galaxy positions calculation
  const galaxyPositions = useMemo(() => 
    calculateGalaxyPositions(randomValues.current, scale),
    [scale] // Only recalculate when scale changes
  );

  // Memoize the transform style for the Star component
  const starTransform = useMemo(() => ({
    transform: `translate(-50%, -50%) scale(${isMobile ? 0.6 * scale : scale})`,
  }), [isMobile, scale]);

  // Memoize the child element with its props
  const childElement = useMemo(() => {
    if (!children) return null;
    return React.cloneElement(children, {
      galaxyPositions: galaxyPositions.map(pos => ({
        left: pos.left,
        top: pos.top
      }))
    });
  }, [children, galaxyPositions]);

  // Memoize Galaxy component props calculation
  const getGalaxyProps = useCallback((position: GalaxyPosition) => ({
    color: position.color,
    size: (0.05 + position.size * starVisualState/6)/2,
    distortion: starVisualState / position.galaxyRadius*100,
    rotation: position.angle * (180 / Math.PI)-180,
    centeredRadius: position.galaxyRadius/20,
    isMobile
  }), [starVisualState, isMobile]);

  return (
    <div className="relative w-full h-full">
      {galaxyPositions.map((position, index) => (
        <div
          key={index}
          className="absolute will-change-transform"
          style={{
            left: position.left,
            top: position.top,
            transform: position.transform,
            transformOrigin: 'center center'
          }}
        >
          <Galaxy {...getGalaxyProps(position)} />
        </div>
      ))}
      <div 
        className="absolute left-1/2 top-1/2 will-change-transform"
        style={starTransform}
      >
        <Star size={starVisualState/4} />
      </div>
      {childElement}
    </div>
  );
};

export default React.memo(StarGalaxyLayout);