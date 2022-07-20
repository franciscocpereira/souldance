import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../styles/styles.scss";
import Homepage from "./Homepage/Homepage";


function Main() {
    // const ROLES = {
    //     user: "user",
    //     admin: "admin",
    // };
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </div>
    );
}

export default Main;