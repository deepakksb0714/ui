// SignOut.js
import React from 'react';
import axios from 'axios';

const SignOut = async () => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await axios.delete('http://localhost:3000/users/sign_out', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token, // Ensure 'Bearer' is added before the token
      },
    });

    if (response.status === 200) {
      console.log('Successfully signed out');
      
    } else {
      console.error('Sign-out failed');
    }
  } catch (error) {
    console.error('Error during sign-out:', error);
  }
};

const SignOutButton = () => {
  const handleSignOut = async () => {
    await SignOut();
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOutButton;
