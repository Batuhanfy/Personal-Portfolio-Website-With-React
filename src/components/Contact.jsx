import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Contact = () => (
  <Container className="my-5">
    <h2>Contact Me</h2>
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Your Name" required />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Your Email" required />
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input type="textarea" name="message" id="message" required />
      </FormGroup>
      <Button type="submit" color="primary">Send</Button>
    </Form>
  </Container>
);

export default Contact;
