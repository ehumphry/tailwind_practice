import React, { useEffect, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import Article from './Article';
import { useParams } from 'react-router-dom';
// import occupations from './occupations';

//make a call to an end point using the id to return json information for that particular career. 

export default function UniquePage(props) {

  const {id} = useParams();

  const [occupation, setOccupation] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/api/occupations/${id}`)
      .then((response) => response.json())
      .then((data) => setOccupation(data));
  }, []);



  // use the id to retrieve the relevant information from the json file or API
  // const occupation = occupations.find(occupation => occupation.id === props.id);


    return (
      <>
        <HeaderMenu/>
        {/* <Article title={occupation?.title || 'Title not found'} description={occupation?.description || 'Description not found'} /> */}
        <Article title={occupation.title} description={occupation.description} outlook={occupation.jobOutlook}/>
     
      </>
    )
  }