
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLink from "./components/socialLinks"
import About from "./components/About"
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <SocialLink />
    </>
  );
}

export default App;
