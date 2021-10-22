import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Route path='/'     component={AuthPage} />
        <Route path='/home' component={HomePage} />
      </BrowserRouter>
    </main>
  );
}

export default App;
