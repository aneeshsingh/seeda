import React from "react"
import { Container, Row, Col } from "react-bootstrap"
const LogosSections = props => {
  return (
    <div>
      <Container className="my-5">
        <Row className="my-5 text-center">
          <Col className="py-4">
            <h1>{props.heading}</h1>
            <p>{props.description}</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <img src={props.image} alt={props.heading} width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LogosSections
