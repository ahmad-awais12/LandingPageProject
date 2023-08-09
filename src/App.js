import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleSignup = (username) => {
    setLoggedInUser(username);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <div className="App">
      <Header
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />
      {loggedInUser ? (
        <Dashboard username={loggedInUser} />
      ) : (
        <>
          {showLogin && <Login onLogin={handleLogin} />}
          {showSignup && <Signup onSignup={handleSignup} />}
        </>
      )}
    </div>
  );
}

export default App;
