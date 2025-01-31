import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section id="heroSection" className="ai-hero">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="mx-auto text-center">
            <div className="hero-content">
              <h1 className="display-3 fw-bold mb-4 neon-text">
                The Evolution of Artificial Intelligence
              </h1>
              <p className="lead fs-4 mb-5">
                Exploring Machine Consciousness and Computational Intelligence
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;