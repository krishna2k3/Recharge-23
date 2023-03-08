import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Events from "./views/Events";
import About from "./components/AboutPage/About";
import Aboutrechargepage from "./components/AboutPage/Aboutrechargepage";
import { useState } from "react";
import EventDescription from "./views/EventDescription";
import EventList from "./views/EventList";
import Footer from "./components/Common/Footer";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home isLoading={isLoading} setLoading={setLoading} />}
        />
        <Route path="/events" element={<Events />} />
        <Route path="/events/eventslist" element={<EventList />} />
        <Route path="/eventdescription" element={<EventDescription />} />
        <Route path="/aboutpage" element={<About/>} />
        <Route path="/aboutrechargepage" element={<Aboutrechargepage/>} />
      </Routes>
      {isLoading === true ? <div></div> : <Footer />}
    </BrowserRouter>
  );
};

export default App;
