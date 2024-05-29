import React, { useState, useContext } from 'react';

// 'useNavigate' hook used to redirect the user after submitting sign up form
import { useNavigate } from 'react-router-dom';

// 'UserContext' used to share data (customerId) with other components
import { UserContext } from './UserContext';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  // Asynchronous function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    //  'newCustomer' object created with values from form fields
    const newCustomer = {
      first_name: firstName,
      last_name: lastName,
      email_address: emailAddress,
    };

    // 'fetch' function to send POST request to server via '/signup' endpoint with newCustomer data
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCustomer)
      });
      
      // If request successful, convert response to JSON and log result
      const result = await response.json();
      console.log('New customer added:', result);

      // Store user information in context and log user to verify successful save
      setUser({ firstName, customerId: result.customer_id });
      console.log('User set in context:', { firstName, customerId: result.customer_id });

      // Redirect to MyAccount page using 'navigate' function
      navigate('/myaccount', { state: { firstName, customerId: result.customer_id } });      

    } catch (error) {
      console.error('Error adding new customer:', error);
    }
  };

  return (
    <>
    <h2>Register for free!</h2>

    {/* Each form input field is controlled by the component's state
    values are set to corresponding state variable, onChange updates the state */}
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

      {/* On submitting form, 'handleSubmit' function is called  */}
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default SignUpForm;
