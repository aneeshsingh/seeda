import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const ColumnLeft = () => (
  <div>
    <Container className="py-5 my-5">
      <Row>
        <Col md={6} className="py-4">
          <h1>Features - The Seeda Solution</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dapibus est ac nunc gravida dapibus. Ut tempus neque vitae volutpat
            faucibus. Quisque euismod purus non eros molestie, non feugiat justo
            consequat. Phasellus ut felis vehicula, viverra diam non, faucibus
            est.
          </p>
          <Link className="primary-button" to="/">
            Get Started Today &nbsp;&nbsp;<i className="la la-arrow-right"></i>
          </Link>
        </Col>
        <Col md={6}>
          <img
            src="http://localhost/seeda/wp-content/uploads/2020/07/Bitmap.jpg"
            alt="Seeda Crawler"
          ></img>
        </Col>
      </Row>
    </Container>
  </div>
)

export default ColumnLeft
