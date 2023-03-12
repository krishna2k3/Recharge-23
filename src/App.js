import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/Home";
import Events from "./views/Events";
import About from "./components/AboutPage/About";
import Aboutrechargepage from "./components/AboutPage/Aboutrechargepage";
import { useEffect, useState } from "react";
import EventDescription from "./views/EventDescription";
import EventList from "./views/EventList";
import Footer from "./components/Common/Footer";
import BuyTickets from "./views/BuyTickets";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [path, setPath] = useState("/");
  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [path, isLoading, location.pathname]);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home isLoading={isLoading} setLoading={setLoading} />}
        />
        <Route path="/events" element={<Events />} />
        <Route path="/events/eventslist" element={<EventList />} />
        <Route path="/eventdescription" element={<EventDescription />} />
        <Route path="/about-rec" element={<About />} />
        <Route path="/about-recharge" element={<Aboutrechargepage />} />
        <Route path="/buytickets" element={<BuyTickets />} />
      </Routes>
      {isLoading === true ? <div></div> :<Footer path={path} />}
    </div>
  );
};

export default App;
