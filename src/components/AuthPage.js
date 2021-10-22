import React from 'react';
import GoogleLogin from 'react-google-login';

import useAuth from '../hooks/useAuth';

function AuthPage(props) {
  const { auth } = useAuth();

  const handleSuccessResponse = (res) => {
    console.log(res);
    auth(res);
  }

  const handleError = (res) => {
    console.error(res);
  }

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Login"
        onSuccess={handleSuccessResponse}
        onFailure={handleError}
        cookiePolicy={'single_host_origin'}
        uxMode={'popup'}
      />
    </div>
  );
}

export default AuthPage;