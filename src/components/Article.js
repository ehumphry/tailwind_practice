import React from 'react';

const Article = (props) => {
  const color = `hsl(${Math.random() * 360}, 100%, 25%)`;

  return (
    <div
    className="max-w-3xl mx-auto my-16 p-4 rounded-lg shadow-md"
      style={{ backgroundColor: color}}
    >
      <p className="text-white text-xl font-bold">{props.title}</p>
      <p className="text-gray-100 mt-2 text-base">{props.description}</p>
    </div>
  );
};

export default Article;


