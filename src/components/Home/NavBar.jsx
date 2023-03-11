import React from 'react'
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate();

    function eventsNavigation() {
        navigate('/events')
    }

    function homeNav(){
        navigate("/")
    }
    
    function myFunction() {
        var x = document.getElementById("navbar-default");
        x.classList.toggle("hidden");
    }

    return (

        <nav class="bg-tranperant border-gray-200 rounded dark:bg-black-900 absolute right-0 top-0">
            <div class="flex flex-wrap items-center justify-between mx-auto mt-4">
                <a href="https://flowbite.com/" class="flex items-center">
                    {/* <img
                        src={require("../../assets/rec-logo.png")}
                        className="h-15 w-40"
                        alt=""
                    /> */}
                </a>

                <button onClick={myFunction} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-black dark:focus:ring-gray-600 " aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                
                <div class="hidden w-full lg:block lg:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4  border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white dark:black lg:dark:bg-black dark:border-gray-700 bg-black">
                        <li>
                            <button onClick={()=>homeNav()} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Home</button>
                        </li>
                        <li>
                            <a href='#about-recharge' class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <button onClick={()=>eventsNavigation("/events")} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Events</button>
                        </li>
                        <li>
                            <a href='#proshows' class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">ProShows</a>
                        </li>
                        <li>
                            <a href='#spotlight' class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Spotlight</a>
                        </li>
                        <li>
                            <a href='#gallery' class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Gallery</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar