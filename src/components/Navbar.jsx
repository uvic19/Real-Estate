import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if(showMobileMenu){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    },[showMobileMenu])

    return (
        <header className="relative w-full z-10">
            {/* Navbar Container */}
            <div className="absolute top-0 left-0 w-full z-10">
                <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                    <img src={assets.logo} alt="Logo" />

                    {/* Desktop Links */}
                    <ul className="hidden md:flex gap-7 text-white">
                        <a href="#Header" className="cursor-pointer hover:text-blue-400">Home</a>
                        <a href="#About" className="cursor-pointer hover:text-blue-400">About</a>
                        <a href="#Projects" className="cursor-pointer hover:text-blue-400">Projects</a>
                        <a href="#Testimonials" className="cursor-pointer hover:text-blue-400">Testimonials</a>
                    </ul>
                    
                    {/* Sign Up Button */}
                    <button className="hidden md:block bg-white px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all" onClick={() => {alert("Will be added soon!")}}>
                        Sign up
                    </button>
                    
                    {/* Mobile Menu Icon */}
                    {!showMobileMenu && (
                        <img
                            src={assets.menu_icon}
                            className="md:hidden w-7 cursor-pointer"
                            alt="Menu"
                            onClick={() => setShowMobileMenu(true)}
                        />
                    )}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {showMobileMenu && (
                <div className="fixed inset-0 bg-white z-20 transition-transform duration-300">
                    <div className="flex justify-end p-6">
                        <img
                            src={assets.cross_icon}
                            className="w-6 cursor-pointer"
                            alt="Close menu"
                            onClick={() => setShowMobileMenu(false)}
                        />
                    </div>
                    <ul className="flex flex-col items-center gap-4 mt-8 text-lg font-medium text-gray-800">
                        <a href="#Header" className="px-4 py-2" onClick={() => setShowMobileMenu(false)}>Home</a>
                        <a href="#About" className="px-4 py-2" onClick={() => setShowMobileMenu(false)}>About</a>
                        <a href="#Projects" className="px-4 py-2" onClick={() => setShowMobileMenu(false)}>Projects</a>
                        <a href="#Testimonials" className="px-4 py-2" onClick={() => setShowMobileMenu(false)}>Testimonials</a>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
