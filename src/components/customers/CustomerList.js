import React, { useEffect, useState } from "react" // allows us to use all of the features that come with the react library

export const CustomerList = () => { //function/component that will render html with browser
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")// updateMessage will update string with totalnumber
    useEffect(
        () => {
            fetch("http://localhost:8098/customers")
                .then(res => res.json())
                .then((customersArray) => {
                    setCustomers(customersArray)
                 }
                )
        },
        []//only makes this run onse since it is empty
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            }
            else {
                updateMessage(`You have ${customers.length} customers`)
            }
        }, 
        [customers]//this will run everytime the customer state changes
    )

    return (
        <>
        <h3>Customer List</h3>
        <div>{totalCustomerMessage}</div>
        {
            customers.slice(0, 5).map(
                (customerObject) => { 
                    return <p key= {`customer--${customerObject.id}`}>{customerObject.name}</p>
                }
            )
        }
        </>
    )
}