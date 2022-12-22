import React from 'react';

const GreyCard = (props) => {
  const color = `hsl(${Math.random() * 360}, 100%, 25%)`;

  return (
    <div
      className="mx-2 my-2 p-4 rounded-lg shadow-md w-64 h-64 md:w-128 md:h-128 lg:w-256 lg:h-256 hover:scale-105"
      style={{ backgroundColor: color, cursor: "pointer" }}
      onClick={() => props.onClick(props.id)}
    >
      <p className="text-white text-2xl font-bold">{props.title}</p>
      {/* <p className="text-gray-100 mt-2 text-base">{props.description}</p> */}
    </div>
  );
};

export default GreyCard;


