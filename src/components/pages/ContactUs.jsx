import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <div
      className="contact-section"
      style={{
        backgroundImage: `url('https://source.unsplash.com/random/1600x900')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', // Added shadow for depth effect
      }}
    >
      <Container className="py-5">
        <div className="contact-content text-center text-white mb-5">
          <h2>Contact Us</h2>
          <p className="lead">
            Have a question or want to get in touch? Send us a message below!
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow" style={{ maxWidth: '600px', justifyItems:'center' }}>
          <Form>
            <Container>
              <Form.Group controlId="formBasicName" className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicMessage" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Container>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
