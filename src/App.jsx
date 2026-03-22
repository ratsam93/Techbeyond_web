import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TemplatePage } from './components/TemplatePage';
import homeTemplate from './templates/home_techbeyond.html?raw';
import servicesTemplate from './templates/services_techbeyond.html?raw';
import portfolioTemplate from './templates/portfolio_techbeyond.html?raw';
import aboutTemplate from './templates/about_us_techbeyond.html?raw';
import contactTemplate from './templates/contact_us_techbeyond.html?raw';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TemplatePage html={homeTemplate} />} />
      <Route path="/services" element={<TemplatePage html={servicesTemplate} />} />
      <Route path="/portfolio" element={<TemplatePage html={portfolioTemplate} />} />
      <Route path="/about-us" element={<TemplatePage html={aboutTemplate} />} />
      <Route path="/contact-us" element={<TemplatePage html={contactTemplate} />} />
      <Route path="/about" element={<Navigate to="/about-us" replace />} />
      <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
