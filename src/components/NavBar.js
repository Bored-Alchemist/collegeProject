import React from 'react';
import {AppBar, Toolbar, Button} from '@material-ui/core';
import BlurCircular from '@material-ui/icons/BlurCircular';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return(
      <div>
          <AppBar elevation={10} position="static">
              <Toolbar style={{backgroundColor: "#1565c0"}}>
                <Button disabled>
                  <BlurCircular style={{fontSize: 50}} />
                </Button>
                  <h2>{this.props.title}</h2>
              </Toolbar>
          </AppBar>
      </div>
    );
  }
}
