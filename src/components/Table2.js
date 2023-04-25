
import React, { useEffect, useContext } from 'react'
import "./Table.css"
import Cont from "../context/DataContext"
import Tableitem2 from './Tableitem2';
export default function (props) {
    const context = useContext(Cont);
    const { list4, getFirst } = context;

    const { evnt, lst } = props;

    useEffect(() => {
        getFirst(evnt);
    }, [])
    return (
        <div>
            <section>
                <h1>Fixed Table header</h1>
                <div class="tbl-header table-container">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>Total Income</th>
                                <th>No. Of People</th>
                                <th>Avg Income</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tbody>
                            {list4.map(element => {
                                return <Tableitem2 element={element} />
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
            <div class="made-with-love">
                <h4>
                Submitted By Piyush Jaswal
                </h4>
                <h3>
                email : piyushj0809@gmail.com
                </h3>
            </div>
        </div>
    )
}
