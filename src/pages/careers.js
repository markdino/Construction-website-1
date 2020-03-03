import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { graphql, Link } from "gatsby"
import "./careers.scss"
import PageHeader from "../components/pageHeader"
import List2 from "../components/list2"
import Table1 from "../components/table1"

import Check from "../assets/svg/solid/check.svg"

import teamThumbnail from "../images/team.jpg"

const CareersPage = ({ data }) => {
  const careersInfo = data.site.siteMetadata.careers
  const tableHeader = ["Job Posting Title", "Location", "Time"]
  const opportunities = data.allCareersJson.edges
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
              <section className="careers-content mr-5 ml-5">
                <h2 className="header-title text-center font-weight-bold text-capitalize">
                  {careersInfo.title}
                </h2>
                <p className="careers-description font-size-90 text-secondary mt-2 mb-3">
                  {careersInfo.about}
                </p>
                <ul className="careers-list list-unstyled">
                  {careersInfo.benefits.map(benefit => {
                    return (
                      <li>
                        <List2 svg={<Check />} value={benefit} />
                      </li>
                    )
                  })}
                </ul>
                <Link to="/contact/#contact" className="careers-btn-lnk">
                  <Button className="text-dark text-uppercase font-weight-bold py-2 px-4 my-2">
                    Join Our Team Now
                  </Button>
                </Link>
              </section>
            </Col>
          </Row>
          <Row>
            <Table1
              title="Opened Position"
              tHeader={tableHeader}
              tData={opportunities}
            />
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
