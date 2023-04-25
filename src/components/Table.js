import React, { useEffect, useContext } from 'react'
import "./Table.css"
import Cont from "../context/DataContext"
import Tableitem from './Tableitem';
export default function Table(props) {
    const context = useContext(Cont);
    const { list, getFirst, list1, list2, list3, list4 } = context;

    const { evnt, header } = props;

    useEffect(() => {
       
            getFirst(evnt);
        }, [])

    return (
        <div>

            <section>
                <h1>{header}</h1>
                <div class="tbl-header table-container">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Income</th>
                                <th>City</th>
                                <th>Car </th>
                                <th>Phone Price</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tbody>
                            {
                                evnt == "first" && list.map(element => {
                                    return <Tableitem element={element} />
                                })
                            }
                            {
                                evnt == "second" && list1.map(element => {
                                    return <Tableitem element={element} />
                                })
                            }
                            {
                                evnt == "third" && list2.map(element => {
                                    return <Tableitem element={element} />
                                })
                            }
                            {
                                evnt == "fourth" && list3.map(element => {
                                    return <Tableitem element={element} />
                                })
                            }
                            



                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}
