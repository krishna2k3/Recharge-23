import { useState } from "react";
import EventCard from "../components/EventCard";

const Events = () => {
    const events = [{title: "Dance 1", category: "dance"}, {title: "Dance 2", category: "dance"},
                    {title: "Sing 1", category: "sing"}, {title: "Sing 2", category: "sing"}]

    const [filtered, setFiltered] = useState(events);

    const filterEvents = (category) => {
        if ( category === "all" ) {
            setFiltered(events);
        } else {
            let newEvents = events.filter((e) => e.category === category);
            setFiltered(newEvents);
        }
    };

    return <div id="events">
        <div id="top" className="bg-slate-900 h-60 flex justify-center items-center">
            <p className="text-6xl text-white">Events</p>
        </div>
        <div id="content" className="flex flex-col">
            <div id="filter-btns" className="flex flex-row flex-wrap m-5 justify-center">
            <button onClick={() => filterEvents("all")} className="bg-teal-600 text-white rounded-2xl p-3 text-lg mr-5">All</button>
                <button onClick={() => filterEvents("dance")} className="bg-teal-600 text-white rounded-2xl p-3 text-lg mr-5">Dancing</button>
                <button onClick={() => filterEvents("sing")} className="bg-teal-600 text-white rounded-2xl p-3 text-lg">Singing</button>
            </div>
            <div id="event-cards" className="flex flex-row flex-wrap justify-around">
                {filtered.map((e) => {
                   return <EventCard key={e.id} title={e.title}></EventCard>
                })}
            </div>
        </div>
    </div>;
};

export default Events;