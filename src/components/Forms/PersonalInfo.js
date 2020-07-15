import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"

class PersonalInfo extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const {
      businessName,
      website,
      location,
      businessCategory,
      handleChange,
    } = this.props
    return (
      <>
        <Row>
          <Col md={6}>
            <h2>Let’s get started with your business details</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              dapibus est ac nunc gravida dapibus. Ut tempus neque vitae
              volutpat faucibus. Quisque euismod purus non eros molestie, non
              feugiat justo consequat. Phasellus ut felis vehicula, viverra diam
              non, faucibus est.
            </p>
          </Col>
          <Col md={6}>
            <h6>Fill-in the form the below</h6>
            <input
              type="text"
              name="businessName"
              value={businessName}
              placeholder="Business Name"
              onChange={handleChange("businessName")}
              className="seedaInput"
            />
            <input
              type="text"
              name="website"
              value={website}
              placeholder="Website"
              onChange={handleChange("website")}
              className="seedaInput"
            />
            <input
              type="text"
              name="location"
              value={location}
              placeholder="Location"
              onChange={handleChange("location")}
              className="seedaInput"
            />
            <input
              type="text"
              name="businessCategory"
              value={businessCategory}
              placeholder="Business Category"
              onChange={handleChange("businessCategory")}
              className="seedaInput"
            />
            <button
              className="Next"
              onClick={this.continue}
              className="primary-button"
            >
              Next »
            </button>
          </Col>
        </Row>
      </>
    )
  }
}

export default PersonalInfo
