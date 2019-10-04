import React from "react"
import "./list.scss"

const List2 = ({
  svg,
  value,
  alignItems,
  className,
  alignSVG,
  svgSize,
  valueClass,
}) => {
  return (
    <section
      className={`list  list-${svgSize ||
        `md`} d-flex flex-nowrap align-items-${alignItems ||
        `start`} ${className || ""}`}
    >
      <div
        className={`svg mr-3 pt-1 h-100 d-flex align-items-${alignSVG ||
          `start`}`}
      >
        {svg}
      </div>
      <div className={valueClass}> {value || ""}</div>
    </section>
  )
}

export default List2
