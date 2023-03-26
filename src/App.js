import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import NoMatch from "./pages/NoMatch";
import Header from "./pages/Header";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

