import React from "react"
import { Container, Row, Col } from "reactstrap"

import PageHeader from "../components/pageHeader"
import Service from "../components/service"

import Bulldozer from "../images/icons/icon-bulldozer-74x74.png"
import Tassels from "../images/icons/icon-tassels-70x70.png"
import Ruler from "../images/icons/icon-ruler-45x71.png"
import Suitcase from "../images/icons/icon-suitcase-73x57.png"
import Relues from "../images/icons/icon-relues-63x64.png"
import Helmet from "../images/icons/icon-helmet-67x65.png"

const ServicesPage = () => {
  const card = [
    {
      title: `Construction`,
      icon: Bulldozer,
      description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
    },
    {
      title: `Remodeling`,
      icon: Tassels,
      description: `Our team of experts has years of experience in remodeling homes including kitchens, basements etc.`,
    },
    {
      title: `Interior Design`,
      icon: Ruler,
      description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
    },
    {
      title: `Contracting`,
      icon: Suitcase,
      description: `Top Project can manage and hire subcontractors while acting as the main contact with construction clients.`,
    },
    {
      title: `Preconstruction`,
      icon: Relues,
      description: `Preconstruction involves performing preliminary planning and engineering in order to define the project.`,
    },
    {
      title: `Green Building`,
      icon: Helmet,
      description: `Green building has a highly reduced effect on environment, and is used in almost every project of our company.`,
    },
  ]
  return (
    <section id="services">
      <PageHeader title="Services" />
      <section className="services">
        <Container>
          <Row>
            {card.map(service => {
              return (
                <Col md="6" lg="4">
                  <Service services={service} />
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default ServicesPage
