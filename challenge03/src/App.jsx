import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MusicPlayer from "./pages/MusicPlayer";
import BrowserHistory from "./pages/BrowserHistory";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Reproductor</Link>
        <Link to="/history">Historial</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MusicPlayer />} />
        <Route path="/history" element={<BrowserHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;