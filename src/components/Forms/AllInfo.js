import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

class AllInfo extends Component {
  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }
  render() {
    const {
      businessName,
      website,
      location,
      campaignName,
      campaignStartDate,
      campaignEndDate,
      potentialClients,
      dailyBudget,
      creditCardNumber,
      expiryDate,
      cvv,
    } = this.props
    return (
      <>
        <h2>Here is the information you entered:</h2>
        <Row>
          <Col md={6} className="background-aqua">
            <Row className="borderBottom">
              <Col md={6}>Business Name:</Col>
              <Col md={6}>{businessName}</Col>
            </Row>
            <Row className="borderBottom">
              <Col md={6}>Website:</Col>
              <Col md={6}>{website}</Col>
            </Row>
            <Row className="borderBottom">
              <Col md={6}>Location:</Col>
              <Col md={6}>{location}</Col>
            </Row>
            <Row className="borderBottom">
              <Col md={6}>Campaign Name:</Col>
              <Col md={6}>{campaignName}</Col>
            </Row>
            <Row className="borderBottom">
              <Col md={6}>Campaign Start Date:</Col>
              <Col md={6}>{campaignStartDate}</Col>
            </Row>
            <Row className="borderBottom">
              <Col md={6}>Campaign End Date:</Col>
              <Col md={6}>{campaignEndDate}</Col>
            </Row>
            <Row className="borderBottom">
              <Col md={6}>Potential Clients:</Col>
              <Col md={6}>{potentialClients}</Col>
            </Row>
            <Row className="borderBottom">
              <Col md={6}>Daily Budget:</Col>
              <Col md={6}>{dailyBudget}</Col>
            </Row>
            <Row className="borderBottom">
              <Col md={6}>Credit Card Number:</Col>
              <Col md={6}>{creditCardNumber}</Col>
            </Row>
            <Row className="borderBottom">
              <Col md={6}>Expiry Date:</Col>
              <Col md={6}>{expiryDate}</Col>
            </Row>
            <Row className="borderBottom">
              <Col md={6}>CVV:</Col>
              <Col md={6}>{cvv}</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <button className="Back primary-button" onClick={this.back}>
              « Back
            </button>
          </Col>
          <Col md={6} className="float-right text-right">
            <Link className="Next primary-button" to="/">
              Confirm »
            </Link>
          </Col>
        </Row>
      </>
    )
  }
}

export default AllInfo
