import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <SocialLinks />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;
