import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Import your components
import Login from "./Login";
import DeviceComponent from "./DeviceComponent";
import HeartbeatMonitor from "./HeartbeatMonitor";

const Routes = () => {
  // Your authentication logic to check if the user is logged in
  const isAuthenticated = true; // Replace this with your authentication check

  return (
    <Router>
      <Switch>
        {/* Public Route: Login page (accessible to everyone) */}
        <Route exact path="/" component={Login} />
        <Route exact path="/devices" component={DeviceComponent} />
        <Route exact path="/device/:id" component={HeartbeatMonitor} />

        {/* Private Routes: Only accessible to authenticated users */}
      </Switch>
    </Router>
  );
};

export default Routes;
