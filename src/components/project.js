import React, { Component } from "react"
import { Container, Badge, Row, Col, Button } from "reactstrap"
import { Link } from "gatsby"
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
          <h2 className="header-title center">{title}</h2>
          <section className="gallery-cat center">
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
          <section className="center mt-5 font-size-s2">
            <p className="">Explore more about our Projects</p>
            <Link to="/projects/#project">
              <Button outline color="dark">
                All Projects
              </Button>
            </Link>
          </section>
        </Container>
      </div>
    )
  }
}

export default Project
