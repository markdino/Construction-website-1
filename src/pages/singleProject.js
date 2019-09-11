import React, { Component } from "react"
import { Row, Col, Container } from "reactstrap"

class SingeProject extends Component {
  state = {}
  render() {
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
            <Col lg="7" className="proj-photos"></Col>
          </Row>
        </Container>
      </main>
    )
  }
}

export default SingeProject
