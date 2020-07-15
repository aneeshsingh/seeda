import React, { Component } from "react"
import PersonalInfo from "./PersonalInfo"
import JobDetails from "./JobDetails"
import Targets from "./Targets"
import Payment from "./Payment"
import AllInfo from "./AllInfo"
import { Container, Row, Col } from "react-bootstrap"
import styling from "./OnboardingForm.module.css"
export class StepForm extends Component {
  state = {
    step: 1,

    // step 1
    businessName: "",
    website: "",
    location: "",
    businessCategory: "",

    // step 2
    campaignName: "",
    campaignStartDate: "",
    campaignEndDate: "",
    potentialClients: "",

    // step 3
    dailyBudget: "",

    // step 4
    creditCardNumber: "",
    expiryDate: "",
    cvv: "",
  }

  nextStep = () => {
    const { step } = this.state

    this.setState({
      step: step + 1,
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  showProgress = () => {
    const { step } = this.state

    if (step === 1)
      return (
        <div className={styling.paddingFill}>
          <ul className={styling.progressBar}>
            <li className={styling.active}>Business Details</li>
            <li>Campaign Details</li>
            <li>Targets & Budgets</li>
            <li>Delivery & Payment</li>
          </ul>
        </div>
      )
    if (step === 2)
      return (
        <div className={styling.paddingFill}>
          <ul className={styling.progressBar}>
            <li className={styling.active}>Business Details</li>
            <li className={styling.active}>Campaign Details</li>
            <li>Targets & Budgets</li>
            <li>Delivery & Payment</li>
          </ul>
        </div>
      )
    if (step === 3)
      return (
        <div className={styling.paddingFill}>
          <ul className={styling.progressBar}>
            <li className={styling.active}>Business Details</li>
            <li className={styling.active}>Campaign Details</li>
            <li className={styling.active}>Targets & Budgets</li>
            <li>Delivery & Payment</li>
          </ul>
        </div>
      )
    if (step === 4)
      return (
        <div className={styling.paddingFill}>
          <ul className={styling.progressBar}>
            <li className={styling.active}>Business Details</li>
            <li className={styling.active}>Campaign Details</li>
            <li className={styling.active}>Targets & Budgets</li>
            <li className={styling.active}>Delivery & Payment</li>
          </ul>
        </div>
      )
    if (step === 5)
      return (
        <div className={styling.paddingFill}>
          <ul className={styling.progressBar}>
            <li className={styling.active}>Business Details</li>
            <li className={styling.active}>Campaign Details</li>
            <li className={styling.active}>Targets & Budgets</li>
            <li className={styling.active}>Delivery & Payment</li>
          </ul>
        </div>
      )
  }

  showStep = () => {
    const {
      step,
      businessName,
      website,
      location,
      businessCategory,

      // step 2
      campaignName,
      campaignStartDate,
      campaignEndDate,
      potentialClients,

      // step 3
      dailyBudget,

      // step 4
      creditCardNumber,
      expiryDate,
      cvv,
    } = this.state

    if (step === 1)
      return (
        <PersonalInfo
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          businessName={businessName}
          website={website}
          location={location}
          businessCategory={businessCategory}
        />
      )
    if (step === 2)
      return (
        <JobDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          campaignName={campaignName}
          campaignStartDate={campaignStartDate}
          campaignEndDate={campaignEndDate}
          potentialClients={potentialClients}
        />
      )
    if (step === 3)
      return (
        <Targets
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          dailyBudget={dailyBudget}
        />
      )
    if (step === 4)
      return (
        <Payment
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          creditCardNumber={creditCardNumber}
          expiryDate={expiryDate}
          cvv={cvv}
        />
      )
    if (step === 5)
      return (
        <AllInfo
          businessName={businessName}
          website={website}
          location={location}
          campaignName={campaignName}
          campaignStartDate={campaignStartDate}
          campaignEndDate={campaignEndDate}
          potentialClients={potentialClients}
          dailyBudget={dailyBudget}
          creditCardNumber={creditCardNumber}
          expiryDate={expiryDate}
          cvv={cvv}
          prevStep={this.prevStep}
        />
      )
  }

  render() {
    const { step } = this.state

    return (
      <Container className="my-5 py-5">
        <Row className="mb-5">
          <Col> {this.showProgress()}</Col>
        </Row>
        <Row className="my-5 p-5">
          <Col>
            {/* <h2>Step {step} of 3.</h2> */}
            {this.showStep()}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default StepForm
