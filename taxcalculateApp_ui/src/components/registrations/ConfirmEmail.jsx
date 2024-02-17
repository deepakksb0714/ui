// ConfirmEmail.jsx
import React, { useState } from 'react';
import FetchDetail from './FetchDetail';
import FormStyle from './FormStyle';

const ConfirmEmail = ({userEmail}) => {
  const [confirmationToken, setConfirmationToken] = useState('');
  const [emailVerifySuccessfully, setEmailVerifySuccessfully] = useState(false);
   console.log(userEmail)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/users/confirmation?confirmation_token=${confirmationToken}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('User confirmed successfully!');
        // Handle successful confirmation, e.g., redirect or show a success message
        setEmailVerifySuccessfully(true);
      } else {
        console.error('Error confirming user:', response.status);
        // Handle confirmation error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error confirming user:', error);
    }
  };

  return (
    <div>
      {emailVerifySuccessfully ? (
        <FetchDetail confirmationToken={confirmationToken} />
      ) : (
        <FormStyle title="We have mailed you a code" subtitle="" message={<span>
          To complete your account setup, enter a code sent to {' '}
          <strong>{userEmail}</strong>.
        </span>}>
        <div>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
                     
                      <input
                        type="text"
                        value={confirmationToken}
                        onChange={(e) => setConfirmationToken(e.target.value)}
                        className="form-control"
                        required
                        
                      />
                    </div>
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
                        Submit
                      </button>
                    </div>
          </form>
        </div>
        </FormStyle>
      )}
    </div>

  );
};

export default ConfirmEmail;
