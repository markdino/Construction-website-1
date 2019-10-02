import React from "react"

const List2 = ({ svg, value }) => {
  return (
    <section className="list d-flex flex-nowrap align-items-baseline">
      <div className="svg mr-3 d-flex align-items-center">{svg}</div>
      <div className="list-value"> {value || ""}</div>
    </section>
  )
}

export default List2
