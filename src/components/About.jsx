
import React from 'react';
import { Card } from 'react-bootstrap';
import Image0 from "./images/Mbecha023.png"
import Image00 from "./images/Mbecha02-removebg.png"
import Image01 from "./images/homepageBg4.png"

import "./components.css"
export default function About (){
  
    return(<div>
     
        <Card  className="bg-white text-black">
  <Card.Img   src={Image01 } alt="Card image"/>
  <Card.ImgOverlay>
   
    <Card.Text className='aboutCard' style={{border:"1px solid gold", height:"95%", width:"70%", margin:"auto", borderRadius:"5%", padding:"10px"}}>
   <h2>This is Me</h2>
    <p>
I am a junior full-stack developer with a passion for channeling the potential of single-page applications to deliver creative solutions to clients’ needs. 
</p>
<p>
Coming to tech from a humanities background, I am particularly interested in developing language, culture, and entertainment apps for learners, teachers, and content creators from marginal communities. My previous experiences in CMS, content creation, and software development place me in a position to be able to match client ambitions with product scalability. 
</p>
<p>
During my training at the DCI, I took part in group projects, which enabled me to hone my technical and interpersonal skills. In our final project especially, I served as the sole backend developer and a contributing frontend developer. 
</p>
<p>
I demonstrated excellent leadership and communication skills in conceiving and sharing out daily tasks, as well mediating conflicts among team members. This significantly contributed to the success of our project. I am outgoing, team-spirited, and always ready to learn new technologies for personal and company growth.
</p>

    </Card.Text>
  
  </Card.ImgOverlay>
</Card>
    </div>

        

    )

}