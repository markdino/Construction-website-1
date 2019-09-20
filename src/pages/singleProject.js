import React from "react"
import { Row, Col, Container } from "reactstrap"
import PhotoViewer from "../components/photoViewer"
import List1 from "../components/list1"

import User from "../assets/svg/solid/user.svg"
import Pin from "../assets/svg/solid/map-marker-alt.svg"
import Calendar from "../assets/svg/solid/calendar-alt.svg"
import Bill from "../assets/svg/solid/money-bill-wave.svg"
import Building from "../assets/svg/solid/building.svg"
import Hardhat from "../assets/svg/solid/hard-hat.svg"

const SingeProject = ({ location }) => {
  const {
    title,
    category,
    description,
    img,
    engineer,
    amount,
    duration,
    owner,
    address,
  } = location.state.project

  return (
    <main className="singe-project section-lg" id="single-project">
      <Container>
        <Row>
          <Col lg="5" className="proj-details">
            <h2 className="header-title center">{title}</h2>
            <p className="description text-secondary">{description}</p>
            <section className="details mt-5 mb-5">
              <List1 svg={<User />} title="Owner" value={owner} />
              <hr />
              <List1 svg={<Pin />} title="Location" value={address} />
              <hr />
              <List1
                svg={<Building />}
                title="Scope of Works"
                value={category.map((cat, index, category) =>
                  index === category.length - 1 ? cat : cat + ", "
                )}
              />
              <hr />
              <List1
                svg={<Hardhat />}
                title="Project Engineer"
                value={engineer}
              />
              <hr />
              <List1 svg={<Bill />} title="Total Cost" value={amount} />
              <hr />
              <List1
                svg={<Calendar />}
                title="Duration Date"
                value={duration}
              />
            </section>
          </Col>
          <Col lg="7" className="proj-photos">
            <PhotoViewer list={img} />
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default SingeProject
