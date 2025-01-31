import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="ai-footer">
      <Container className="py-4">
        <div className="footer-content">
          <p className="mb-0">
            © 2024 AI Nexus. All rights reserved.<br />
            Advancing Ethical Artificial Intelligence
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;