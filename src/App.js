import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Route path='/'              component={AuthPage} exact />
        <ProtectedRoute path='/home' component={HomePage} />
      </BrowserRouter>
    </main>
  );
}

export default App;
