// Add React import
import React from 'react';

type TitleProps = {
  text: string;
  className?: string;
}

const Title = ({text,className}: TitleProps) => {
  return (
    <h1 className={`text-3xl font-bold ${className}`}>
      {text}
      <span className="inline-block w-0.5 h-9 bg-black ml-3 translate-y-1.5 animate-blink">
      </span>
    </h1>
  );
}

export default Title;