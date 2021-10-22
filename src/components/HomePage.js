import React, { useEffect, useState } from 'react';
import { GoogleLogout } from 'react-google-login';

import useAuth from '../hooks/useAuth';
import './HomePage.css';

function HomePage(props) {
  const [user, setUser] = useState({});
  const { logout } = useAuth();

  const handleLogout = (res) => {
    console.log(res);
    logout();
  };

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) setUser(JSON.parse(userData));
  }, [setUser])

  return (
    <div className='profile'>
      <img 
        src={user.imageUrl} 
        alt='avatar' 
      />
      <h1>{user.name}</h1>
      <a href={`mailto:${user.email}`}>
        {user.email}
      </a>
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={handleLogout}
      />
    </div>
  );
}

export default HomePage;