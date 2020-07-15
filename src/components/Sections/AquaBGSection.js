import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styling from "./AquaBGSection.module.css"
const AquaBGSection = props => {
  return (
    <Container fluid className={styling.backgroundAqua}>
      <Container>
        <Row className="py-5 text-center">
          <Col>
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
          </Col>
        </Row>
        <Row>
          {props.sections.map(function (section, index) {
            return (
              <Col
                key={index}
                md={4}
                className={[
                  styling.sectionCard,
                  styling.borderRight,
                  styling.borderLeft,
                  styling.borderTop,
                  styling.borderBottom,
                ].join(" ")}
              >
                <div>
                  <span className={styling.backgroundWhiteIcon}>
                    <img
                      src={section.icon.mediaItemUrl}
                      alt={section.heading}
                      width="20px"
                    />
                  </span>
                </div>
                <br />
                <h4>{section.heading}</h4>
                <p>{section.description}</p>
              </Col>
            )
          })}
        </Row>
      </Container>
    </Container>
  )
}

export default AquaBGSection
