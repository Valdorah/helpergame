import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SolutionDetails from './components/solutions/SolutionDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateSolution from './components/solutions/CreateSolution';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/solution/:id" component={SolutionDetails}></Route>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/add" component={CreateSolution} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
