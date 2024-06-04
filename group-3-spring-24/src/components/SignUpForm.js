import React, { useState } from "react";
// 'useNavigate' hook used to redirect the user after submitting sign up form
import { useNavigate } from "react-router-dom";
// Import useDispatch hook from react-redux to access and modify the state
import { useDispatch } from "react-redux";
// Import the reducers from customerSlice
import {
  storeCustomerId,
  storeFirstName,
  setSignInStatus,
} from "../redux/customerSlice";
// Import CSS
import "../styles/SignUp.css";

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  // useDispatch to create a dispatch function to dispatch actions
  const dispatch = useDispatch();

  // useNavigate to navigate to selected page after form submit
  const navigate = useNavigate();

  // Asynchronous function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    //  'newCustomer' object created with values from form fields
    const newCustomer = {
      first_name: firstName,
      last_name: lastName,
      email_address: emailAddress,
      password: password,
    };

    // 'fetch' function to send POST request to server via '/signup' endpoint with newCustomer data
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCustomer),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // If request successful, convert response to JSON and log result
      const result = await response.json();
      console.log("New customer added:", result);

      // Dispatch actions to update user information and signin status in redux store
      // Log to verify successful save
      dispatch(storeCustomerId(result.customer_id));
      dispatch(storeFirstName(firstName));
      dispatch(setSignInStatus(true));
      console.log("User set in store:", {
        firstName,
        customerId: result.customer_id,
      });

      // Redirect to Recipes page using 'useNavigate' hook
      navigate("/Recipes");
    } catch (error) {
      console.error("Error adding new customer:", error);
    }
  };

  return (
    <>
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
      <label>Create password:</label> {/* New Password field */}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>

      {/* On submitting form, 'handleSubmit' function is called  */}
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default SignUpForm;
