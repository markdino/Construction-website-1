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
        `baseline`} ${className}`}
    >
      <div className={`svg mr-3 d-flex align-items-${alignSVG || `center`}`}>
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
