import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { Link } from "gatsby"
import companyThumbnail from "../images/company.jpg"

import "./about.scss"

const About = ({ about }) => {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col md="6">
            <section className="about-content">
              <h2>About Us</h2>
              <p className="about-description">{about}</p>
              <ul className="about-list">
                <li>Professional Staff</li>
                <li>Regular Reporting</li>
                <li>Quality Materials</li>
              </ul>
              <Link to="/about">
                <Button>Read More</Button>
              </Link>
            </section>
          </Col>
          <Col md="6">
            <section className="about-thumbnail">
              <img
                src={companyThumbnail}
                alt="Company Thumbnail"
                className="img-thumbnail"
              />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
