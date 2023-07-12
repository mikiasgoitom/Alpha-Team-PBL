import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('../components/UserData.jason')
      .then(response => response.json())
      .then(data => {
        // Find the user with the matching email using Array.find()
        const loggedInUser = data.users.find(user => user.email === 'john.doe@gmail.com');
        setUser(loggedInUser);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.fullName}</p>
      <p>Email: {user.email}</p>
      <p>Sex: {user.sex}</p>
      <p>Age: {user.age}</p>
      <p>Country: {user.country}</p>
    </div>
  );
}

export default Profile;