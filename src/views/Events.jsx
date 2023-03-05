import { useState } from "react";
import EventCard from "../components/Events/EventCard";
import { motion, AnimatePresence } from "framer-motion";
import "../components/Common/neonfont.css";

const Events = () => {
  const events = [
    {
      title: "Dance",
      category: "dance",
      imgUrl:
        "https://cdn.dribbble.com/users/789882/screenshots/17267379/media/b450b2f1bde14856e9de0dc13f39e095.png?compress=1&resize=1000x750&vertical=top",
    },
    {
      title: "Music",
      category: "sing",
      imgUrl:
        "https://cdn.dribbble.com/users/572344/screenshots/18178485/media/8d74245cebe09ccc4580b7be5d5dd4de.png?compress=1&resize=1000x750&vertical=top",
    },
    {
      title: "Online Games",
      category: "game",
      imgUrl:
        "https://cdn.dribbble.com/userupload/4399141/file/original-e0e217acf88e32b73591e4fc73fd4447.png?compress=1&resize=1200x899",
    },

    {
      title: "Darama",
      category: "darama",
      imgUrl:
        "https://cdn.dribbble.com/users/458522/screenshots/15007930/media/4415b0e2c5f4f07f057fd2cc969ac655.jpg?compress=1&resize=1000x750&vertical=top",
    },
    {
      title: "Fashion",
      category: "Fashion",
      imgUrl:
        "https://cdn.dribbble.com/userupload/2922074/file/original-ac96fdca5173952de0a4d50a0d06e431.jpg?compress=1&resize=1024x768",
    },
    {
      title: "Entertainment",
      category: "game",
      imgUrl:
        "https://cdn.dribbble.com/userupload/4399141/file/original-e0e217acf88e32b73591e4fc73fd4447.png?compress=1&resize=1200x899",
    },

    {
      title: "Photography",
      category: "dance",
      imgUrl:
        "https://cdn.dribbble.com/users/789882/screenshots/17267379/media/b450b2f1bde14856e9de0dc13f39e095.png?compress=1&resize=1000x750&vertical=top",
    },
    {
      title: "Film",
      category: "sing",
      imgUrl:
        "https://cdn.dribbble.com/users/572344/screenshots/18178485/media/8d74245cebe09ccc4580b7be5d5dd4de.png?compress=1&resize=1000x750&vertical=top",
    },
    {
      title: "Arts",
      category: "game",
      imgUrl:
        "https://cdn.dribbble.com/userupload/4399141/file/original-e0e217acf88e32b73591e4fc73fd4447.png?compress=1&resize=1200x899",
    },

    {
      title: "Sports",
      category: "dance",
      imgUrl:
        "https://cdn.dribbble.com/users/789882/screenshots/17267379/media/b450b2f1bde14856e9de0dc13f39e095.png?compress=1&resize=1000x750&vertical=top",
    },
    {
      title: "Literature",
      category: "sing",
      imgUrl:
        "https://cdn.dribbble.com/users/572344/screenshots/18178485/media/8d74245cebe09ccc4580b7be5d5dd4de.png?compress=1&resize=1000x750&vertical=top",
    },
    {
      title: "Quiz",
      category: "game",
      imgUrl:
        "https://cdn.dribbble.com/userupload/4399141/file/original-e0e217acf88e32b73591e4fc73fd4447.png?compress=1&resize=1200x899",
    },

    {
      title: "On Stage",
      category: "dance",
      imgUrl:
        "https://cdn.dribbble.com/users/789882/screenshots/17267379/media/b450b2f1bde14856e9de0dc13f39e095.png?compress=1&resize=1000x750&vertical=top",
    },
  ];

  return (
    <div id="events">
      <div id="content" className="flex flex-col items-center py-10 gap-y-4">
        <div class="main text-6xl">
          <span class="webdev">EVENTS</span>
        </div>

        <motion.div
          layout
          id="event-cards"
          className="flex flex-row flex-wrap justify-center"
        >
          <AnimatePresence>
            {events.map((e) => {
              return (
                <EventCard
                  key={e.title}
                  title={e.title}
                  imgUrl={e.imgUrl}
                ></EventCard>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
