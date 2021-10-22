import React from 'react';
import { GoogleLogout } from 'react-google-login';

function HomePage(props) {
  const handleLogout = (res) => {
    console.log(res);
  };

  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={handleLogout}
      />
    </div>
  );
}

export default HomePage;