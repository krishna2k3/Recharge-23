import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Events from "./views/Events";

const App = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
