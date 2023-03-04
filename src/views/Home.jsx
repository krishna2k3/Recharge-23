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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  setTimeout(() => {
    setLoading(false);
  }, 1900);

  return (
    
    <div>
      {isLoading === true ? (
        <Loading />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          exit={{ opacity: 0 }}
          className="snap-container flex-col"
        >
          <Landing  />
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
