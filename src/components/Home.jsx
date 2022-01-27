import { Card, Button, Nav } from "react-bootstrap";
import React, {useState,UseEffect} from "react";
import Image0 from "./images/Mbecha022.png"
import Image01 from "./images/bgImg_hamish-weir-aYEUXnVG8tg-unsplash.jpg"
import Image02 from "./images/homepageBg5.png"

export default function LandingPage() {


    return (<div >
        <Card style={{ height:"100vh", background: "tomato"}}>        
         <Card.Img src={Image02}/> 
          <Card.ImgOverlay>        
  <Card.Header>      
  </Card.Header> 
  </Card.ImgOverlay>
</Card>
    </div>)
    
}