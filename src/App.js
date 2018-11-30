import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/home';
import Get from './Get/get';
import About from './About/about';
import DataChild from './DataChild/DataChild';
import './App.css';
class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/get" component={Get} />
                <Route path="/about" component={About} />
                <Route path="/DataChild" component={DataChild} />
            </div>
        </Router>
    );
  }
}

export default App;
