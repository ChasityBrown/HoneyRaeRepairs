import React, { useEffect, useState } from "react" // allows us to use all of the features that come with the react library

export const CustomerList = () => { //function/component that will render html with browser
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customersArray) => {
                    setCustomers(customersArray)
                 }
                )
        },
        []
    )
    return (
        <>
        <h1></h1>
        {
            customers.map(
                (customerObject) => { 
                    return <h2 key= {`customer--${customerObject.id}`}>{customerObject.name}</h2>
                }
            )
        }
        </>
    )
}