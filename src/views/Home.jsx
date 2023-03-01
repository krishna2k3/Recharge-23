import Loading from "./Loading";
import Landing from "../components/Home/Landing";
import Gallery from "../components/Home/Gallery";
import AboutRecharge from "../components/Home/AboutRecharge";
import ProShows from "../components/Home/ProShows";
import Sponsors from "../components/Home/Sponsors";
import { useEffect,useState } from "react";
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

  const [activeComponent, setActiveComponent] = useState(1);

  const scrollToComponent = (direction) => {
    if (direction === 'forward') {
      setActiveComponent(activeComponent + 1);
    } else if (direction === 'backward') {
      setActiveComponent(activeComponent - 1);
    }
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
          onWheel={(event) => {
            const direction = event.deltaY > 0 ? 'forward' : 'backward';
            scrollToComponent(direction);
          }}
        >
          {activeComponent === 1 && <Landing />}
          {activeComponent === 2 && <AboutRecharge />}
          {activeComponent === 3 && <AboutREC />}
          {activeComponent === 4 && <Gallery />}
                   
          {/* <ProShows />
          <Sponsors /> */}
        </motion.div>
      )}
    </div>
  );
};

export default Home;
