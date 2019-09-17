import React, { Component } from "react"
import { Row, Col, Container } from "reactstrap"
import PhotoViewer from "../components/photoViewer"
import List1 from "../components/list1"

import User from "../assets/svg/solid/user.svg"
import Pin from "../assets/svg/solid/map-marker-alt.svg"
import Calendar from "../assets/svg/solid/calendar-alt.svg"
import Bill from "../assets/svg/solid/money-bill-wave.svg"
import Building from "../assets/svg/solid/building.svg"
import Hardhat from "../assets/svg/solid/hard-hat.svg"

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
              <section className="details mt-5 mb-5">
                <List1
                  svg={<User />}
                  title="Owner"
                  value="Ms. Marissa Pelonia"
                />
                <hr />
                <List1
                  svg={<Pin />}
                  title="Location"
                  value="Block2, Lot1, Sierra Madre Street, Bermuda Subdivision, Las Pinas City, Philippines"
                />
                <hr />
                <List1
                  svg={<Building />}
                  title="Scope of Works"
                  value="Construction"
                />
                <hr />
                <List1
                  svg={<Hardhat />}
                  title="Project Engineer"
                  value="Engr. Zaldy Omar Pelonia"
                />
                <hr />
                <List1 svg={<Bill />} title="Amount" value="Php 4,580,240.23" />
                <hr />
                <List1
                  svg={<Calendar />}
                  title="Duration Date"
                  value="Feb. 24, 2018 - March 05, 2019"
                />
              </section>
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
