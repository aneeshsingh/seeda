import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"

class Payment extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { creditCardNumber, expiryDate, cvv, handleChange } = this.props
    return (
      <>
        <Row>
          <Col md={6}>
            <h2>Enter your job information:</h2>
            <input
              type="text"
              name="creditCardNumber"
              value={creditCardNumber}
              onChange={handleChange("creditCardNumber")}
              placeholder="Credit Card Number"
              className="seedaInput"
            />
            <input
              type="text"
              name="expiryDate"
              value={expiryDate}
              onChange={handleChange("expiryDate")}
              placeholder="Expiry Date"
              className="seedaInput"
            />
            <input
              type="text"
              name="cvv"
              value={cvv}
              onChange={handleChange("cvv")}
              placeholder="CVV"
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

export default Payment
