import Loading from "./Loading";
import Landing from "../components/Home/Landing";
import Gallery from "../components/Home/Gallery";
import AboutRecharge from "../components/Home/AboutRecharge";
import ProShows from "../components/Home/ProShows";
import Sponsors from "../components/Home/Sponsors";
import { useEffect } from "react";
import { motion } from "framer-motion";
import AboutREC from "../components/Home/AboutREC";
import NavBar from "../components/Home/NavBar";

const Home = ({ isLoading, setLoading }) => {
  const refs = ["#landing", "#about-recharge", "#about-rec", "#gallery"]
  let i=0;
  let scrolling = false;

  window.addEventListener("wheel", (event) => {
    if ( !scrolling && event.deltaY < 0 ) {
      scrollToComponent('forward');
    } else if ( !scrolling && event.deltaY > 0 ) {
      scrollToComponent('backward');
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  setTimeout(() => {
    setLoading(false);
  }, 1900);

  const scrollToComponent = (direction) => {
    scrolling = true;
    if (direction === 'backward' && i < 3 ) {
      document.location.hash = refs[++i];
    } else if ( direction === 'forward' && i > 0 ) {
      document.location.hash = refs[--i];
    }
    scrolling = false;
  };

  return (
    
    <div>
      {isLoading === true ? (
        <Loading />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          exit={{ opacity: 0 }}
          className="snap-container"
        >
          <Landing />
          <AboutRecharge />
          <AboutREC />
          <Gallery />
          {/* <ProShows />
          <Sponsors /> */}
        </motion.div>
      )}
    </div>
  );
};

export default Home;
