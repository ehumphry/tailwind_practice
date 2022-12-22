import React from 'react';
import HeaderMenu from './HeaderMenu';
import Article from './Article';
import { useParams } from 'react-router-dom';
import occupations from './occupations';



export default function UniquePage(props) {

  const {id} = useParams();

  // use the id to retrieve the relevant information from the json file or API
  // const occupation = occupations.find(occupation => occupation.id === props.id);


    return (
      <>
        <HeaderMenu/>
        {/* <Article title={occupation?.title || 'Title not found'} description={occupation?.description || 'Description not found'} /> */}
        <Article title={occupations[id].title} description={occupations[id].description} outlook={occupations[id].jobOutlook}/>
     
      </>
    )
  }