import React, { Component } from "react"
import { Container, Badge, Row, Col } from "reactstrap"
import "./project.scss"

import ProjCard from "./projCard"

const projCategories = ["all", "construction", "remodeling", "interior design"]
class Project extends Component {
  state = {
    category: "all",
    title: this.props.title,
  }
  render() {
    const { category, title } = this.state
    const projects = this.props.projects
    return (
      <div className="project section-lg" id="project">
        <Container>
          <h2 className="header-title text-center font-weight-bold text-uppercase">
            {title}
          </h2>
          <section className="gallery-cat text-center">
            {projCategories.map((projCategory, index) => {
              return (
                <Badge
                  key={index}
                  color={projCategory === category ? "secondary" : "light"}
                  onClick={() => this.setState({ category: projCategory })}
                >
                  {projCategory}
                </Badge>
              )
            })}
          </section>
          <section className="gallery">
            <Row>
              {category === "all"
                ? projects.map(project => {
                    return (
                      <Col lg="4" md="6" sm="12">
                        <ProjCard proj={project.node} />
                      </Col>
                    )
                  })
                : projects
                    .filter(project => project.node.category.includes(category))
                    .map(project => {
                      return (
                        <Col lg="4" md="6" sm="12">
                          <ProjCard proj={project.node} />
                        </Col>
                      )
                    })}
            </Row>
          </section>
        </Container>
      </div>
    )
  }
}

export default Project
