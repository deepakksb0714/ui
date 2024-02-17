// app/javascript/components/RegistrationForm.jsx
import React, { useState } from 'react';
import FormStyle from './FormStyle';
import ConfirmEmail from './ConfirmEmail';

const RegistrationForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [ConfirmationForm, setConfirmationForm] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [confirmationToken, setConfirmationToken] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setPasswordError("Passwords don't match");
      return;
    }
    setConfirmationForm(true);
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: { email } }),
      });

      if (response.ok) {
        const jsonData = await response.json();
        const { confirmation_token } = jsonData;

        console.log('Confirmation Token:', confirmation_token);

        setConfirmationToken(confirmation_token);

        const authorizationHeader = response.headers.get('Authorization');
        console.log(authorizationHeader);

        // Check if the Authorization header contains a Bearer token
        if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
          // Store the entire Authorization header in localStorage
          localStorage.setItem('authToken', authorizationHeader);

          setRegistrationSuccessful(true);
          console.log('Registration Successful');
        } else {
          console.error('No Bearer token found in the Authorization header');
        }
      } else {
        console.error('Registration Error');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  
  
  return (
    <>
   {ConfirmationForm ? (
                   <ConfirmEmail userEmail={email} />
                ):
           (     
    <FormStyle title="Sign up to continue" subtitle = "">
                  <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="form-control"
                        placeholder="Email"
                        required
                        
                      />
                    </div>
                    {/* ... rest of the form elements ... */}
                    <div className="text-center mt-3">
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: 'rgb(250, 70, 22)',
                          color: 'white',
                        }}
                        id="send-confirmation-btn"
                      >
                        Send confirmation email
                      </button>
                    </div>
                  </form>
                  </FormStyle>
           )} 
                
        </>      
    
  );
};

export default RegistrationForm;
