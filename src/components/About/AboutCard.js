import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Earl Joseph Claro </span>
            from <span className="purple"> Cebu City, Philippines.</span>
            <br />
            I am currently a graduating 4th year BSIT Student in Cebu Insitute of Technology University.
            <br />
            I am actively looking for OJT/Internship Opportunities.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games(Minecraft,TFT,League of Legends,Civilization 6)
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Web Novels(Science Fiction, Fantasy and Suspense Novels)
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating(Delicious and Sweet Foods)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I want to build while learning"{" "}
          </p>
          <footer className="blockquote-footer">Earl</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
