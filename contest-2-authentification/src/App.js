import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user details to local storage
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data);

        // Redirect to profile page
        window.location.href = '/profile';
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <form className=''>
    <div className="App">
     
      <p className='p1'>Welcome back!👋</p>
      <h1>Sign in to your account</h1>
      <div>
        <label>Your email</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Continue</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p className='p2'>Forget your password?</p>
   
    </div>
     <footer className='footer-1'>
       <p className='p3'>Don't have an account? <a href='#'>Sign up</a></p>
     </footer>
     </form>
  );
}

export default App;
