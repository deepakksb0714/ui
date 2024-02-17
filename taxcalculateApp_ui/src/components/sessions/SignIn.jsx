// app/javascript/components/RegistrationForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormStyle from '../registrations/FormStyle';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      console.log('Data to be sent:', { email, password});
      const response = await fetch('http://localhost:3000/users/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({ user:{email, password} }),
      });

      if (response.ok) {
        const authorizationHeader = response.headers.get('Authorization');
        console.log(authorizationHeader)
  
        // Check if the Authorization header contains a Bearer token
        if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
          // Store the entire Authorization header in localStorage
          localStorage.setItem('authToken', authorizationHeader);
  
       
          console.log('Sign in Successful');
          navigate('/');
        } else {
          console.error('No Bearer token found in the Authorization header');
        }
      } else {
        console.error('Sign in error');
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };
  return (
 
    <FormStyle title="Sign in to continue" subtitle = "">
            <div className="card-body">
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
                    Sign In
                  </button>
                </div>
              </form>
            </div>
            </FormStyle> 
  );
};

// Locate the root element where you want to render the form
// const rootElement = document.getElementById('new');

// // Render the form inside the root element
// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <RegistrationForm />
//   </React.StrictMode>
// );

// Export the component for potential reuse
export default SignIn;
