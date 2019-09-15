import React, { Component } from "react"
import { Row, Col, Container } from "reactstrap"
import PhotoViewer from "../components/photoViewer"

import img1 from "../images/projects/ialicante-mediterranean-homes-2d4lAQAlbDA-unsplash.jpg"
import img2 from "../images/projects/jarek-ceborski-jn7uVeCdf6U-unsplash.jpg"
import img3 from "../images/projects/pixasquare-4ojhpgKpS68-unsplash.jpg"
import img4 from "../images/projects/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg"
import img5 from "../images/projects/jason-briscoe-AQl-J19ocWE-unsplash.jpg"
import img6 from "../images/projects/lance-anderson-QdAAasrZhdk-unsplash.jpg"

class SingeProject extends Component {
  state = {}
  render() {
    const imgList = [img1, img2, img3, img4, img5, img6]
    return (
      <main className="singe-project section-lg">
        <Container>
          <Row>
            <Col lg="5" className="proj-details">
              <h2 className="header-title center">Title</h2>
              <p className="description text-secondary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus autem quasi sunt consequuntur dolorem! Harum
                delectus recusandae a? Provident rem ab dolorum soluta
                laudantium aliquam neque, esse, rerum ipsa, sit officiis aut cum
                pariatur consequatur accusantium non odit quas error corrupti
                maiores aspernatur ipsam! Numquam deleniti recusandae optio
                fugiat qui.
              </p>
            </Col>
            <Col lg="7" className="proj-photos">
              <PhotoViewer list={imgList} />
            </Col>
          </Row>
        </Container>
      </main>
    )
  }
}

export default SingeProject
