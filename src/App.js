import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SolutionDetails from './components/solutions/SolutionDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/solution/:id" component={SolutionDetails}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
