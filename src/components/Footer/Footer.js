import React from "react"
import footerStyles from "./Footer.module.css"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "gatsby"
const Footer = props => (
  <footer className={footerStyles.footer}>
    <Container className="text-white">
      <Row className="mb-5">
        <Col md={6}>
          <h2>{props.footerHeading1}</h2>
          <p>{props.footerDescription1}</p>
        </Col>
        <Col md={6} className="pt-4">
          <Form>
            <Form.Row className="align-items-center p-2">
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className={footerStyles.seedaInput}
                />
              </Col>
              <Col>
                <Button type="submit" className={footerStyles.footerButton}>
                  Send Message
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
    <Container fluid className="p-0 m-0">
      <hr className="text-white"></hr>
    </Container>
    <Container className="py-5 text-white">
      <Row>
        <Col md={6}>
          <img src={props.footerLogo} alt="Logo" />
          <p className="py-2">{props.footerLogoText}</p>
          <hr className="text-white"></hr>
        </Col>
        <Col md={3}>
          <h5 className="fontSemibold">Navigation</h5>
          <ul>
            <li>
              <Link to="/#features" className="link-style-footer">
                Features
              </Link>
            </li>
            <li>
              <Link to="/Terms/" className="link-style-footer">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/Privacy/" className="link-style-footer">
                Privacy
              </Link>
            </li>
          </ul>
        </Col>
        <Col md={3}>
          <p>Connect with us</p>
          <Row>
            <Col>
              <a href={props.facebookLink}>
                <div className={footerStyles.socialIcons}>
                  <img
                    src="https://developmentseeda.co/wp-content/uploads/2020/07/F.png"
                    alt="Facebook"
                  ></img>
                </div>
              </a>
            </Col>
            <Col>
              <a href={props.twitterLink}>
                <div className={footerStyles.socialIcons}>
                  <img
                    src="https://developmentseeda.co/wp-content/uploads/2020/07/T.png"
                    alt="LinkedIn"
                  ></img>
                </div>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="py-2 text-white">&copy; 2020 Seeda Pty Ltd.</p>
        </Col>
        <Col className="text-right">
          <a href="https://www.alkye.com/" className="py-2">
            <img
              src="https://alkye.com/wp-content/themes/alkyemain/images/Light.svg"
              className={footerStyles.partnerLogo}
              alt="Alkye"
            ></img>
            <span className={footerStyles.ahref}>
              &nbsp;Designed By Alkye Services Pty Ltd.
            </span>
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
