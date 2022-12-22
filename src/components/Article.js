import React from 'react';

const Article = (props) => {
  const color = `hsl(${Math.random() * 360}, 100%, 25%)`;

  return (
    <div
    className="max-w-3xl mx-auto my-16 p-4 rounded-lg shadow-md lg:px-6 xl:px-8 xxl:px-10"
      style={{ backgroundColor: color}}
    >
      <p className="text-white text-3xl font-bold">{props.title}</p>
      <p className="text-gray-100 mt-2 text-xl">{props.description}</p>
      {props.outlook ? <p className="text-white text-3xl font-bold pt-10">Job Outlook</p> : null}
      <p className="text-gray-100 mt-2 text-xl">{props.outlook}</p>
    </div>
  );
};

export default Article;


