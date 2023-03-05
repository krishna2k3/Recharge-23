import React from "react";
import { useNavigate } from 'react-router-dom';
//import {useLocation} from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div
            id="footer"
            className="rounded-2xl  flex flex-col lg:flex-row w-full p-7 bg-zinc-900 md:justify-start"
        >
            <div className="flex flex-col mb-6 gap-3 text-white items-center text-center lg:items-start lg:text-left">
                <img 
                    src={require("../../assets/recharge-logo.png")}
                    className="flex justify-center h-24 w-auto"
                    alt=""
                />
            
                <p className="whitespace-normal">
                    Rajalakshmi Engineering College,
                    Rajalakshmi Nagar Thandalam, Chennai - 602105.
                </p>
                <div className="flex flex-row gap-x-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 48 48" width="96px" height="96px"><path fill="#48b564" d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z" /><path fill="#fcc60e" d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z" /><path fill="#2c85eb" d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z" /><path fill="#ed5748" d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z" /><path fill="#5695f6" d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z" /></svg>
                        <a className="text-white" href="https://goo.gl/maps/VAdKNh5zVXvckz7p7">Location</a>
                </div>
            </div>

            <div
                id="footer-items"
                className="flex flex-col gap-y-6 md:flex-row md:justify-evenly md:w-full md:m-0"
            >
                <div className="footer-item-links">
                    <p className="text-white font-semibold  justify-center text-2xl  tracking-widest">Meet the Team</p>
                    <hr class="border-0 h-1 w-20 mb-5 bg-[#ffd54f]"></hr>
                    <p onClick={() => navigate("/promotions")} className="cursor-pointer text-white text-lg">Promotions Team</p>
                </div>
                <div className="footer-item-events">
                    <p className="text-white font-semibold  justify-center text-2xl  tracking-widest">
                        Events
                    </p>
                    <hr class="border-0 h-1 w-14 mb-5 bg-[#ffd54f]"></hr>
                    <p className="text-white text-lg">
                        <a href="/#events-technical">Technical Events</a>
                    </p>
                    <p className="text-white text-lg">
                        <a href="/#events-non-technical">Non-Technical Events</a>
                    </p>
                </div>
                <div className="footer-item-contacts">
                    <p className="text-white font-semibold  justify-center text-2xl  tracking-widest">
                        Contacts
                    </p>
                    <hr class="border-0 h-1 w-16 mb-5 bg-[#ffd54f]"></hr>
                    <p className="text-white flex flex-row gap-x-2 items-center my-3">
                        <svg className="w-5 h-5" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Rounded" transform="translate(-884.000000, -1486.000000)">
                                    <g id="Content" transform="translate(100.000000, 1428.000000)">
                                        <g id="-Round-/-Content-/-mail" transform="translate(782.000000, 54.000000)">
                                            <g transform="translate(0.000000, 0.000000)">
                                                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                                <path d="M20,4 L4,4 C2.9,4 2,4.9 2,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 C22,4.9 21.1,4 20,4 Z M19.6,8.25 L13.06,12.34 C12.41,12.75 11.59,12.75 10.94,12.34 L4.4,8.25 C4.15,8.09 4,7.82 4,7.53 C4,6.86 4.73,6.46 5.3,6.81 L12,11 L18.7,6.81 C19.27,6.46 20,6.86 20,7.53 C20,7.82 19.85,8.09 19.6,8.25 Z" id="🔹Icon-Color" fill="#eb4c4c"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <a href="mailto:bootup@rajalakshmi.edu.in">
                            bootup@rajalakshmi.edu.in
                        </a>
                    </p>
                    <p className="text-white flex flex-row gap-x-2 items-center my-3">
                        <svg
                            className="w-5 h-5 text-white"
                            viewBox="0 0 18 18"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <g
                                id="Icons"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g
                                    id="Rounded"
                                    transform="translate(-749.000000, -1263.000000)"
                                >
                                    <g
                                        id="Communication"
                                        transform="translate(100.000000, 1162.000000)"
                                    >
                                        <g
                                            id="-Round-/-Communication-/-phone"
                                            transform="translate(646.000000, 98.000000)"
                                        >
                                            <g>
                                                <polygon
                                                    id="Path"
                                                    points="0 0 24 0 24 24 0 24"
                                                ></polygon>
                                                <path
                                                    d="M19.23,15.26 L16.69,14.97 C16.08,14.9 15.48,15.11 15.05,15.54 L13.21,17.38 C10.38,15.94 8.06,13.63 6.62,10.79 L8.47,8.94 C8.9,8.51 9.11,7.91 9.04,7.3 L8.75,4.78 C8.63,3.77 7.78,3.01 6.76,3.01 L5.03,3.01 C3.9,3.01 2.96,3.95 3.03,5.08 C3.56,13.62 10.39,20.44 18.92,20.97 C20.05,21.04 20.99,20.1 20.99,18.97 L20.99,17.24 C21,16.23 20.24,15.38 19.23,15.26 Z"
                                                    id="🔹Icon-Color"
                                                    fill="#009dff"
                                                ></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <a href="tel:9566170560">+91 95661 70560</a><p> - Thuhin Khanna R</p>
                    </p>
                    <p
                        className="flex flex-row gap-x-2 items-center my-3"
                    >
                        <svg
                            className="w-5 h-5 text-pink-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <a
                            href="https://instagram.com/bootup.rec"
                            className="text-white">Instagram</a >
                    </p>
                    <div className="flex flex-row gap-x-1 my-3 items-center">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><defs></defs><g id="图层_2" data-name="图层 2"><g id="Discord_Logos" data-name="Discord Logos"><g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White"><path class="cls-1" style={{ fill: "#5865f2" }} d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" /></g></g></g></svg>
                        <a className="ml-1 mb text-white" href="https://discord.gg/gx5NvXB2qR">Discord</a>
                    </div>
                    {/* <div className="flex flex-row gap-x-1 my-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 48 48" width="96px" height="96px"><path fill="#48b564" d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z" /><path fill="#fcc60e" d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z" /><path fill="#2c85eb" d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z" /><path fill="#ed5748" d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z" /><path fill="#5695f6" d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z" /></svg>
                        <a className="text-white" href="https://goo.gl/maps/VAdKNh5zVXvckz7p7">Location</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
