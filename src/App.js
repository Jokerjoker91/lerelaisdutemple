import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import {IntlProvider} from "react-intl";
import txt_fr from "./translations/fr.json";
import txt_gb from "./translations/gb.json";

import Navbar from "./components/nav";

import Home from './pages/home';
import Activites from './pages/activites';
import Blog from './pages/blog';
import Chambres from './pages/chambres';
import Reservation from './pages/reservation';
import Footer from './pages/footer';

import './App.css';


const messages = {
  'fr': txt_fr,
  'en': txt_gb
};
const language ="fr";

class App extends Component  {

  state = {
    langue:language
  };

  onChangeLanguage=this.onChangeLanguage.bind(this);

  onChangeLanguage(lang) {
    switch (lang) {
        case 'GB': this.setState({ langue: "en" }); break;
        case 'FR': this.setState({ langue: "fr" }); break;
        default: break;
    }
  }
  render() {
    return (
      <IntlProvider locale={this.state.langue} messages={messages[this.state.langue]}>
        <Router>
          <Navbar onChangeLanguage={this.onChangeLanguage} langue={this.state.langue}/>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/activites' component={Activites} />
            <Route path='/blog' component={Blog} />
            <Route path='/chambres' component={Chambres} />
            <Route path='/reservation' component={Reservation} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </IntlProvider>
    );
  }
  
}

export default App;