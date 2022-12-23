import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import GreyCard from './GreyCard';

const GreyCardContainer = () => {
  const navigate = useNavigate();
  const [occupations, setOccupations] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3001/api/occupations')
      .then((response) => response.json())
      .then((data) => setOccupations(data));
  }, []);

  const handleClick = (id) => {
    navigate(`/career/${id}`, { state: { id } });
  };

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