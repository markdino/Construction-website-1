import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./footer.scss"

import Calendar from "../assets/svg/calendar.svg"
import Clock from "../assets/svg/clock.svg"
import Smartphone from "../assets/svg/smartphone.svg"
import Mail from "../assets/svg/mail.svg"
import Pin from "../assets/svg/map-pin.svg"

import FacebookSVG from "../assets/svg/facebook.svg"
import TwitterSVG from "../assets/svg/twitter.svg"
import InstagramSVG from "../assets/svg/instagram.svg"
import LinkedinSVG from "../assets/svg/linkedin.svg"

import ISO9001 from "../images/badge/ISO-9001.png"
import ISO14001 from "../images/badge/ISO-14001.png"
import ISO45001 from "../images/badge/ISO-45001.png"
import PCAB from "../images/badge/pcab.png"
import PCA from "../images/badge/pca.png"

const Footer = () => {
  return (
    <footer>
      <section className="footer-wrapper">
        <Container className="footer-content">
          <Row className="section-md">
            <Col className="company-badge" lg="4" sm="12">
              <h4>Licensed/Accredited</h4>
              <section className="img-badge">
                <img src={ISO9001} alt="ISO-9001" />
                <img src={ISO14001} alt="ISO-14001" />
                <img src={ISO45001} alt="ISO-45001" />
                <img src={PCAB} alt="PCAB LICENSE" />
                <img src={PCA} alt="PCA" />
              </section>
            </Col>
            <Col className="footer-aboutus" lg="4" sm="6">
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita, quae! Accusantium, perspiciatis rem commodi temporibus
                dicta similique suscipit eum dolorem?
              </p>
              <section className="footer-social">
                <Row>
                  <a href="#">
                    <FacebookSVG className="fill-svg" />
                  </a>
                  <a href="#">
                    <TwitterSVG className="fill-svg" />
                  </a>
                  <a href="#">
                    <InstagramSVG className="stroke-svg" />
                  </a>
                  <a href="#">
                    <LinkedinSVG className="stroke-svg" />
                  </a>
                </Row>
              </section>
              <h6>Opening Hours</h6>
              <section className="opening">
                <hr />
                <Row className="align-items-center">
                  <Calendar /> Monday - Friday
                </Row>
                <hr />
                <Row className="align-items-center">
                  <Clock /> 8:00am - 5:00pm
                </Row>
                <hr />
              </section>
            </Col>
            <Col className="footer-contact" lg="4" sm="6">
              <h4>Contacts</h4>
              <ul>
                <li className='row className="align-items-start'>
                  <Smartphone /> (+63) 912 345 6789
                </li>
                <li className='row className="align-items-start'>
                  <Mail /> info@tanpelconstruction.com
                </li>
                <li
                  id="footer-address"
                  className='row className="align-items-start'
                >
                  <Pin /> Bermuda Subd., Pamplona 3, Las Pinas City,
                  Philippines, 1740
                </li>
                <li></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  )
}

export default Footer
