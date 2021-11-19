import React from "react" // allows us to use all of the features that come with the react library
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Repairs.css";

export const Repairs = () => { //function/component that will render html with browser
    return (
        <>
            <Route
                render={() => {
                    if (localStorage.getItem("honey_customer")) {
                        return (
                        <>
                            <h1>Honey Rae's Repair Shop</h1>
                            <NavBar />
                            <ApplicationViews />
                        </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
           
        </>
    )
}
//simply contains other components that are responsible for the presentation and behavior of the application