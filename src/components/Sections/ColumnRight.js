import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const ColumnRight = props => (
  <div>
    <Container className="py-5 my-5">
      <Row>
        <Col md={6}>
          <img
            src={props.image.mediaItemUrl}
            alt={props.heading}
            width="100%"
          ></img>
        </Col>
        <Col md={6} className="p-4">
          <h1>{props.heading}</h1>
          <p>{props.description}</p>
          <Link className="primary-button" to="/">
            Get Started Today &nbsp;&nbsp;<i className="la la-arrow-right"></i>
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
)

export default ColumnRight
