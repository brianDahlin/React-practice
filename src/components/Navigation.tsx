import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    return(
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
            <span className="font-bold ">React 2023</span>
            
            <span>
                <Link to="/" className="mr-5 hover:text-black">App</Link>
                <Link to="/about" className="hover:text-black">About</Link>
            </span>
        </nav>
    )
}