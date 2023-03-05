import EventCard from "../components/Events/EventCard";
import { motion, AnimatePresence } from "framer-motion";

// imgs

// photogrphy img
import photo from '../components/Events/eventimgs/photo4.jpeg';
// dance
import dance from '../components/Events/eventimgs/dance.jpg'
// music
import music from '../components/Events/eventimgs/music.jpg'
// fashion
import fashion from '../components/Events/eventimgs/fashion.jpg'
// drama
import drama from '../components/Events/eventimgs/drama.webp'
// flim
import film from '../components/Events/eventimgs/film.png' 
// entertain
import entertainment from '../components/Events/eventimgs/entertainment.avif'
// art
import art from '../components/Events/eventimgs/art.avif'
// sports
import sports from '../components/Events/eventimgs/sports.jpeg'
// literature
import literature from '../components/Events/eventimgs/literature.avif'
// quiz
import quiz from '../components/Events/eventimgs/quiz.webp'
// onstage
import onstage from '../components/Events/eventimgs/onstage.jpg'
const Events = () => {
  const events = [
    {
      title: "Dance",
      category: "dance",
      imgUrl:dance,
    },
    {
      title: "Music",
      category: "sing",
      imgUrl:music,
    },
    {
      title: "Online Games",
      category: "game",
      imgUrl:
        "https://cdn.dribbble.com/userupload/3348061/file/original-5fd000ed98af552463352a4e82773576.png?compress=1&resize=752x",
    },

    {
      title: "Drama",
      category: "drama",
      imgUrl:drama,
    },
    {
      title: "Fashion",
      category: "Fashion",
      imgUrl:fashion,
    },
    {
      title: "Entertainment",
      category: "game",
      imgUrl:entertainment,
    },

    {
      title: "Photography",
      category: "dance",
      imgUrl:photo,
    },
    {
      title: "Film",
      category: "sing",
      imgUrl:film,
    },
    {
      title: "Arts",
      category: "game",
      imgUrl:art,
    },

    {
      title: "Sports",
      category: "sports",
      imgUrl:sports,
    },
    {
      title: "Literature",
      category: "literature",
      imgUrl:literature,
    },
    {
      title: "Quiz",
      category: "game",
      imgUrl:quiz,
    },

    {
      title: "On Stage",
      category: "dance",
      imgUrl:onstage,
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
