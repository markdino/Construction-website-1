import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./footer.scss"

import List2 from "../components/list2"

import Calendar from "../assets/svg/regular/calendar-alt.svg"
import Clock from "../assets/svg/regular/clock.svg"
import Smartphone from "../assets/svg/solid/mobile-alt.svg"
import Telephone from "../assets/svg/solid/phone-alt.svg"
import Mail from "../assets/svg/regular/envelope.svg"
import Pin from "../assets/svg/solid/map-marker-alt.svg"

import FacebookSVG from "../assets/svg/facebook.svg"
import TwitterSVG from "../assets/svg/twitter.svg"
import InstagramSVG from "../assets/svg/instagram.svg"
import LinkedinSVG from "../assets/svg/linkedin.svg"

import ISO9001 from "../images/badge/ISO-9001.png"
import ISO14001 from "../images/badge/ISO-14001.png"
import ISO45001 from "../images/badge/ISO-45001.png"
import PCAB from "../images/badge/pcab.png"
import PCA from "../images/badge/pca.png"

const Footer = ({ siteMetadata }) => {
  const {
    title,
    about,
    email,
    social,
    contact,
    address,
    opening,
    author,
  } = siteMetadata
  const badges = [
    { img: ISO14001, alt: "ISO-14001" },
    { img: ISO9001, alt: "ISO-9001" },
    { img: ISO45001, alt: "ISO-45001" },
    { img: PCAB, alt: "PCAB LICENSE" },
    { img: PCA, alt: "PCA" },
  ]
  return (
    <footer>
      <section className="footer-wrapper">
        <Container className="footer-content text-white">
          <Row className="section-md">
            <Col className="company-badge" lg="4" sm="12">
              <h4 className="text-center font-weight-bold mt-4 mb-2">
                Licensed/Accredited
              </h4>
              <section className="img-badge d-flex flex-wrap justify-content-around align-items-center">
                {badges.map(badge => (
                  <img
                    width="90px"
                    className="my-2"
                    src={badge.img}
                    alt={badge.alt}
                  />
                ))}
              </section>
            </Col>
            <Col className="footer-aboutus" lg="4" sm="6">
              <h4 className="text-center font-weight-bold mt-4 mb-2">
                About Us
              </h4>
              <p className="font-size-80 text-justify">{about}</p>
              <section className="footer-social">
                <Row className="mb-2">
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookSVG className="fill-svg" />
                  </a>
                  <a
                    href={social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterSVG className="fill-svg" />
                  </a>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramSVG className="stroke-svg" />
                  </a>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinSVG className="stroke-svg" />
                  </a>
                </Row>
              </section>
              <h6 className="font-weight-bold text-uppercase">Opening Hours</h6>
              <section className="opening ml-5">
                <hr />
                <List2
                  className="font-size-90"
                  svgSize="sm"
                  svg={<Calendar />}
                  value={opening.day}
                />
                <hr />
                <List2
                  className="font-size-90"
                  svgSize="sm"
                  svg={<Clock />}
                  value={opening.hour}
                />
                <hr />
              </section>
            </Col>
            <Col className="footer-contact" lg="4" sm="6">
              <h4 className="text-center font-weight-bold mt-4 mb-2">
                Contacts
              </h4>
              <ul className="list-unstyled">
                <li className="my-2">
                  <List2 svg={<Smartphone />} value={contact.mobile} />
                </li>
                <li className="my-2">
                  <List2 svg={<Telephone />} value={contact.telephone} />
                </li>
                <li className="my-2">
                  <List2 svg={<Mail />} value={email} />
                </li>
                <li className="my-2">
                  <List2 svg={<Pin />} value={address} />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Row className="footer-credits justify-content-center">
          {` ${title} © 2019 || Code and design by: `} &nbsp;
          <a
            href={author.website}
            target="_blank"
            rel="noopener noreferrer"
            title={author.position}
          >
            {author.name}
          </a>
        </Row>
      </section>
    </footer>
  )
}

export default Footer
