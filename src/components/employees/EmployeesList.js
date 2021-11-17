import React, { useEffect, useState } from "react" // allows us to use all of the features that come with the react library

export const EmployeesList = () => { //function/component that will render html with browser
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeesArray) => {
                    setEmployees(employeesArray)
                 }
                )
        },
        []
    )
    return (
        <>
        <h1></h1>
        {
            employees.map(
                (employeeObject) => { 
                    return <h2 key= {`employee--${employeeObject.id}`}>{employeeObject.name}</h2>
                }
            )
        }
        </>
    )
}