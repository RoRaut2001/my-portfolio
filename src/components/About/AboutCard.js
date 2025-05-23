import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohini Raut </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently employed as a software developer at Insta ICT Solutions Pvt Ltd.
            <br />
            I have completed Bachelor of Technology in Computer Science and Engineering
            from SVERI's College of Engineering, Pandharpur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rohini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
