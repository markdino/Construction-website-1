import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import companyThumbnail from "../images/company.jpg"
import PageHeader from "../components/pageHeader"

import "./about.scss"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutdataQuery {
      site {
        siteMetadata {
          title
          fullTitle
        }
      }
    }
  `)

  const { title, fullTitle } = data.site.siteMetadata

  const aboutContent = [
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea molestias incidunt reprehenderit. Aliquam harum laboriosam reprehenderit delectus nostrum iste in ullam perspiciatis! Doloremque quibusdam quo quas deleniti. Libero tempore nobis autem pariatur, cumque sunt dolor consequuntur sit velit! Voluptates ea sequi vitae distinctio voluptatem. Quis, tenetur necessitatibus? Dicta, perferendis provident?`,
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nisi esse dolorum architecto, id et illo, mollitia consectetur eaque debitis enim ea facere provident aperiam repellat nam natus molestiae expedita?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus cumque incidunt vero corporis architecto vel voluptas optio nemo, cum repellendus, doloremque, voluptates sit? Sit facilis, minus odio tempora dicta distinctio expedita ipsa alias ipsam fuga, nulla dolor, quos ut molestias quia?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa officiis aperiam suscipit quaerat non reprehenderit sapiente hic, odit, praesentium dolorem veritatis. Velit dolorum accusamus debitis blanditiis? Ad officia corporis optio neque quaerat dolore, incidunt, ducimus facilis quo ratione, dicta quos voluptatibus ab consequatur unde debitis quibusdam! Temporibus, dolor pariatur ipsa eaque assumenda nesciunt nam! Ab rem ex iusto aut.`,
  ]
  return (
    <section id="about">
      <PageHeader title="About Us" />
      <Container>
        <main className="about-page section-lg">
          <h2 className="header-title center">{title}</h2>
          <section className="about-content">
            <img
              src={companyThumbnail}
              alt="Company Thumbnail"
              className="img-thumbnail"
              align="left"
            />
            <p className="content-title">{fullTitle}</p>
            {aboutContent.map(para => (
              <p>{para}</p>
            ))}
          </section>
        </main>
      </Container>
    </section>
  )
}

export default AboutPage
