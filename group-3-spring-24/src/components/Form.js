import React, { useState } from 'react';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [savedRecipe, setSavedRecipe] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCustomer = {
      first_name: firstName,
      last_name: lastName,
      email_address: emailAddress,
      saved_recipe: savedRecipe
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
       // Reset the form fields after successful submission
       setFirstName('');
       setLastName('');
       setEmailAddress('');
       setSavedRecipe('');
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
      <label>Your saved recipe (REMOVE FIELD ONCE 'SAVE RECIPE' FUNCTIONALITY FIXED):</label>
      <input
        type="text"
        placeholder="Enter your favourite dish"
        value={savedRecipe}
        onChange={(e) => setSavedRecipe(e.target.value)}
      />
      <br></br>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default SignUpForm;
