import React, { useEffect, useState } from "react" // allows us to use all of the features that come with the react library

export const EmployeesList = () => { //function/component that will render html with browser
    const [employees, changeEmployee] = useState([])
    const [specialty, modifySpecialty] = useState([])
        useEffect(
            () => {
                fetch("http://localhost:8088/employees")
                    .then(res => res.json())
                    .then((data) => {
                        changeEmployee(data)
                    })
            },
            []
        )
    
        useEffect(() => {
            /*
                1. Use .map() to get the specialty of each employee
                2. Then update a state variable to be a comma-separated string
                    (e.g. "iPhone, Printers, ...")
            */
            const showSpecialties = employees.map(employee => employee.specialty) 
                return modifySpecialty(showSpecialties.join(", "))
            

        }, [employees])
    return (
        <>
        <div>
                Specialties: {specialty}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}