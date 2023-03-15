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
import quiz from '../components/Events/eventimgs/carnival.webp'
// onstage
import onstage from '../components/Events/eventimgs/onstage.jpg'

const Events = () => {
  const events = [
    {
      title: "Dance",
      category: "dance",
      imgUrl:dance,
      category_id: 7
    },
    {
      title: "Music",
      category: "sing",
      imgUrl:music,
      category_id: 3

    },
    {
      title: "Online Games",
      category: "game",
      imgUrl:
        "https://cdn.dribbble.com/userupload/3348061/file/original-5fd000ed98af552463352a4e82773576.png?compress=1&resize=752x",
        category_id: 1
    },

    {
      title: "Drama",
      category: "drama",
      imgUrl:drama,
      category_id: 2
    },
    {
      title: "Fashion",
      category: "Fashion",
      imgUrl:fashion,
      category_id: 4
    },
    {
      title: "Entertainment",
      category: "game",
      imgUrl:entertainment,
      category_id: 5

    },

    {
      title: "Photography",
      category: "dance",
      imgUrl:photo,
      category_id: 6
    },
    {
      title: "Film",
      category: "sing",
      imgUrl:film,
      category_id: 8
    },
    {
      title: "Arts",
      category: "game",
      imgUrl:art,
      category_id: 9
    },

    {
      title: "Sports",
      category: "sports",
      imgUrl:sports,
      category_id: 10
    },
    {
      title: "Literature",
      category: "literature",
      imgUrl:literature,
      category_id: 11
    },
    {
      title: "Fun Street",
      category: "fun",
      imgUrl:quiz,
      category_id: 12
    },

    {
      title: "On Stage",
      category: "dance",
      imgUrl:onstage,
      category_id: 13
    },
  ];

  return (
    <div id="events">
      <div id="content" className="flex flex-col items-center py-10 gap-y-4">
        <div class="main text-6xl">
          <span class="socod">EVENTS</span>
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
                  id ={e.category_id}
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
