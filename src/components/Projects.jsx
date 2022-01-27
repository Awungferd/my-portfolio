import React from 'react';
import { Card,CardGroup } from 'react-bootstrap';
import Image1 from "./images/dateConverter.png"
import Image2 from "./images/simplifiedHistory.png"
import Image3 from "./images/Slide1.JPG"
export default function Projects (){

    return(

       <div>
           <h1>Projects! Projects!</h1>
           <CardGroup  style={{color:"tomato", padding:"20px"}} >
  <Card border="primary" bg="light" style={{color:"tomato", padding:"20px"}}>
    <Card.Img variant="top" src={Image2} />
    <Card.Body >
      <Card.Title>History Simplified</Card.Title>
      <Card.Text>
        Tracking the history of the Dollar from Jackeymov through the Holy Roman Empire. Its journey across the Atlantic to the Americas and thence across the Atlantic to West Africa and back to Europe.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Visit this project</small>
    </Card.Footer>
  </Card>
  <Card border='success' bg='light' style={{color:"tomato", padding:"20px"}}>
    <Card.Img variant="top" src={Image1} />
    <Card.Body>
      <Card.Title>Date Converter</Card.Title>
      <Card.Text>
        App to perform the conversion of the Gregorian calendar to the Bangwa calendar.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Visit website</small>
    </Card.Footer>
  </Card>
  <Card border='secondary' bg='light' style={{color:"tomato", padding:"20px"}}>
    <Card.Img variant="top" src={Image3} />
    <Card.Body>
      <Card.Title>YouLearn</Card.Title>
      <Card.Text>
      Hybrid learning is one of the main trends in the digitization for all, younger students and working adults.
       Our low code SaaS solution enables drivers of universities, 
      high schools, schools and even every kind of enterprise or even non-government organizations to setup, 
      design and manage individual platforms for e-learning
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Visit website</small>
    </Card.Footer>
  </Card>
</CardGroup>
       </div>

    )

}