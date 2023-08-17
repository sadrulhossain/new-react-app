import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/css/style.css';
import routes from './utils/routes';
import Navbar from "./Components/Navbar";

export default function App(props) {
    return (
        <Router>
            <div>
                <Navbar/>
                <Routes>
                    {
                        routes.map((route) =>
                            <Route path={route.path} element={route.element} />
                        )
                    }
                </Routes>
            </div>
        </Router>
    );
}
