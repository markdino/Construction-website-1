import React from "react"
import { Container, Row, Col } from "reactstrap"

import NewsCard from "./newsCard"

const News = () => {
  return (
    <div className="news section-lg center bg-light-gray">
      <Container>
        <h2 className="header-title">Company News</h2>
        <Row>
          <Col lg="4" md="6" sm="12">
            <NewsCard />
          </Col>
          <Col lg="4" md="6" sm="12">
            <NewsCard />
          </Col>
          <Col lg="4" md="6" sm="12">
            <NewsCard />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default News
