import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import GreyCard from './GreyCard';
import occupations from './occupations';
import UniquePage from './UniquePage';

const GreyCardContainer = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/career/${id}`, { state: { id } });
  }

  return (
    <div className="flex flex-wrap flex-col-3 mx-auto my-auto px-auto py-12" style={{ maxWidth: "75%" }}>
    
      {occupations.map(occupation => (
        <GreyCard
          key={occupation.id}
          id={occupation.id}
          title={occupation.title}
          description={occupation.description}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default GreyCardContainer;