import React from 'react';
import HeaderMenu from './HeaderMenu';
import Article from './Article';
import { useParams } from 'react-router-dom';
import occupations from './occupations';



export default function UniquePage(props) {

  const {id} = useParams();

  // use the id to retrieve the relevant information from the json file or API
  const occupation = occupations.find(occupation => occupation.id === id);


    return (
      <>
        <HeaderMenu/>
        <Article title = "Some Title" description = "Some Description" />
     
      </>
    )
  }