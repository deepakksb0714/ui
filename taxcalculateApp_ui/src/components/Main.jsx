import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import UserProfile from './profile/UserProfile';
import RegistrationForm from './registrations/RegistrationForm';
import SignIn from './sessions/SignIn';
import SignOut from './sessions/SignOut';
import ConfirmEmail from './registrations/ConfirmEmail';
import Dashboard from './Dashboard/Dashboard';
import Home from './Dashboard/Home';
import Calculator from './Dashboard/Calculator';
import Header from './Dashboard/Header';
import Sidebar from './Dashboard/Sidebar';
import './style.css'

const Main = () => {
  // Define the routes where you want to hide the entire container
  const routesWithoutContainer = ['/sign-in', '/sign-out', '/registration', '/confirm-email'];

  // Function to check if the current route should hide the entire container
  const shouldHideContainer = () => {
    const currentPath = window.location.pathname;
    return routesWithoutContainer.includes(currentPath);
  };

  return (
    <>
      {!shouldHideContainer() && (
        <Container fluid className='inner-container'>
           <Header />
          <Row>
            <Col md={2} className="bg-light ">
             
              <Sidebar />
            </Col>
            <Col md={9} className="p-1 m-5 ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/my-profile" element={<UserProfile />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      )}

      <Container fluid>
        <Routes>
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-out" element={<SignOut />} />
        </Routes>
      </Container>
    </> 
  );
};

export default Main;
