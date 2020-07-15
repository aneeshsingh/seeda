import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"

class Targets extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }
  render() {
    const { dailyBudget, handleChange } = this.props
    return (
      <>
        <Row>
          <Col md={6}>
            <h2>Enter your job information:</h2>
            <input
              type="text"
              name="dailyBudget"
              value={dailyBudget}
              onChange={handleChange("dailyBudget")}
              placeholder="Daily Budget ($)"
              className="seedaInput"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <button className="Back primary-button" onClick={this.back}>
              « Back
            </button>
          </Col>
          <Col md={6} className="float-right text-right">
            <button className="Next primary-button" onClick={this.continue}>
              Next »
            </button>
          </Col>
        </Row>
      </>
    )
  }
}

export default Targets
