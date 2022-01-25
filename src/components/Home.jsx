import { Card, Button, Nav } from "react-bootstrap";
import React, {useState,UseEffect} from "react";
import Image0 from "./images/Mbecha022.png"
import Image01 from "./images/bgImg_hamish-weir-aYEUXnVG8tg-unsplash.jpg"
export default function LandingPage() {


    return (<div >
        <Card style={{ height:"100vh", background: "tomato"}}>
        
        {/* <Card.Img src={Image01}/> */}
        
        
  <Card.Header>
    
  </Card.Header>
  {/* <Card.Img  style={{ width: '20%', marginRight:"auto", borderRadius:"50%" }} src={Image0 } alt="Card image"/>   */}
  <Card.Body>  
  
 
   <Card.Title>Welcome to my World!</Card.Title>
    <Card.Text>
      
      <h1>Ferdinand Mbecha</h1>
      <h2>Full Stack Developer</h2>
      <h3>Ready to Work Remotely and Onsite</h3>
    </Card.Text>
    
    
  </Card.Body>
  
</Card>
    </div>)
    
}