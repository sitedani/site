import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import VideoPage from "./routes/Video";
import Textos from "./routes/Textos";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="video" element={<VideoPage />} />
        <Route path="texto" element={<Textos />} />
      </Route>
    </Routes>
  );
}

export default App;
