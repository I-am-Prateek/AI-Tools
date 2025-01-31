import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import image1 from '../image/image1.jpg';
import image2 from '../image/image2.jpeg';
import image3 from '../image/image3.jpeg';

function TypesSection() {
  const aiTypes = [
    {
      title: "Machine Learning",
      description: "Systems that learn patterns from data without explicit programming, enabling predictive analytics and decision-making.",
      image: image1
    },
    {
      title: "Neural Networks",
      description: "Biologically-inspired algorithms that recognize complex patterns through layered processing units.",
      image: image2
    },
    {
      title: "Computer Vision",
      description: "Algorithms that enable machines to interpret and understand visual information from the world.",
      image: image3
    }
  ];

  return (
    <section id="typesSection" className="ai-types py-5">
      <Container>
        <h2 className="section-title text-center mb-5 neon-text">AI Technologies</h2>
        <Row>
          {aiTypes.map((type, index) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
              <Card className="ai-card h-100">
                <div className="card-image-container">
                  <Card.Img 
                    variant="top" 
                    src={type.image} 
                    className="card-image"
                    alt={type.title}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mb-3 fs-4 neon-text">{type.title}</Card.Title>
                  <Card.Text className="flex-grow-1 text-light">
                    {type.description}
                  </Card.Text>
                  <a href="#more-info" className="ai-card-button mt-auto">Learn More</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TypesSection;
