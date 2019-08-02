import React, { Component } from "react"
import { Container, Badge, Row, Col } from "reactstrap"
import "./project.scss"

const projCategories = ["all", "construction", "remodeling", "interior design"]
class Project extends Component {
  state = {
    category: "all",
  }
  render() {
    const { category } = this.state
    return (
      <div className="project section-lg" id="project">
        <Container>
          <h2 className="header-title center">Our Project</h2>
          <section className="gallery-cat center">
            {projCategories.map((projCategory, index) => {
              return (
                <Badge
                  key={index}
                  color={projCategory === category ? "warning" : "light"}
                  onClick={() => this.setState({ category: projCategory })}
                >
                  {projCategory}
                </Badge>
              )
            })}
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
