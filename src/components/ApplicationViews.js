//This is a Controller Component. Its only responsibility to 
//control the behavior of the system and maps URLs to components.
import React from "react"
import { Route } from "react-router-dom"
import { EmployeesList } from "./employees/EmployeesList"
import { TicketList } from "./serviceTickets/TicketList"
import { CustomerList } from "./customers/CustomerList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route path="/employees">
                <EmployeesList/>
            </Route>
            <Route path="/servicetickets">
                <TicketList/>
            </Route>
        </>
    )
}
