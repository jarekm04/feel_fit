import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/HomePage/Navbar";
import Home from "./components/HomePage/Home";
import About from "./components/HomePage/About";
import Packages from "./components/HomePage/Packages";
import Blog from "./components/HomePage/Blog";
import Contact from "./components/HomePage/Contact";

function App() {

  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/packages" element={<Packages/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
