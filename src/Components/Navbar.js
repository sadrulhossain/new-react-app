import React from 'react'
import { Link } from "react-router-dom";
import routes from '../utils/routes';

export default function Navbar() {
    return (
        <nav className="py-5 bg-gray-900 text-white">
            <ul className="flex justify-between px-10">
                <span className="flex">
                {
                    routes.map((route) => (
                        <li className="mr-5">
                            <Link to={route.path}>{route.label}</Link>
                        </li>
                    ))
                }
                </span>
            </ul>
        </nav>
    );
}
