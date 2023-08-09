import React from 'react';

const Header = ({ onLoginClick, onSignupClick }) => {
  return (
    <header>
      <h1>Landing Page</h1>
      <div className="auth-buttons">
        <button onClick={onLoginClick}>Login</button>
        <button onClick={onSignupClick}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
