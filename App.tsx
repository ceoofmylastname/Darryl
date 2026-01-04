import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { TestingPage } from './components/TestingPage';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testing" element={<TestingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}