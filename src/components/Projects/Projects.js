import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Drive Test Audit Tool"
              description="Designed and implemented a web-based platform to automate telecom tower auditing and maintenance. Leveraged OCR
                          and machine learning to extract and analyze field data, significantly improving operational visibility, reporting accuracy, and
                          overall maintenance efficiency."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bright Weddings – Matrimonial Web Application"
              description="Developed a secure full-stack matrimonial platform with real-time cloud integration. Implemented user authentication,
                            intelligent matchmaking algorithms, and profile management features to deliver a seamless and personalized user
                            experience."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="BDesigner – Construction Management Platform (Android & Web)"
              description="Developed an integrated platform enabling architects and clients to interact in real time. Engineered Android and web
                            interfaces to streamline project planning, design sharing, and live feedback, enhancing productivity and design quality."
              ghLink=""
              demoLink="https://bdesigner.online/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Solcon360 (Extraction Utility)"
              description="Created an advanced utility tool to extract structured data from inconsistent and unstructured financial reports using OCR
                          and Generative AI. Enabled seamless data parsing, transformation, and storage into PostgreSQL, streamlining financial data
                          processing and analysis."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
