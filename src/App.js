import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import HeaderMenu from './components/HeaderMenu';
import UniquePage from './components/UniquePage';


export default function App() {

  const { id } = useParams(); // get the id parameter from the URL

  return (
<Router>  
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
            <Route path="/unique/:id" element={<UniquePage />} />
      </Routes>
</Router>
  )
}