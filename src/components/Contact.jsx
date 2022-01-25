import React from 'react';
import {Form} from 'react-bootstrap';
export default function Contact() {

    return (

        <div style={{background:"tomato", height: "100vh"}}>
            <h1>Contact Me</h1>
            <Form style={{width: "50vw", margin: "auto", background: "skyBlue"}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Please type your first and last names"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea"
                        rows={3}/>
                </Form.Group>
            </Form>
        </div>

    )

}
