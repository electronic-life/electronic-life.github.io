// Add React import
import React from 'react';

type TitleProps = {
  text: string;
  className?: string;
}

const Title = ({text,className}: TitleProps) => {
  return (
    // just center this
    <h1 className={`text-3xl font-bold text-white ${className}`}>
      {text}
      {/* <span className="inline-block w-0.5 h-9 bg-white ml-3 translate-y-1.5 animate-blink"> */}
      {/* </span> */}
    </h1>
  );
}

export default Title;