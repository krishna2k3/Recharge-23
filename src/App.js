import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Events from "./views/Events";
import AboutPage from "./views/AboutPage";

const App = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/aboutpage" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
