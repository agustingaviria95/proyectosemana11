import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Homepage from './views/Homepage';
import Registerpage from './views/Registerpage';
import Loginpage from './views/Loginpage';
import Contactpage from './views/Contactpage';
import AboutUs from './views/SobreNosotros';
import Footer from './Components/Footer';
import Results from './views/Results';
import CardDetailView from './views/CardDetailView';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/carddetail">
            <CardDetailView />
          </Route>
          <Route path="/registerpage">
            <Registerpage />
          </Route>
          <Route path="/loginpage">
            <Loginpage />
          </Route>
          <Route path="/contactpage">
            <Contactpage />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}