import React, { Component } from "react"
import { Row, Col, Container } from "reactstrap"

class SingeProject extends Component {
  state = {}
  render() {
    return (
      <main className="singe-project">
        <Container>
          <Row>
            <Col lg="5" className="proj-details"></Col>
            <Col lg="7" className="proj-photos"></Col>
          </Row>
        </Container>
      </main>
    )
  }
}

export default SingeProject
