import React from "react" // allows us to use all of the features that come with the react library
import { CustomerList } from "./customers/CustomerList"
import { EmployeesList } from "./employees/EmployeesList"
import { TicketList } from "./serviceTickets/TicketList"
export const Repairs = () => { //function/component that will render html with browser
    return (
        <>
        <h1>Honey Rae's Repair Shop</h1>
        <CustomerList />
        <EmployeesList/>

        <h2>Service Tickets</h2>
        <TicketList/>
        </>
    )
}