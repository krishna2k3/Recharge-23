import About from "../components/Home/About";
import Landing from "../components/Home/Landing";
import ProShows from "../components/Home/ProShows";
import Sponsors from "../components/Home/Sponsors";
import Loading from "./Loading";
import { useEffect } from "react";
import { motion } from "framer-motion";
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
        >
          <Landing />
          <About />
          <ProShows />
          <Sponsors />
        </motion.div>
      )}
    </div>
  );
};

export default Home;
