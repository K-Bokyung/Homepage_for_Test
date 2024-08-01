// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

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
      {/* <Routes>
        <Route path='/' element={<NavbarPage />} />
        <Route path='/' element={<IntroPage />} />
        <Route path='/' element={<PortfolioPage />} />
        <Route path='/' element={<AboutPage />} />
        <Route path='/' element={<ContactPage />} />
        <Route path='/' element={<FooterPage />} />
        <Route path='/' element={<CopyrightPage />} />
      </Routes> */}
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
