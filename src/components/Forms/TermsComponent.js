import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"

class PrivacyComponent extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="my-5 py-5">
            <Col className="py-4">
              <p dangerouslySetInnerHTML={{ __html: this.props.terms }}></p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default PrivacyComponent
