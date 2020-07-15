import React from "react"
import { Container, Row, Col } from "react-bootstrap"
const ThreeColSection = props => (
  <div>
    <Container className="my-5">
      <Row className="my-5 text-center">
        <Col className="py-4">
          <h1>{props.heading}</h1>
          <p dangerouslySetInnerHTML={{ __html: props.description }} />
        </Col>
      </Row>
      <Row className="text-center">
        {props.sections.map(function (section, index) {
          return (
            <Col key={index}>
              <img
                src={section.image.mediaItemUrl}
                alt={section.heading}
                width="100%"
              />
              <h4>{section.heading}</h4>
              <p className="smaller-text">{section.description}</p>
            </Col>
          )
        })}
      </Row>
    </Container>
  </div>
)

export default ThreeColSection
