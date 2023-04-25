import React from 'react'

export default function Tableitem2(props) {
    const {element} = props;
  return (
    <tr>
        <td> {element.city}</td>
        <td>{element.income}</td>
        <td>{element.ppl}</td>
        <td>{element.avg}</td>
       
        
    </tr>
  )
}