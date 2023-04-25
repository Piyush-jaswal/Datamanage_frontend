import React from 'react'

export default function Tableitem(props) {
    const {element} = props;
  return (
    <tr>
        <td> {element.first_name} {element.last_name}</td>
        <td>{element.email}</td>
        <td>{element.income}</td>
        <td>{element.city}</td>
        <td>{element.car}</td>
        <td>{element.phone_price}</td>
        {/* <td>hi</td> */}
    </tr>
  )
}
