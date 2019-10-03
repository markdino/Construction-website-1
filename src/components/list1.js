import React from "react"

const List1 = ({
  alignItems,
  svg,
  title,
  className,
  alignSVG,
  titleClass,
  value,
  valueColor,
  valueClass,
}) => {
  return (
    <section
      className={`list d-flex flex-nowrap align-items-${alignItems ||
        `start`} ${className || ""}`}
    >
      <div
        className={`svg mr-3 pt-1 d-flex align-items-${alignSVG || `start`}`}
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
