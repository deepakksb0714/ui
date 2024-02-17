// app/javascript/components/RegistrationForm.jsx
// import { useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormStyle from './FormStyle';



const CompleteRegistration = ({userEmail}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [subdomain, setSubdomain ] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [passwordError, setPasswordError] = useState('');
   const navigate = useNavigate();

   console.log("hello",userEmail)
  // useEffect(() => {
  //   setEmail(pemail);
  // }, [pemail]);
  
  
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleSubdomainChange = (e) => {
    setSubdomain(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== passwordConfirmation) {
      setPasswordError("Passwords don't match");
      return;
    }
    setShowPopup(true)

    // navigate('/');
    try {
     
      console.log('Data to be sent:', {  password, passwordConfirmation, firstName, lastName, companyName, subdomain });
      const response = await fetch('http://localhost:3000/users/complete_registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'email': userEmail, // Replace with the actual email
        },
        body: JSON.stringify({ user:{password, password_confirmation: passwordConfirmation, first_name: firstName, last_name: lastName, company_name: companyName, subdomain} }),
      });

      if (response.ok) {
        console.log('Registration Successful');
        setRegistrationSuccessful(true);
      } else {                                                                                              
        console.error('Registration Error');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    
    
        <div>
          {showPopup ? (
            <div className="container mt-3">
              <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-20">
                  <div className="card text-center" style={{ backgroundColor: 'rgb(250, 70, 22)', color: 'white' }}>
                    <div className="card-body">
                      <h4>Thanks for registering</h4>
                      <p>Your account was created successfully!</p>
                      <button
                    type="button"
                    className="btn btn-sm"
                    style={{ backgroundColor: 'rgb(250, 70, 22)', color: 'white' }}
                    onClick={() => navigate('/sign-in')} // Navigate to the sign-in component
                  >
                    Sign In
                  </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
          
       
          <FormStyle title="Finish setting up your account" subtitle= "Email address verified">
            <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            defaultValue={userEmail}
            className="form-control form-control-sm"
            placeholder={email}
            readOnly
          />
          <small className="form-text text-muted">This is your registered email.</small>
        </div>

              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control form-control-sm"
                  placeholder="First Name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-control form-control-sm"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Company Name:</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="form-control form-control-sm"
                  placeholder="Company Name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Subdomain:</label>
                <input
                  type="text"
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value)}
                  className="form-control form-control-sm"
                  placeholder="Subdomain"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control form-control-sm"
                  placeholder="Password"
                  autoComplete="new-password"
                  required
                />
              </div>

              <div className="form-group">
            <label>Password Confirmation:</label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className={`form-control form-control-sm ${passwordError ? 'is-invalid' : ''}`}
              placeholder="Password Confirmation"
              autoComplete="new-password"
              required
            />
            {passwordError && <div className="invalid-feedback">{passwordError}</div>}
          </div>

              <div className="text-center mt-3">
                <button
                  type="submit"
                  className="btn btn-sm"
                  style={{ backgroundColor: 'rgb(250, 70, 22)', color: 'white' }}
                >
                  Submit
                </button>
              </div>
            </form>
            </FormStyle>
      
          )}
    </div>
  );
};

export default CompleteRegistration;