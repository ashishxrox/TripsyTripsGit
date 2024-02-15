import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Package from './components/package/Package';
import Visa from './components/visa/Visa';
import VisaState from './context/Visa/VisaState';
import VisaType from './components/visa/VisaType';
import PackageState from './context/Package/PackageState';
import Application from './components/visa/Application';
import LogoImg from './components/navbar/LogoImg';
import Hamburger from './components/navbar/Hamburger';
import CallBox from './components/CallBox';
import ScrollToTop from './components/ScrollTop';
import FormDataState from './context/FormData/FormDataState';
import PaymentInterface from './components/visa/PaymentInterface';
import PkgApplication from './components/package/PkgApplication'
import PageLoader from './components/PageLoader';
import Dashboard from './components/admin/Dashboard';
import DashboardState from './context/Dashboard/DashboardState';
import Footer from './components/footer/Footer';
import PrivacyPol from './components/footer/PrivacyPol';

const App = () => {

  const [isLoading, setIsLoading] = useState(null);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  return (
    <div style={{ backgroundColor: '#000047' }}>
      <DashboardState>
      <PackageState>
        <FormDataState>
        <VisaState>
          
          <BrowserRouter>
          
            <div className="header">
              <div className="menu-1">
                <Navbar />
              </div>
              <div className="menu-2">
                <div className="logo-img-div-home">
                  <LogoImg />
                </div>
                <div className="ham-menu-div-home">
                  <Hamburger />
                </div>
              </div>
            </div>
            <ScrollToTop />
            <Routes>
            <Route exact path="/loader" index element={<PageLoader  />} />
            <Route exact path="/adminxcv876_@@plm123Qw" index element={<Dashboard  />} />
              <Route
                exact
                path="/"
                index
                element={<Home onLoadStart={handleLoadStart} onLoadComplete={handleLoadComplete}/>}
              />
              <Route exact path="/about" index element={<About  />} />
              <Route exact path="/visa" index element={<Visa  />} />
              <Route
                path={`/visa/application/:countryName`}
                index
                element={<Application/>}
              />
              <Route
                path={`/package/application/:countryName`}
                index
                element={<PkgApplication />}
              />
              <Route
                path={`/visa/application/:countryName/:applicationName`}
                index
                element={<VisaType  />}
              />
              <Route exact path="/package" index element={<Package  />} />
              <Route exact path="/payment" index element={<PaymentInterface />} />
              <Route exact path="/policy" index element={<PrivacyPol />} />
              
            </Routes>
            <CallBox />
          </BrowserRouter>
          <Footer/>
          
        </VisaState>
        </FormDataState>
      </PackageState>
      </DashboardState>
    </div>
  );
};

export default App;
