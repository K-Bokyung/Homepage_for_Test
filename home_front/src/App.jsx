// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// 각 페이지 import
import NavbarPage from './pages/navbar.jsx';
import IntroPage from './pages/intro.jsx';
import PortfolioPage from './pages/portfolio.jsx';
import AboutPage from './pages/about.jsx';
import ContactPage from './pages/contact.jsx';
import FooterPage from './pages/footer.jsx';
import CopyrightPage from './pages/copyright.jsx';

//---------------------------------------------------------------
const App = () => {
  return (
    <div>
      <NavbarPage />
      <IntroPage />
      <PortfolioPage />
      <AboutPage />
      <ContactPage />
      <FooterPage />
      <CopyrightPage />
    </div>
  );
};

export default App;
