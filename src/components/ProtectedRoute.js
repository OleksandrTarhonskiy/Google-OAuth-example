import React from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function ProtectedRoute({ ...rest }) {
  const history = useHistory();
  
  if (!localStorage.getItem('token')) {
    history.push('/');
    return null;
  }

  return (
    <Route {...rest} />
  );
}

export default ProtectedRoute;