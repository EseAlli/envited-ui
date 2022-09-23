import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Event from "./pages/Event";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/event" element={<Event />} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
