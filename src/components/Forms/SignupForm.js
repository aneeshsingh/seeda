import React, { Component } from "react"
import { navigate } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

class SignupForm extends Component {
  buttonClicked = () => {}
  state = {
    title: "",
    content: "",
    author: "Max",
    submitted: false,
  }

  componentDidMount() {
    console.log(this.props)
  }
  postDataHandler = () => {
    navigate("/Onboarding/")
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="my-5">
            <Col md={6} className="py-4">
              <h1>Get Beta access to our portal</h1>
              <p className="smaller-text p-2 ">Fill-in the form the below</p>
              <input
                type="text"
                value={this.state.title}
                onChange={event => this.setState({ title: event.target.value })}
                placeholder="First Name"
                className="seedaInput"
              />
              <input
                type="text"
                value={this.state.title}
                onChange={event => this.setState({ title: event.target.value })}
                placeholder="Last Name"
                className="seedaInput"
              />
              <input
                type="text"
                value={this.state.title}
                onChange={event => this.setState({ title: event.target.value })}
                placeholder="Email"
                className="seedaInput"
              />
              <input
                type="text"
                value={this.state.title}
                onChange={event => this.setState({ title: event.target.value })}
                placeholder="Phone"
                className="seedaInput"
              />
              <button onClick={this.postDataHandler} className="primary-button">
                Get Started Today &nbsp;&nbsp;
                <i className="la la-arrow-right"></i>
              </button>

              <p className="smaller-text p-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dapibus est ac nunc gravida dapibus. Ut tempus neque vitae
                volutpat faucibus. Quisque euismod purus non eros molestie, non
                feugiat justo consequat. Phasellus ut felis vehicula, viverra
                diam non, faucibus est.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="http://localhost/seeda/wp-content/uploads/2020/07/Bitmap.jpg"
                alt="Seeda Crawler"
              ></img>
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
  }
}

export default SignupForm
