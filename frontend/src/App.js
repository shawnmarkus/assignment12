import HomePage from "./component/HomePage";
import Header from "./component/Header";
import VideoPlayerPage from "./component/VideoPlayer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/play/:videoId/:idx" element={<VideoPlayerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
