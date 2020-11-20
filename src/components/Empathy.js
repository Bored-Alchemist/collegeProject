import React from 'react';
import {Paper, Card, CardMedia, Button} from '@material-ui/core';
import NavBar from './NavBar';


export default class Empathy extends React.Component {
    render(){
        return(
            <div>
               <NavBar title="Empathy Canvas" />
               <Paper style={{margin: 20, marginTop: 40}}>
                   <Card>
                       <CardMedia
                       component="img"
                       height="auto"
                       width="auto"
                       image={`${process.env.PUBLIC_URL}/static/Empathy.jpg`}
                       />
                   </Card>
                   <div style={{textAlign: "center"}}>
                        <Button download style={{margin:20}} variant="contained" color="primary" size="large" href={`${process.env.PUBLIC_URL}/static/ideacanvas.jpg`} >Download Img</Button>
                   </div>
                   
               </Paper>
            </div>
        )
    }
}