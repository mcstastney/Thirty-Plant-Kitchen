import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCustomer = {
      first_name: firstName,
      last_name: lastName,
      email_address: emailAddress,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCustomer)
      });
      const result = await response.json();
      console.log('New customer added:', result);

      // Store user information in context
      setUser({ firstName, customerId: result.customer_id });

      // Log the user to verify successful save to context
      console.log('User set in context:', { firstName, customerId: result.customer_id });

      // Redirect to MyAccount page
      navigate('/myaccount', { state: { firstName, customerId: result.customer_id } });      

    } catch (error) {
      console.error('Error adding new customer:', error);
    }
  };

  return (
    <>
    <h2>Register for free!</h2>
    <form onSubmit={handleSubmit}>
      <label>First name:</label>
      <input
        type="text"
        placeholder="Enter your first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br></br>
      <label>Surname:</label>
      <input
        type="text"
        placeholder="Enter your surname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br></br>
      <label>Email address:</label>
      <input
        type="email"
        placeholder="Email Address"
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
      />
      <br></br>
      <label>Password:</label> {/* New Password field */}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default SignUpForm;
