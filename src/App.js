import React from 'react';
import NavbarMenu from './components/NavbarMenu';
import MdComponent from './components/MdComponent';
import GreyCardContainer from './components/GreyCardContainer';
import HeaderMenu from './components/HeaderMenu';

export default function App() {
  return (
    <>
    <HeaderMenu/>
    {/* <NavbarMenu/>  */}
    <MdComponent md_title = 'firstmd.md'/>
    <GreyCardContainer />
    </>
  )
}
