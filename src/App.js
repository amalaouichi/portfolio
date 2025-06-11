import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Divider from "./components/Divider/Divider";
import ProjectDetail from "./components/Projects/ProjectDetail";

function Home() {
    return (
        <main>
            <About />
            <Divider />
            <Skills />
            <Divider />
            <Projects />
            <Divider />
            <Contact />
        </main>
    );
}

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
