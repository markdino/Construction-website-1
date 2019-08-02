import React, { Component } from "react"
import { Container, Badge, Row, Col } from "reactstrap"
import "./project.scss"

class Project extends Component {
  render() {
    return (
      <div className="project section-lg" id="project">
        <Container>
          <h2 className="header-title center">Our Project</h2>
          <section className="gallery-cat center">
            <Badge color="warning">all</Badge>
            <Badge color="light">construction</Badge>
            <Badge color="light">remodeling</Badge>
            <Badge color="light">interior design</Badge>
          </section>
          <section className="gallery">
            <Row>
              <Col md="4" sm="6">
                <div className="proj-card"></div>
              </Col>
              <Col md="4" sm="6">
                <div className="proj-card"></div>
              </Col>
              <Col md="4" sm="6">
                <div className="proj-card"></div>
              </Col>
              <Col md="4" sm="6">
                <div className="proj-card"></div>
              </Col>
              <Col md="4" sm="6">
                <div className="proj-card"></div>
              </Col>
              <Col md="4" sm="6">
                <div className="proj-card"></div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    )
  }
}

export default Project
