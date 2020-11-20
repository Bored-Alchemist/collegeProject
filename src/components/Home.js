import React from 'react';
import 'fontsource-roboto';
import CircularProgress from '@material-ui/core/CircularProgress';
import {CardMedia, Paper} from '@material-ui/core';

import NavBar from './NavBar';
import Profile from './Profile';
import './App.css';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }
  componentDidMount(){
    this.setState({loading: false})
  }
  home = () => {
    return(
      <div className="App">
        <NavBar title="Our Team" />
        <div className="info" >
          <Paper elevation={10} style={{margin: 20, marginTop: 40}}>
              <Profile />
          </Paper>
        </div>
      </div>
    )
  }
  render(){
    return this.state.loading ? <CircularProgress /> : this.home();
  }
}