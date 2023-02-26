import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Events from "./views/Events";
import AboutPage from "./views/AboutPage";
import { useState } from "react";

const App = ()=> {
  const [isLoading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} setLoading={setLoading}/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/aboutpage" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
