import React from 'react';
import occupations from './occupations';

import GreyCard from './GreyCard';

const GreyCardContainer = () => {
    return (
      <div className="flex flex-wrap flex-col-3 mx-auto my-auto px-4 py-12" style={{ maxWidth: "75%" }}>
        {occupations.map(occupation => (
        <GreyCard title={occupation.title} description={occupation.description} />
      ))}
      </div>
    );
  };
  
  export default GreyCardContainer;