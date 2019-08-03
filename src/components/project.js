import React, { Component } from "react"
import { Container, Badge, Row, Col } from "reactstrap"
import "./project.scss"

import ProjCard from "./projCard"

import img1 from "../images/projects/ialicante-mediterranean-homes-2d4lAQAlbDA-unsplash.jpg"
import img2 from "../images/projects/jarek-ceborski-jn7uVeCdf6U-unsplash.jpg"
import img3 from "../images/projects/pixasquare-4ojhpgKpS68-unsplash.jpg"
import img4 from "../images/projects/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg"
import img5 from "../images/projects/jason-briscoe-AQl-J19ocWE-unsplash.jpg"
import img6 from "../images/projects/lance-anderson-QdAAasrZhdk-unsplash.jpg"

const projects = [
  {
    title: "Ialicante Mediterranean Homes",
    category: ["construction"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo amet dicta eaque facere doloribus, earum error! Laudantium beatae harum quos?",
    img: {
      src: img1,
      orig: "https://unsplash.com/photos/2d4lAQAlbDA",
      author: "Photo by iAlicante Mediterranean Homes on Unsplash",
    },
  },
  {
    title: "Jarek Ceborski",
    category: ["interior design"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo amet dicta eaque facere doloribus, earum error! Laudantium beatae harum quos?",
    img: {
      src: img2,
      orig: "https://unsplash.com/photos/jn7uVeCdf6U",
      author: "Photo by Jarek Ceborski on Unsplash",
    },
  },
  {
    title: "Pixasquare",
    category: ["construction"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo amet dicta eaque facere doloribus, earum error! Laudantium beatae harum quos?",
    img: {
      src: img3,
      orig: "https://unsplash.com/photos/4ojhpgKpS68",
      author: "Photo by Pixasquare on Unsplash",
    },
  },
  {
    title: "Étienne Beauregard-Riverin",
    category: ["construction"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo amet dicta eaque facere doloribus, earum error! Laudantium beatae harum quos?",
    img: {
      src: img4,
      orig: "https://unsplash.com/photos/B0aCvAVSX8E",
      author: "Photo by Étienne Beauregard-Riverin on Unsplash",
    },
  },
  {
    title: "Jason Briscoe",
    category: ["remodeling", "interior design"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo amet dicta eaque facere doloribus, earum error! Laudantium beatae harum quos?",
    img: {
      src: img5,
      orig: "https://unsplash.com/photos/AQl-J19ocWE",
      author: "Photo by Jason Briscoe on Unsplash",
    },
  },
  {
    title: "Lance Anderson",
    category: ["construction", "interior design"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo amet dicta eaque facere doloribus, earum error! Laudantium beatae harum quos?",
    img: {
      src: img6,
      orig: "https://unsplash.com/photos/QdAAasrZhdk",
      author: "Photo by Lance Anderson on Unsplash",
    },
  },
]
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
              {category === "all"
                ? projects.map(project => {
                    return (
                      <Col lg="4" md="6" sm="12">
                        <ProjCard proj={project} />
                      </Col>
                    )
                  })
                : projects
                    .filter(project => project.category.includes(category))
                    .map(project => {
                      return (
                        <Col lg="4" md="6" sm="12">
                          <ProjCard proj={project} />
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
