import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
const Banner = props => (
  <div>
    <Container>
      <Row className="my-5">
        <Col md={6} className="py-4">
          <h1>{props.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: props.content }} />
          <Link className="primary-button" to="/">
            Get Started Today &nbsp;&nbsp;<i className="la la-arrow-right"></i>
          </Link>
        </Col>
        <Col md={6}>
          <img src={props.image} alt="Seeda Crawler" width="100%"></img>
        </Col>
      </Row>
    </Container>
    <Container fluid className="reduced-margin-for-pattern">
      <Row>
        <Col>
          <div>
            <img
              src="http://localhost/seeda/wp-content/uploads/2020/07/pattern.png"
              alt="Seeda Crawler"
            ></img>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Banner
