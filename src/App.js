import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GreyCardContainer from './components/GreyCardContainer';
import HeaderMenu from './components/HeaderMenu';
import HelloWorld from './components/HelloWorld';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderMenu/>
      <HelloWorld/>
      <GreyCardContainer />
    </BrowserRouter>
    </>
  )
}
