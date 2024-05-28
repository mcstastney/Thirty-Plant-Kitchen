import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

function LoginForm() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginDetails = {
      email_address: emailAddress,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginDetails)
      });
      const result = await response.json();
      console.log('Login result:', result);

      if (result.success) {
        // Store user information in context
        setUser({ firstName: result.first_name, customerId: result.customer_id });

        // Redirect to MyAccount page
        navigate('/myaccount', { state: { firstName: result.first_name, customerId: result.customer_id } });
      } else {
        console.error('Login failed:', result.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email address:</label>
        <input
          type="email"
          placeholder="Email Address"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <br></br>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginForm;
