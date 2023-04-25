import React, { useState } from "react";
import DataContext from "./DataContext";
const DataState = (props) => {
    const url = "http://localhost:5000/"
    var listIn = [];
    const [list, setList] = useState([])
    const [list1, setList1] = useState([])
    const [list2, setList2] = useState([])
    const [list3, setList3] = useState([])
    const [list4, setList4] = useState([])
    const getFirst = async (evnt) => {
        var endpt;
        if (evnt == "first") {
            endpt = "incmlsfv";
        }
        if (evnt == "second") {
            endpt = "lstnamem"
        }
        if (evnt == "third") {
            endpt = "mailnodigit"
        }
        if (evnt == "fourth") {
            endpt = "phoneprice"
        }
        if (evnt == "fifth") {
            endpt = "last"
        }
        const response = await fetch(`${url}${endpt}`);
        const j = await response.json();
        const cat = await j.data;
        if (evnt == "first") {
            setList(cat)
        }
        if (evnt == "second") {
            console.log(cat)
            setList1(cat)
        }
        if (evnt == "third") {
            setList2(cat)
        }
        if (evnt == "fourth") {
            setList3(cat)
        }
        if (evnt == "fifth") {
            setList4(cat)
        }
        console.log(list)
    }


    // Return data
    return (
        <DataContext.Provider value={{ list, setList, getFirst,list1,list2,list3,list4 }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataState;