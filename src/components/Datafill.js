import React , {useContext} from 'react'
import Cont from "../context/DataContext"
import Table from './Table';
import Table2 from './Table2';
export default function Datafill() {
    const context = useContext(Cont);
    const {list, getFirst,setList ,list1,list2,list3,list4} = context;
  return (
    <div>
      <Table evnt = "first"  header = 'Income lower than $5 USD and have a car of brand “BMW” or “Mercedes”' />
      <Table evnt = "second" header= 'Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name' />
      <Table evnt = "third" header= 'Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit' />
      <Table evnt = "fourth" header =  'Male Users which have phone price greater than 10,000' />
      <Table2 evnt = "fifth" header ='top 10 cities which have the highest number of users and their average income' />
    </div>
  )
}
