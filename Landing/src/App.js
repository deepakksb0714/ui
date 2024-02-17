// App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'; // Correct import statement
import LandingPage from './components/landing/landing';
import RegisterComponent from './components/register/register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterComponent />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
