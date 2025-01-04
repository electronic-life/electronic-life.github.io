import React from 'react';

interface ContentRendererProps {
  html: string;
}

const ContentRenderer = ({ html }: ContentRendererProps) => {
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: html }}
      className="[&_.red]:text-red-600 [&_.blue]:text-blue-600 [&_.green]:text-green-600 [&_a]:underline [&_a]:text-blue-600 hover:[&_a]:text-blue-800"
    />
  );
};

const Grid = () => {
  const items = [
    { id: 1, title: 'Item 1', content: 'Sunil Manghani is Professor of Theory, Practice & Critique at Winchester School of Art, University of Southampton (UK). Ed D’Souza is Professor of Critical Practice at Winchester School of Art, University of Southampton (UK). Tom Savage is a PhD candidate at Imperial College London.' },
    { id: 2, title: 'Item 2', content: '<a href="/pdfs/001_rage_machine.pdf">Rage Machine - 001</a> an AI entity that is able to hold free and open conversation, developed in dialogue with Linsey Young, curator of Women in Revolt! Art and Activism in the UK 1970-1990, and presented publicly as part of the exhibition’s wider programming.' },
    { id: 3, title: 'Item 3', content: '<a href="/pdfs/002_ai_mirror.pdf"> AI Mirror Stage - 002</a> …Please be gentle. We are just taking our first steps with Electronic Life…This plea seemed to galvanise the crowd, drawing us all into a common purpose: An unwritten contract, allowing us all collectively to give ‘life’ to something.' },
    { id: 4, title: 'Item 4', content: '<a href="/pdfs/003_learning_the_machine.pdf"> Learning the Machine - 003 </a> …Learning the machine means first accessing new technologies. It means a free-form approach to social and experiential learning…' },
    { id: 5, title: 'Item 5', content: 'Collaborators: The Alan Turing Institute’s AI & Arts Group; Tate; Kochi Biennale, and University of Southampton.' },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 border border-black"
          >
            {/* <h2 className="text-xl font-bold mb-4">{item.title}</h2> */}
            <ContentRenderer html={item.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;