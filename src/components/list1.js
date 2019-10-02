import React from "react"
import "./list1.scss"

const List1 = ({ svg, title, value }) => {
  return (
    <section className="list1 d-flex flex-nowrap align-items-baseline">
      <div className="svg mr-3 d-flex align-items-center">{svg}</div>
      <div className="list-title mr-3 text-nowrap">{`${title} :`} </div>
      <div className="list-value text-muted"> {value}</div>
    </section>
  )
}

export default List1
