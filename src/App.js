import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Components/Home';
import About from './Components/About';

const Page404 = ({ location }) => (
        <div>
                <h2>No match found for <code>{location.pathname}</code></h2>
        </div>
);

class App extends Component {

  render() {
    return (
	<BrowserRouter>
      <div>
	<p className="App-intro">
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
		</ul>
	</p>
	<Switch>
		<Route path="/" exact component={Home}/>
		<Route path="/about" component={About}/>
      		<Route component={Page404} />
	</Switch>
	</div>
</BrowserRouter>
    );
  }
}

export default App;
