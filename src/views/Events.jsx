import { useState } from "react";
import EventCard from "../components/EventCard";
import { motion, AnimatePresence } from "framer-motion";

const Events = () => {
    const events = [{ title: "Dance", category: "dance" },
    // {title: "Game 1", category: "game"}, 
    { title: "Sing", category: "sing" },
    // {title: "Dance 2", category: "dance"},
    //  {title: "Sing 2", category: "sing"}, {title: "Game 2", category: "game"}, 
    //  {title: "Sing 3", category: "sing"}, {title: "Game 4", category: "game"}, 
    { title: "Game", category: "game" },
        //  {title: "Dance 3", category: "dance"}, 
        //  {title: "Dance 4", category: "dance"}, {title: "Sing 4", category: "sing"}, 
    ]

    const [filtered, setFiltered] = useState(events);

    const filterEvents = (category) => {
        if (category === "all") {
            setFiltered(events);
        } else {
            let newEvents = events.filter((e) => e.category === category);
            setFiltered(newEvents);
        }
    };

    return <div id="events">

        {/* <div id="events-top" className="flex flex-col lg:flex-row stretch-to-screen bg-[#1A1330] text-white items-center"> */}
        {/* <div id="left" className="basis-1/2">
                <p className="text-7xl mt-16 ml-16">Event</p>    
                <hr class="ml-16 h-px w-20 my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                <hr class="ml-28  w-20 my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                <p className="mx-16 ">
                    A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose. Wikipedia
                </p>
                <button type="button" onClick={()=>window.open("#content","_self")} class="ml-16 mt-12 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Show More
                </button>
            </div> */}
        {/* </div> */}

        <div id="content" className="flex flex-col m-20">
            <div id="filter-btns" className="flex flex-row flex-wrap m-5 justify-center">

                <button class="bg-transparent hover:bg-teal-600  text-teal-600 font-semibold hover:text-white py-1 px-4 border border-teal-600  hover:border-transparent rounded mr-5" onClick={() => filterEvents("all")}>
                    ALL
                </button>
                <button class="bg-transparent hover:bg-teal-600  text-teal-600 font-semibold hover:text-white py-1 px-4 border border-teal-600  hover:border-transparent rounded mr-5" onClick={() => filterEvents("dance")}>
                Dancing
                </button>
                <button class="bg-transparent hover:bg-teal-600  text-teal-600 font-semibold hover:text-white py-1 px-4 border border-teal-600  hover:border-transparent rounded mr-5" onClick={() => filterEvents("sing")}>
                Singing
                </button>
                <button class="bg-transparent hover:bg-teal-600  text-teal-600 font-semibold hover:text-white py-1 px-4 border border-teal-600  hover:border-transparent rounded mr-5" onClick={() => filterEvents("game")}>
                Gaming
                </button>
                {/* <button onClick={() => filterEvents("all")} className="bg-teal-600 text-white rounded-2xl p-3 h-10 text-justify text-lg mr-5">All</button>
                <button onClick={() => filterEvents("dance")} className="bg-teal-600 text-white rounded-2xl  p-3 h-10 text-lg mr-5">Dancing</button>
                <button onClick={() => filterEvents("sing")} className="bg-teal-600 text-white rounded-2xl h-10 p-3 text-lg mr-5">Singing</button>
                <button onClick={() => filterEvents("game")} className="bg-teal-600 text-white rounded-2xl h-10 p-3 text-lg">Gaming</button> */}
            </div>

            <motion.div layout id="event-cards" className="flex flex-row flex-wrap justify-center">
                <AnimatePresence>
                    {filtered.map((e) => {
                        return <EventCard key={e.title} title={e.title}></EventCard>
                    })}
                </AnimatePresence>
            </motion.div>

        </div>
    </div>
};

export default Events;