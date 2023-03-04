import { useState } from "react";
import EventCard from "../components/Events/EventCard";
import { motion, AnimatePresence } from "framer-motion";

const Events = () => {
    const events = [
    { title: "Dance", category: "dance", imgUrl:"https://cdn.dribbble.com/users/789882/screenshots/17267379/media/b450b2f1bde14856e9de0dc13f39e095.png?compress=1&resize=1000x750&vertical=top" },
    { title: "Music", category: "sing",imgUrl:"https://cdn.dribbble.com/users/572344/screenshots/18178485/media/8d74245cebe09ccc4580b7be5d5dd4de.png?compress=1&resize=1000x750&vertical=top" },
    { title: "Online Games", category: "game", imgUrl:"https://cdn.dribbble.com/userupload/4399141/file/original-e0e217acf88e32b73591e4fc73fd4447.png?compress=1&resize=1200x899" },
       
    { title: "Darama", category: "dance", imgUrl:"https://cdn.dribbble.com/users/789882/screenshots/17267379/media/b450b2f1bde14856e9de0dc13f39e095.png?compress=1&resize=1000x750&vertical=top" },
    { title: "Fashion", category: "sing",imgUrl:"https://cdn.dribbble.com/users/572344/screenshots/18178485/media/8d74245cebe09ccc4580b7be5d5dd4de.png?compress=1&resize=1000x750&vertical=top" },
    { title: "Entertainment", category: "game", imgUrl:"https://cdn.dribbble.com/userupload/4399141/file/original-e0e217acf88e32b73591e4fc73fd4447.png?compress=1&resize=1200x899" },
       
    { title: "Photography", category: "dance", imgUrl:"https://cdn.dribbble.com/users/789882/screenshots/17267379/media/b450b2f1bde14856e9de0dc13f39e095.png?compress=1&resize=1000x750&vertical=top" },
    { title: "Film", category: "sing",imgUrl:"https://cdn.dribbble.com/users/572344/screenshots/18178485/media/8d74245cebe09ccc4580b7be5d5dd4de.png?compress=1&resize=1000x750&vertical=top" },
    { title: "Arts", category: "game", imgUrl:"https://cdn.dribbble.com/userupload/4399141/file/original-e0e217acf88e32b73591e4fc73fd4447.png?compress=1&resize=1200x899" },
     
    { title: "Sports", category: "dance", imgUrl:"https://cdn.dribbble.com/users/789882/screenshots/17267379/media/b450b2f1bde14856e9de0dc13f39e095.png?compress=1&resize=1000x750&vertical=top" },
    { title: "Literature", category: "sing",imgUrl:"https://cdn.dribbble.com/users/572344/screenshots/18178485/media/8d74245cebe09ccc4580b7be5d5dd4de.png?compress=1&resize=1000x750&vertical=top" },
    { title: "Quiz", category: "game", imgUrl:"https://cdn.dribbble.com/userupload/4399141/file/original-e0e217acf88e32b73591e4fc73fd4447.png?compress=1&resize=1200x899" },
       
    { title: "on stage", category: "dance", imgUrl:"https://cdn.dribbble.com/users/789882/screenshots/17267379/media/b450b2f1bde14856e9de0dc13f39e095.png?compress=1&resize=1000x750&vertical=top" },
    
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

        <div id="content" className="flex flex-col mt-20">
        <p className="ml-10 mt-16 text-7xl lg:mt-16 lg:ml-24 text-white ">Events</p>    
                    <hr class="ml-10 lg:ml-24 border-0 h-1 w-20 mt-2 bg-[#b718f1] drop-shadow-lg"></hr>
                    <hr class="ml-24 lg:ml-36 w-20 h-1 border-0 mt-4 bg-[#b718f1]"></hr>
       

            <motion.div layout id="event-cards" className="flex flex-row flex-wrap justify-center">
                <AnimatePresence>
                    {filtered.map((e) => {
                        return <EventCard key={e.title} title={e.title} imgUrl={e.imgUrl}></EventCard>
                    })}
                </AnimatePresence>
            </motion.div>

        </div>
    </div>
};

export default Events;