import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import {Poke} from "./pages/Poke";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Poke/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;