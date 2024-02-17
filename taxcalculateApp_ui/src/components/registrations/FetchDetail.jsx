import React, { useState, useEffect } from 'react';
import CompleteRegistration from './CompleteRegistration';

const FetchDetail = ({ confirmationToken }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/get_user_data_by_confirmation_token?confirmation_token=${confirmationToken}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const userDataResponse = await response.json();
          setUserData(userDataResponse);
          console.log(userDataResponse);
        } else {
          console.error('Error fetching user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [confirmationToken]);

  if (!userData) {
    // You can return a loading indicator or null here
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <CompleteRegistration userEmail={userData.email} />
      </div>
    </div>
  );
};

export default FetchDetail;
