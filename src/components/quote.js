import React from "react"
import { Container, Button } from "reactstrap"
import { Link } from "gatsby"
import "./quote.scss"

const QuoteUs = () => {
  return (
    <div className="quote" id="quote">
      <section className="parallax-container">
        <div className="theme-wrapper">
          <div className="parallax-content section-lg">
            <Container className="flex-sb">
              <h3>Looking for a high quality constructor for your project?</h3>
              <Link to="/contact/#contact" className="center">
                <Button>Quote to Us</Button>
              </Link>
            </Container>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuoteUs
