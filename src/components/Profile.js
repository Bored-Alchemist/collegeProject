import React from 'react';
import {Card, CardMedia, CardContent, Grid, Button} from '@material-ui/core';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        enter: false
    }
  }

  componentDidMount(){
      setTimeout(() => this.setState({enter: true}), 1500)
  }

  card = (name = "",enroll = "",img="") => {
    return(
      <div  >
      <Card style={{margin: 20}} className="profile" variant="secondary">
        <CardMedia
          component="img"
          height="auto"
          width="auto"
          image={`${process.env.PUBLIC_URL}${img}`}
        />
        <CardContent >
          <Grid container spacing="2">
            <Grid item xs="12">
              <Card>
                <CardContent>
                  <h4><li>Name           :- {name}</li></h4>
                  <h4><li>Branch         :- C.E</li></h4>
                  <h4><li>Enrollment No. :- {enroll}</li></h4>
                  <h4><li>Team No.       :- 258171</li></h4>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      </div>
    )
  }

  render(){
    return(
      <div >
        <h2 style={{margin:15, marginTop: 20, position: "relative", bottom: "-10px"}}>Our Team Members</h2>
        {this.card("Sujan Barman", "190640107001", "/static/sujan.jpg" )}
        {this.card("Jaydeep Parmar", "190640107019", "/static/jaydeep.jpg")}
        {this.card("Mohini Salvi", "190640107033", "/static/mohini.jpg")}
        <div style={{margin: 15}}>
          <h2>Our Project</h2>
          <p>Our project is about making a Automated Crypto-Currency trading bot that would be able to autonomously place orders of these coins. This bot will be getting 
            getting it's data from a custumly made machine algorithm that would be able to predict them flow of the market. </p>
          <p>As Crypto Coins markets are volatile and the values of these coins are dependent on each other it becomes easy to predict the near future
             value these coins with machine learning algorithms that takes all of these coins into account.
          </p>
          <p>Below is a roadmap to our project</p>
          
        </div>
        <div style={{margin: 15, textAlign: "center"}} >
          <Grid container>
            <Grid item xs={12} style={{padding: 10}}>
              <Button className="btx" variant="contained" color="primary" size="large" style={{}} href="/#/IdeaCanvas">Ideation Canvas</Button>
            </Grid>
            <Grid item xs={12} style={{padding: 10}}>
              <Button className="btx" variant="contained" color="secondary" size="large" style={{}} href="/#/Mind">Mind Mapping Canvas</Button>
            </Grid>
            <Grid item xs={12} style={{padding: 10}}>
              <Button className="btx" variant="contained" size="large" style={{backgroundColor:"purple", color: "white", }} href="/#/ProductDev">Product Development</Button>
            </Grid>
            <Grid item xs={12} style={{padding: 10}}>
              <Button className="btx" variant="contained" size="large" style={{backgroundColor:"teal", color: "white", }} href="/#/Empathy">Empathy Mapping</Button>
            </Grid>
            <Grid item xs={12} style={{padding: 10}}>
              <Button className="btx" variant="contained" size="large" style={{backgroundColor:"indigo", color: "white", }} href="/#/Aeiou">AEIOU Summary</Button>
            </Grid>
            <Grid item xs={12} style={{padding: 10}}>
              <Button className="btx" variant="contained" size="large" style={{backgroundColor:"blue", color: "white", }} href="/static/report.docx" download >Report</Button>
            </Grid>
          </Grid>
        </div>
        
      </div>
    );
  }
}
