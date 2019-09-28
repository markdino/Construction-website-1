import React from "react"
import { Container, Row, Col, Button, Table } from "reactstrap"
import { graphql, Link } from "gatsby"
import "./careers.scss"
import PageHeader from "../components/pageHeader"
import List2 from "../components/list2"

import Check from "../assets/svg/solid/check.svg"

import teamThumbnail from "../images/team.jpg"

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
                  src={teamThumbnail}
                  alt="Company Thumbnail"
                  className="img-thumbnail"
                />
              </section>
            </Col>
            <Col md="6">
              <section className="careers-content">
                <h2 className="header-title text-center">
                  Benefits and rewards
                </h2>
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
          <Row>
            <section className="opened-positions mt-5 w-100">
              <h3>Opened Positions</h3>
              <Table>
                <thead>
                  <tr>
                    <th>Job Posting Title</th>
                    <th>Location</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Project Engineers</td>
                    <td>Inconstant (Project site)</td>
                    <td>Fulltime</td>
                  </tr>
                  <tr>
                    <td>Estimator</td>
                    <td>Inconstant (Project site/Office)</td>
                    <td>Fulltime</td>
                  </tr>
                  <tr>
                    <td>Bookkeeper</td>
                    <td>Las Pinas City (Office)</td>
                    <td>Fulltime</td>
                  </tr>
                  <tr>
                    <td>Purchasing Staffs/Representatives</td>
                    <td>Las Pinas City (Office)</td>
                    <td>Fulltime</td>
                  </tr>
                </tbody>
              </Table>
            </section>
          </Row>
        </main>
      </Container>
    </section>
  )
}

export default CareersPage
