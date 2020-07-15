import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
class JobDetails extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const {
      campaignName,
      campaignStartDate,
      campaignEndDate,
      potentialClients,
      handleChange,
    } = this.props
    return (
      <>
        {" "}
        <Row>
          <Col md={6}>
            <h2>Let’s talk about your campaign</h2>
            <p>Fill-in the form the below</p>
            <input
              type="text"
              name="campaignName"
              value={campaignName}
              onChange={handleChange("campaignName")}
              placeholder="Campaign Name"
              className="seedaInput"
            />
            <input
              type="date"
              name="campaignStartDate"
              value={campaignStartDate}
              onChange={handleChange("campaignStartDate")}
              placeholder="Campaign Start Date"
              className="seedaInput"
            />
            <input
              type="date"
              name="campaignEndDate"
              value={campaignEndDate}
              onChange={handleChange("campaignEndDate")}
              placeholder="Campaign End Date"
              className="seedaInput"
            />
            <input
              type="text"
              name="potentialClients"
              value={potentialClients}
              onChange={handleChange("potentialClients")}
              placeholder="Potential Clients (Names or Websites, comma seperated)"
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

export default JobDetails
