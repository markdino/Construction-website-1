import React from "react"
import { Container } from "reactstrap"
import { Button } from "reactstrap"
import { Link } from "gatsby"
import "./hero.scss"

const Hero = ({ title, description }) => {
  return (
    <div className="hero">
      <section className="hero-wrapper">
        <Container>
          <main className="hero-content">
            <h1 className="title">{title}</h1>
            <hr className="h-separator" />
            <p className="hero-description">{description}</p>
            <section className="hero-buttons">
              <Button href="#services">Read More</Button>
              <Link to="/projects">
                <Button outline>Projects</Button>
              </Link>
            </section>
          </main>
        </Container>
      </section>
    </div>
  )
}

export default Hero
