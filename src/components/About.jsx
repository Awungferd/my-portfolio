
import React from 'react';
import { Card } from 'react-bootstrap';
import Image0 from "./images/Mbecha023.png"
import Image00 from "./images/Mbecha02-removebg.png"
export default function About (){

    return(<div>
     
        <Card className="bg-white text-black">
  <Card.Img  style={{ width: '20%', marginRight:"auto", borderRadius:"50%" }} src={Image00 } alt="Card image"/>
  <Card.ImgOverlay>
    <Card.Title as="h2">About Me</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
    </div>

        

    )

}