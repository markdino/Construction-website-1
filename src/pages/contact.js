import React from "react"
import { Container, Row, Col } from "reactstrap"
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
          <h2 className="header-title center">Get in Touch</h2>
          <p className="contact-description center text-gray">
            We are available by fax, e-mail or by phone. You can also use our
            quick contact form to ask a question about our services and projects
            we’re working on.
          </p>
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
