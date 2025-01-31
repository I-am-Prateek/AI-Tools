import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaGithub, FaRegLightbulb, FaRobot, FaMicrochip, FaBrain, FaEye, FaLanguage } from 'react-icons/fa';
import '../App.css'; // Ensures styles are applied

function NavigationBar() {
  const [showAITools, setShowAITools] = useState(false);

  return (
    <Navbar expand="lg" className="custom-navbar px-3">
      <Container>
        <Navbar.Brand href="#home" className="nav-brand">
          <FaRegLightbulb className="me-2 text-warning"/> AI ZYzz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            
            <NavDropdown 
              title="AI Categories" 
              id="ai-categories-dropdown"
              className="nav-link"
              show={showAITools}
              onMouseEnter={() => setShowAITools(true)}
              onMouseLeave={() => setShowAITools(false)}
              onClick={() => setShowAITools(!showAITools)}
            >
              <NavDropdown.Item href="#typesSection">
                <FaMicrochip className="me-2 text-primary" /> Machine Learning
              </NavDropdown.Item>
              <NavDropdown.Item href="#typesSection">
                <FaBrain className="me-2 text-danger" /> Neural Networks
              </NavDropdown.Item>
              <NavDropdown.Item href="#typesSection">
                <FaEye className="me-2 text-success" /> Computer Vision
              </NavDropdown.Item>
              <NavDropdown.Item href="#typesSection">
                <FaLanguage className="me-2 text-warning" /> NLP
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="AI Tools" id="ai-tools-dropdown" className="nav-link">
              <NavDropdown.Item 
                href="https://chatgpt.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaRobot className="me-2 text-info" /> ChatGPT
              </NavDropdown.Item>
              <NavDropdown.Item 
                href="https://chat.deepseek.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaRobot className="me-2 text-secondary" /> DeepSeek
              </NavDropdown.Item>
              <NavDropdown.Item href="#all-ais">
                <FaRobot className="me-2 text-warning" /> More AI Tools
              </NavDropdown.Item>
            </NavDropdown>

            {/* AI Blog and More AI as Normal Navbar Links */}
            <Nav.Link 
              href="https://github.com/I-am-Prateek/AI-Tools/blob/main/blog.html"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              AI Blog
            </Nav.Link>

            <Nav.Link 
              href="https://github.com/your-friend-repo/More-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              More AI
            </Nav.Link>
          </Nav>

          <div className="ms-3">
            <a href="https://github.com/I-am-Prateek/AI-Tools" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="github-link">
              <FaGithub />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
