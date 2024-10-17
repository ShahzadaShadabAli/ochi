import About from "./components/About";
import Eyes from "./components/Eyes";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import MiniCards from "./components/MiniCards";
import Navbar from "./components/Navbar";
import LocomotiveScroll from 'locomotive-scroll';
import Review from "./components/Review";

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full text-white bg-zinc-900">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <FeaturedProjects />
        <Review />
        <MiniCards />
        <Footer />
      </div>
    </>
  );
}

export default App;
