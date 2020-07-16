import React, { Component } from "react"
import { navigate } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

class SignupForm extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="my-5 py-5">
            <Col md={6} className="py-4">
              <h1>Get Beta access to our portal</h1>
              <p className="smaller-text p-2 ">Fill-in the form the below</p>

              <form
                method="post"
                action="https://developmentseeda.co/processing/"
              >
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="First Name"
                  className="seedaInput"
                />
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Last Name"
                  className="seedaInput"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="seedaInput"
                />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="seedaInput"
                />
                <button type="submit" className="primary-button">
                  Get Started Today &nbsp;&nbsp;
                  <i className="la la-arrow-right"></i>
                </button>
              </form>
              <p className="smaller-text p-2">{this.props.terms}</p>
            </Col>
            <Col md={6}>
              <img
                src={this.props.image}
                alt="Seeda Crawler"
                width="100%"
              ></img>
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
  }
}

export default SignupForm
