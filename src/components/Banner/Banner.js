import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
const Banner = props => (
  <div>
    <Container className="mt-3">
      <Row className="my-5">
        <Col md={6} className="py-4">
          <h1>&nbsp;</h1>
          <h1 className="pt-5">{props.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: props.content }} />
          <Link className="primary-button" to="/Signup/">
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
              src="https://developmentseeda.co/wp-content/uploads/2020/07/pattern.png"
              alt="Seeda Crawler"
            ></img>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Banner
