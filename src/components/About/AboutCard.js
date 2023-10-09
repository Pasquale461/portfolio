import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight , ImPlus} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manfredi Pasquale </span>
            from <span className="purple"> Altamura, Italy.</span>
            <br /> I am graduated in  "ICT Software production technology"
            <br />
            Additionally, I am enthusiastic about Artificial intelligence.
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPlus /> Playing Games
            </li>
            <br></br>
            <li className="about-activity">
            <ImPlus />  Reading comics
            </li>
            <br></br>
            <li className="about-activity">
            <ImPlus />  cooking
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
