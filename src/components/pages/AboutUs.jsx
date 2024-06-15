import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css'; // 
import { Container, Row, Col } from 'react-bootstrap';


const AboutUs = () => {
  return (
    <div className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="about-content text-center">
              <h2 className="animate__animated animate__fadeInUp">About Us</h2>
              <p className="animate__animated animate__fadeInUp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                consequat lacus, eu fermentum nisi aliquam sit amet. Sed mollis ultricies nisi
                eget iaculis. Curabitur quis ligula ac magna accumsan lacinia vel a sem.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={4} className="text-center animate__animated animate__fadeInLeft">
            <img
              src="https://via.placeholder.com/200"
              alt="Team Member 1"
              className="img-fluid rounded-circle mb-4"
            />
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
          </Col>
          <Col md={4} className="text-center animate__animated animate__fadeInRight">
            <img
              src="https://via.placeholder.com/200"
              alt="Team Member 2"
              className="img-fluid rounded-circle mb-4"
            />
            <h4>Jane Smith</h4>
            <p>Chief Designer</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
