import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <SocialLinks />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
