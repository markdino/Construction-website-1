import React from "react"

const List2 = ({ svg, value, alignItems, className, alignSVG, valueClass }) => {
  return (
    <section
      className={`list d-flex flex-nowrap align-items-${alignItems ||
        `baseline`} ${className}`}
    >
      <div className={`svg mr-3 d-flex align-items-${alignSVG || `center`}`}>
        {svg}
      </div>
      <div className={valueClass}> {value || ""}</div>
    </section>
  )
}

export default List2
