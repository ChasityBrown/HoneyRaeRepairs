//This is a Controller Component. Its only responsibility to 
//control the behavior of the system and maps URLs to components.
import React from "react"
import { Route } from "react-router-dom"
import { EmployeesList } from "./employees/EmployeesList"
import { TicketList } from "./serviceTickets/TicketList"
import { CustomerList } from "./customers/CustomerList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { EmployeeForm } from "./employees/EmployeeForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeesList/>
            </Route>
            <Route path="/employees/form">
                <EmployeeForm/>
            </Route>
            <Route path="/servicetickets">
                <TicketList/>
            </Route>
            <Route path="/ticketform">
                <TicketForm/>
            </Route>
        </>
    )
}
