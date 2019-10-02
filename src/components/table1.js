import React from "react"
import { Table } from "reactstrap"

const Table1 = ({ title, tHeader, tData }) => {
  return (
    <section className="opened-positions mt-5 w-100">
      <h3>{title}</h3>
      <Table>
        <thead>
          <tr>
            {tHeader.map(header => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tData.map(data => {
            return (
              <tr>
                <td>{data.node.positionTitle}</td>
                <td>{data.node.location}</td>
                <td>{data.node.time}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </section>
  )
}

export default Table1
