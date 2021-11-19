import React, { useState } from "react"
import { useHistory } from "react-router"

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({
        name: "",
        specialty: ""
    })

    const history = useHistory()
    
    const hireEmployee = (evt) => {
        evt.preventDefault()
        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8098/employees", fetchOption)
            // .then(res => res.json())
            .then(() => {
                history.push("/employees")

            })
        
        }
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">Hire New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">name:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Specialty:</label>
                    <input 
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.specialty = evt.target.value
                                updateEmployee(copy)
                            }
                    }
                    required autoFocus
                    type="text" 
                    className="form-control"
                    placeholder="Please enter your area of expertise here" />
                </div>
            </fieldset>
            <button onClick={hireEmployee} className="btn btn-primary">
                Finish Hiring
            </button>
        </form>
    )            
} 
