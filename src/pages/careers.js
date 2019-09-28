import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { graphql, Link } from "gatsby"
import "./careers.scss"
import PageHeader from "../components/pageHeader"
import List2 from "../components/list2"

import Check from "../assets/svg/solid/check.svg"

import companyThumbnail from "../images/company.jpg"

const CareersPage = () => {
  return (
    <section id="careers">
      <PageHeader title="Careers" />
      <Container>
        <main className="careers-page section-lg">
          <Row>
            <Col md="6">
              <section className="careers-thumbnail">
                <img
                  src={companyThumbnail}
                  alt="Company Thumbnail"
                  className="img-thumbnail"
                />
              </section>
            </Col>
            <Col md="6">
              <section className="careers-content">
                <h2 className="header-title">Benefits and rewards</h2>
                <p className="careers-description">
                  Our diverse capabilities provide employees with the ability to
                  work on projects of all sizes and types and receive amazing
                  benefits in return. They include but are in no way limited to:
                </p>
                <ul className="careers-list">
                  <li>
                    <List2
                      svg={<Check />}
                      value="Healthcare and wellness benefits"
                    />
                  </li>
                  <li>
                    <List2
                      svg={<Check />}
                      value="Retirement and financial protection"
                    />
                  </li>
                  <li>
                    <List2
                      svg={<Check />}
                      value="Employee development programs"
                    />
                  </li>
                </ul>
                <Link to="/contact/#contact" className="careers-btn-lnk">
                  <Button className="text-dark text-uppercase font-weight-bold">
                    Join OUr Team Now
                  </Button>
                </Link>
              </section>
            </Col>
          </Row>
        </main>
      </Container>
    </section>
  )
}

export default CareersPage
