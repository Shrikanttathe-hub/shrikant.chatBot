import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details using the saved user id
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const userId = storedUser ? storedUser.id : null;

    if (userId) {
      fetch(`https://dummyjson.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          // Save user details to local storage
          localStorage.setItem('user', JSON.stringify(data));
          setUser(data);
        })
        .catch((error) => console.error('Error fetching user details:', error));
    }
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Display other user details */}
        </div>
      )}
    </div>
  );
};

export default Profile;
