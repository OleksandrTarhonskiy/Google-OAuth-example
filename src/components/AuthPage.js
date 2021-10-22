import React from 'react';
import GoogleLogin from 'react-google-login';

function AuthPage(props) {
  const getResponse = (res) => {
    console.log(res);
  }
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Login"
        onSuccess={getResponse}
        onFailure={getResponse}
        cookiePolicy={'single_host_origin'}
        uxMode={'popup'}
      />
    </div>
  );
}

export default AuthPage;