import React, { useEffect, useState } from "react" // allows us to use all of the features that come with the react library

export const Repairs = () => { //function/component that will render html with browser
    const [customers, assignCustomers] = useState([])

    useEffect(
        () => {
            fetch()
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
        <h1>Honey Rae's Repair Shop</h1>
        {
            customers.map(
                (customerObject) => { 
                    return <h2>{customerObject.name}</h2>
                }
            )
        }
        </>
    )
}