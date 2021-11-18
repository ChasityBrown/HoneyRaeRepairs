import React from "react" // allows us to use all of the features that come with the react library
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
export const Repairs = () => { //function/component that will render html with browser
    return (
        <>
            <NavBar/>
            <h1>Honey Rae's Repair Shop</h1>
            <ApplicationViews/>
        </>
    )
}
//simply contains other components that are responsible for the presentation and behavior of the application