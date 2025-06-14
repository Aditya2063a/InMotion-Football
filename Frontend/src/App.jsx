import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ModelDetails from "./pages/ModelDetails";
import Upload from "./pages/Upload";
import About from "./pages/About"
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Header/>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modeldetails" element={<ModelDetails />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;