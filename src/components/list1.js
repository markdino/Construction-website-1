import React from "react"
import "./list.scss"

const List1 = ({
  alignItems,
  svg,
  title,
  className,
  alignSVG,
  svgSize,
  titleClass,
  value,
  valueColor,
  valueClass,
}) => {
  return (
    <section
      className={`list list-${svgSize ||
        `md`} d-flex flex-nowrap align-items-${alignItems ||
        `start`} ${className || ""}`}
    >
      <div
        className={`svg mr-3 pt-1 h-100 d-flex align-items-${alignSVG ||
          `start`}`}
      >
        {svg}
      </div>
      <div className={`mr-3 text-nowrap ${titleClass}`}>{`${title} :`} </div>
      <div className={`text-${valueColor || `muted`} ${valueClass}`}>
        {value}
      </div>
    </section>
  )
}

export default List1
