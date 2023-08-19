import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to our Website</h1>
      <p>Please select an option below:</p>
      <Link to="/login">Login/ Signup</Link>
    </div>
  );
};
