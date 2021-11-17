import React, { useEffect, useState } from "react" // allows us to use all of the features that come with the react library

export const TicketList = () => { //function/component that will render html with browser
    const [tickets, updateTickets] = useState([])
        useEffect(
            () => {
                fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                    .then(res => res.json())
                    .then((data) => {
                        updateTickets(data)
                    })
            },
            []
        )
    
    return (
        <>
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