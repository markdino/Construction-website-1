import React from "react"
import "./list1.scss"

const List1 = ({ svg, title, value }) => {
  return (
    <section className="list1 d-flex flex-nowrap align-content-center">
      <div className="svg mr-3 d-flex align-items-center">{svg}</div>
      <p className="list-title mr-3">{`${title} :`} </p>
      <p className="list-value text-muted"> {value}</p>
    </section>
  )
}

export default List1
