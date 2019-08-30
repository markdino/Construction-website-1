import React from "react"
import { Container, Row, Col, Form, Button, Input } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import PageHeader from "../components/pageHeader"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactdataQuery {
      site {
        siteMetadata {
          title
          email
          social {
            facebook
            twitter
            instagram
            linkedin
          }
          contact {
            mobile
            telephone
          }
          address
          map
        }
      }
    }
  `)

  const { title, email, social, contact, address, map } = data.site.siteMetadata
  return (
    <section id="contact">
      <PageHeader title="Contact" />
      <Container>
        <main className="contact-page section-lg">
          <Row>
            <Col lg="8" className="border-right pl-5 pr-5">
              <h2 className="header-title center">Get in Touch</h2>
              <p className="contact-description center text-gray mb-4 small">
                We are available by fax, e-mail or by phone. You can also use
                our quick contact form to ask a question about our services and
                projects we’re working on.
              </p>
              <Form>
                <Row>
                  <Col className="mb-4" md="6">
                    <Input
                      type="text"
                      name="name"
                      id="userName"
                      placeholder="Your Name*"
                    />
                  </Col>
                  <Col className="mb-4" md="6">
                    <Input
                      type="number"
                      name="phone"
                      id="userName"
                      placeholder="Phone"
                    />
                  </Col>
                  <Col className="mb-4" md="12">
                    <Input
                      type="textarea"
                      name="text"
                      id="message"
                      placeholder="Your Message*"
                      rows="5"
                      required
                    />
                  </Col>
                  <Col className="mb-4" md="6">
                    <Input
                      type="email"
                      name="email"
                      id="userEmail"
                      placeholder="E-mail*"
                      required
                    />
                  </Col>
                  <Col className="mb-4" md="6">
                    <Button block>Submit</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col lg="4" className="pl-5 pr-5">
              <aside className="contact-info">
                <section className="get-social">
                  <p className="text-uppercase font-weight-bold">Get Social</p>
                </section>
              </aside>
            </Col>
          </Row>
        </main>
      </Container>
      <iframe
        src={map}
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen=""
        title={`${title} office map`}
      ></iframe>
    </section>
  )
}

export default ContactPage
