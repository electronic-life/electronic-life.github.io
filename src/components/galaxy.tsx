import React, { useMemo, useCallback } from 'react';

const Galaxy = ({ 
  color = 1,     // 0 = amber, 1 = blue
  size = 1,
  rotation = 0,  // 0-360 degrees
  distortion = 0, // 0 to 1, controls elongation
  centeredRadius = 0,
  isMobile = false 
}) => {
  // Memoize color calculations
  const { primaryColor, coreColor } = useMemo(() => {
    const normalizedColor = Math.max(0, Math.min(1, color));
    const amberList = [255, 150, 0];  
    const blueList = [205, 50, 50];    
    const primaryList = amberList.map((a, i) => 
      (1 - normalizedColor) * a + normalizedColor * blueList[i]
    );
    const coreList = primaryList.map((p, i) => p + blueList[i]);
    
    return {
      primaryColor: `rgb(${primaryList.join(', ')})`,
      coreColor: `rgb(${coreList.join(', ')})`
    };
  }, [color]);

  // Memoize base calculations
  const renderData = useMemo(() => {
    const normalizedSize = Math.max(0, Math.min(1, size));
    const normalizedDistortion = Math.max(0.001, Math.min(1, distortion));
    const baseRadius = normalizedSize * 100;
    
    return { 
      baseRadius,
      normalizedDistortion,
      centeredRadius
    };
  }, [size, distortion, centeredRadius]);

  // Memoize path creation function
  const createDistortedPath = useCallback((scale = 1) => {
    const points = new Array(isMobile ? 8 : 12); // Fewer points on mobile
    const steps = isMobile ? 10 : 12;
    const dist = 1.7 * renderData.normalizedDistortion / renderData.centeredRadius ** 2;
    const verticalScale = 1 + dist;
    const horizontalScale = 1 / (1 + dist);
    const ySquaredFactor = 1 / (200 * dist);
    
    for (let i = 0; i <= steps; i++) {
      const angle = (i / steps) * Math.PI * 2;
      const radius = renderData.baseRadius * scale;
      
      let x = radius * Math.cos(angle) * horizontalScale;
      const y = radius * Math.sin(angle) * verticalScale;
      
      if (x !== 0) {
        x += y * y * ySquaredFactor;
      }
      
      points[i] = `${x},${y}`;
    }
    
    return `M ${points.join(' L ')} Z`;
  }, [renderData, isMobile]);

  // Memoize paths based on device type
  const paths = useMemo(() => {
    // if (isMobile) {
    //   // Simplified paths for mobile
    //   return {
    //     path1: createDistortedPath(2.0),
    //     path2: createDistortedPath(1.0)
    //   };
    // }
    // Full paths for desktop
    return {
      path1: createDistortedPath(1),
      path2: createDistortedPath(0.5),
      path3: createDistortedPath(4),
      path4: createDistortedPath(2),
    };
  }, [createDistortedPath, isMobile]);

  return (
    <svg 
      width="1000" 
      height="1000" 
      viewBox="-500 -500 1000 1000" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <defs>
        <radialGradient id="galaxyGradient" cx="0" cy="0" r="100%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="1" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0.3" />
        </radialGradient>
        <filter id="galaxyBlur" x="-50%" y="-50%" width="400%" height="400%">
          <feGaussianBlur in="SourceGraphic" stdDeviation={2} />
        </filter>
        {/* {!isMobile && (
          <> */}
            <filter id="biggergalaxyBlur" x="-50%" y="-50%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            </filter>
            <filter id="smallergalaxyBlur" x="-50%" y="-50%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
            </filter>
          {/* </>
        )} */}
      </defs>
        
      <path
        d={paths.path1}
        fill={primaryColor}
        filter="url(#galaxyBlur)"
        opacity={0.75}
      />
        <path
          d={paths.path2}
          fill="white"
          opacity={0.5}
          filter="url(#galaxyBlur)"
        />
      {/* {!isMobile && (
        <> */}
          <path
            d={paths.path3}
            fill="white"
            filter="url(#biggergalaxyBlur)"
            opacity={0.1}
          />
          <path
            d={paths.path4}
            fill={primaryColor}
            filter="url(#galaxyBlur)"
            opacity={0.5}
          />
        {/* </>
      )} */}
    </svg>
  );
};

Galaxy.displayName = 'Galaxy';
export default Galaxy;