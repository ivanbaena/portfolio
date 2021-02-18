import React from 'react';

interface ItemHeaderProps {
  project: string;
  description: string;
  keywords: string[];
  className: any;
  children: any;
}
export const ItemHeader = ({
  project,
  description,
  keywords,
  className,
  children,
}: ItemHeaderProps) => {
  return (
    <div id='item-header' className={className}>
      <div id='content-container'>
        <h3>{project}</h3>
        <h2>{description}</h2>
        <ul>
          {keywords.map((word, i) => {
            return <li key={i}>{word}</li>;
          })}
        </ul>
      </div>
      {children}
    </div>
  );
};
