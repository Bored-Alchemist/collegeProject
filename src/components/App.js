import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import 'fontsource-roboto';

import './App.css';
import Home from './Home';
import IdeaCanvas from './IdeaCanvas';
import Mind from './Mind';
import ProductDev from './ProductDev';
import Empathy from './Empathy';
import Aeiou from './Aeiou';

export default class App extends React.Component {
  render(){
    return(
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/IdeaCanvas" component={IdeaCanvas} />
          <Route path="/Mind" component={Mind} />
          <Route path="/ProductDev" component={ProductDev} />
          <Route path="/Empathy" component={Empathy} />
          <Route path="/Aeiou" component={Aeiou} />
      </Router>
    )
  }
}