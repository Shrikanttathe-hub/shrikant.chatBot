import React, { useState } from 'react';
import '../Styles/SignIn.css';


const SignIn = ({ setUserDetails }) => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Form validation
      if (user.username.trim() === '' || user.password.trim() === '') {
        setMessage('Please fill all the fields');
        return;
      }
  
      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: user.username,
            password: user.password,
          }),
        });
  
        const data = await response.json();
        console.log(data);
        console.log("Status", response.status);
        
        if (response.ok) {
  
          setUserDetails(data);
          localStorage.setItem('user Data', JSON.stringify(data));
  
          // Clear the form and message
          setUser({ username: '', password: '' });
          setMessage('');
  
        } else {
          console.log('Login failed:', data.message);
          // Handle login error (show error to the user)
          setMessage(data.message);
        }
      } catch (error) {
        console.log('Login failed:', error.data.message);
        // Handle other errors
        setMessage(error.data.message);
      }
    };
  



  return (
    <form id="signUpForm" onSubmit={handleSubmit}>
    <div className="App1">
     
      <p className='p1'>Welcome back!👋</p>
      <h1>Sign in to your account</h1>
      <div>
        <label>Your email</label>
        <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
      </div>
      <button type='submit'>Continue</button>
      
      {message && <p style={{ color: 'red' }}>{message}</p>}
      <p className='p2'>Forget your password?</p>
      
    </div>
     <footer className='footer-1'>
       <p className='p3'>Don't have an account? <a href='#'>Sign up</a></p>
     </footer>
     </form>
  );
}

export default SignIn;
