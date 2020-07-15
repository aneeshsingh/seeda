import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styling from "./Campaign.module.css"
const Campaign = () => {
  return (
    <Container fluid className={styling.backgroundAqua}>
      <Container>
        <Row className="py-5 text-center">
          <Col>
            <h2>Campaign Name</h2>
            <p>
              Your campaign is being processed. We will start delivering the
              first lead within the next 24 hours
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            className={[
              styling.sectionCard,
              styling.borderRight,
              styling.borderBottom,
            ].join(" ")}
          >
            <div>
              <span className={styling.backgroundWhiteIcon}>
                <i className="la la-arrow-right"></i>
              </span>
            </div>
            <br />
            <h4>Scale</h4>
            <p>
              Use our global platform to realise your business potential
              reaching more relevant prospects no matter where they are.
            </p>
          </Col>
          <Col
            md={4}
            className={[
              styling.sectionCard,
              styling.borderRight,
              styling.borderBottom,
            ].join(" ")}
          >
            <div>
              <span className={styling.backgroundWhiteIcon}>
                <i className="la la-arrow-right"></i>
              </span>
            </div>{" "}
            <br />
            <h4>Personalised</h4>
            <p>
              The platform creates programs that are designed to solve your
              businesses unique challenges
            </p>
          </Col>
          <Col
            md={4}
            className={[styling.sectionCard, styling.borderBottom].join(" ")}
          >
            <div>
              <span className={styling.backgroundWhiteIcon}>
                <i className="la la-arrow-right"></i>
              </span>
            </div>{" "}
            <br />
            <h4>Speed</h4>
            <p>
              Quickly generate demand for your business with our cloud native
              technology and years of expertise
            </p>
          </Col>
          <Col
            md={4}
            className={[styling.sectionCard, styling.borderRight].join(" ")}
          >
            <div>
              <span className={styling.backgroundWhiteIcon}>
                <i className="la la-arrow-right"></i>
              </span>
            </div>{" "}
            <br />
            <h4>Customer Service</h4>
            <p>
              Our dedicated customer success team are always on hand to ensure
              the best possible experience for you every step of the way
            </p>
          </Col>
          <Col
            md={4}
            className={[styling.sectionCard, styling.borderRight].join(" ")}
          >
            <div>
              <span className={styling.backgroundWhiteIcon}>
                <i className="la la-arrow-right"></i>
              </span>
            </div>{" "}
            <br />
            <h4>Quality</h4>
            <p>
              Platform algorithms are being continually optimised ensuring very
              best service
            </p>
          </Col>
          <Col md={4} className={[styling.sectionCard].join(" ")}>
            <div>
              <span className={styling.backgroundWhiteIcon}>
                <i className="la la-arrow-right"></i>
              </span>
            </div>{" "}
            <br />
            <h4>Control</h4>
            <p>
              Rest assured you have full control every step of the way across
              everything from budget to speed.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Campaign
