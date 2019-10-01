import React from "react"
import { Container, Row, Col, Button, Table } from "reactstrap"
import { graphql, Link } from "gatsby"
import "./careers.scss"
import PageHeader from "../components/pageHeader"
import List2 from "../components/list2"

import Check from "../assets/svg/solid/check.svg"

import teamThumbnail from "../images/team.jpg"

const CareersPage = ({ data }) => {
  const opportunities = data.allCareersJson.edges
  const careersInfo = data.site.siteMetadata.careers
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
                  {careersInfo.title}
                </h2>
                <p className="careers-description">{careersInfo.about}</p>
                <ul className="careers-list">
                  {careersInfo.benefits.map(benefit => {
                    return (
                      <li>
                        <List2 svg={<Check />} value={benefit} />
                      </li>
                    )
                  })}
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
                  {opportunities.map(career => {
                    return (
                      <tr>
                        <td>{career.node.positionTitle}</td>
                        <td>{career.node.location}</td>
                        <td>{career.node.time}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </section>
          </Row>
        </main>
      </Container>
    </section>
  )
}

export const careersQuery = graphql`
  query AllCareersQuery {
    allCareersJson {
      edges {
        node {
          positionTitle
          location
          time
        }
      }
    }
    site {
      siteMetadata {
        careers {
          title
          about
          benefits
        }
      }
    }
  }
`

export default CareersPage
