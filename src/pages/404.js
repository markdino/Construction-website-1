import React from "react"
import { Container } from "reactstrap"

const NotFoundPage = () => (
  <section className="page-404 section-lg">
    <Container>
      <header>
        <h1>404</h1>
        <h2>NOT FOUND</h2>
      </header>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </section>
)

export default NotFoundPage
