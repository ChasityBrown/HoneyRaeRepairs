import React, { useEffect, useState } from "react" // allows us to use all of the features that come with the react library
import { useHistory } from "react-router"

export const TicketList = () => { //function/component that will render html with browser
    const [tickets, updateTickets] = useState([])
    const [message, updateMessage] = useState("")
    const history = useHistory()
        useEffect(
            () => {
                fetch("http://localhost:8098/serviceTickets?_expand=employee&_expand=customer")
                    .then(res => res.json())
                    .then((data) => {
                        updateTickets(data)
                    })
            },
            []
        )
    
        useEffect(
            () => {
                if (tickets.length === 1) {
                    updateMessage("You have 1 open ticket")
                } else{
                    updateMessage("You have {tickets.length} open tickets")
                }
            })
            
        
    return (
        <>
            <div>
                <button onClick={() => history.push("/ticketform")}>Create Ticket</button> 
            </div>
            <div>{message}</div>
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <p>{ticket.description} submitted by {ticket.customer.name} 
                            and worked on by {ticket.employee.name}
                        </p>
                    </div>
                    }
                )
            }
        </>
    )
}