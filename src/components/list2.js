import React from "react"
import "./list2.scss"

const List2 = ({ svg, value }) => {
  return (
    <section className="list2 d-flex flex-nowrap align-content-center">
      <div className="svg mr-3 d-flex align-items-center">{svg}</div>
      <p className="list-value"> {value || ""}</p>
    </section>
  )
}

export default List2
