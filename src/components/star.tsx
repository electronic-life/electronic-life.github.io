import React, { useMemo } from 'react';

const Star = ({ size = 0 }) => {
  const normalizedSize = Math.max(0, Math.min(1, size)) * 0.5;
  
  const renderData = useMemo(() => {
    const spikeLength = normalizedSize * 600 - 20;
    const coreSize = normalizedSize * 20;
    const glowSize = normalizedSize * 50;
    const spikeWidth = normalizedSize * 3;
    
    // Calculate color for blue transition
    const blueComponent = Math.round(255 - (normalizedSize * 100));
    const greenComponent = Math.round(255 - (normalizedSize * 100));
    const redComponent = Math.round(255 - (normalizedSize * 100));
    
    const blueColor = `rgb(0,0 ${blueComponent})`;
    const amberColor = `rgb(${redComponent},200, 200)`;
    
    // list of randon haze colours between blue and amber (13)
    const rotationAmount = 0;//normalizedSize * 30 - 30;
    
    return { spikeLength, coreSize, glowSize, spikeWidth, blueColor, amberColor, rotationAmount };
  }, [normalizedSize]);

  return (
    // add rotation to svg
    <svg width="1000" height="1000" viewBox="-500 -500 1000 1000" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate('+renderData.rotationAmount+'deg)' }}>
      <defs>
        <filter id="spike-blur" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
        </filter>
        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor={renderData.blueColor} stopOpacity="0.1" />
        </radialGradient>
        <radialGradient id="coreGradient" cx="50%" cy="50%" r="95%">
          <stop offset="0%" stopColor="white" />
          {/* <stop offset="80%" stopColor="white" stopOpacity="0.8" /> */}
          <stop offset="100%" stopColor={renderData.blueColor} stopOpacity="0.6" />
        </radialGradient>
      </defs>
      
      {/* Diffraction Spikes */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 360) / 6+90;
        const rad = (angle * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const width = renderData.spikeWidth * 1.5;
        
        // Create path for triangular spike (now pointing outward)
        const path = `
          M ${renderData.spikeLength * cos} ${renderData.spikeLength * sin}
          L ${width * sin + (renderData.coreSize * cos)} ${-width * cos + (renderData.coreSize * sin)}
          L ${-width * sin + (renderData.coreSize * cos)} ${width * cos + (renderData.coreSize * sin)}
          Z
        `;
        
        return (
          <g key={i}>
            {/* Amberouter spike */}
            <path
              d={path}
              fill={renderData.amberColor}
              opacity="1"
              filter="url(#spike-blur)"
            />
          </g>
        );
      })}


{[...Array(2)].map((_, i) => {
        // # randomly
        const angle = (i * 360) / 2;
        const rad = (angle * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const width = renderData.spikeWidth * 3;
        
        // Create path for triangular spike (now pointing outward)
        const path = `
                M ${renderData.spikeLength * 0.55 * cos} ${renderData.spikeLength * 0.55 * sin}
                L ${width * 0.55 * sin + (renderData.coreSize * cos)} ${-width *0.55 * cos + (renderData.coreSize * sin)}
                L ${-width * 0.55 * sin + (renderData.coreSize * cos)} ${width * 0.55 * cos + (renderData.coreSize * sin)}
                Z
              `;
        
        return (
          <g key={i}>
            {/* create variable for length */}

            <path
              d={path}
              // haze colours
              fill={`rgb(255,255,255)`}
              opacity="1"
              filter="url(#spike-blur)"
            />
          </g>
        );
      })}
      
      {/* Core */}
      <circle
        cx="0"
        cy="0"
        r={renderData.coreSize*1.1}
        fill="rgb(255, 252, 247)"
        filter="url(#spike-blur)"
      />
      <circle
        cx="0"
        cy="0"
        r={renderData.glowSize*0.55}
        fill="rgb(255, 247, 236)"
        opacity="0.6"
        filter="url(#spike-blur)"
      />


          {/* Diffraction Spikes */}
        {[...Array(6)].map((_, i) => {
        const angle = (i * 360) / 6 + 90;
        const rad = (angle * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const width = renderData.spikeWidth * 10;
        
        // Create path for triangular spike (now pointing outward)
        const path =`
                M ${renderData.spikeLength * 0.25 * cos} ${renderData.spikeLength * 0.25 * sin}
                L ${width * 0.25 * sin + (renderData.coreSize * cos)} ${-width * 0.25 * cos + (renderData.coreSize * sin)}
                L ${-width * 0.25 * sin + (renderData.coreSize * cos)} ${width * 0.25 * cos + (renderData.coreSize * sin)}
                Z
              `;
        
        return (
          <g key={i}>
            {/* white spike */}
            <path
              d={path}
              fill="white"
              opacity="1"
              filter="url(#spike-blur)"
            />
          </g>
        );
      })}
    </svg>
  );
};

Star.displayName = 'Star';
export default Star;