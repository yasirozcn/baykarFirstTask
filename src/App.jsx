import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoAreWe from "./components/WhoAreWe";
import LatestProperties from "./components/LatestProperties";
import LatestBlogs from "./components/LatestBlogs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-white" id="app-container">
      <Navbar />
      <div id="home-section">
        <Hero />
      </div>
      <div id="about-section">
        <WhoAreWe />
      </div>
      <div id="listings-section">
        <LatestProperties />
      </div>
      <div id="services-section">
        <LatestBlogs />
      </div>
      <div id="blogs-section">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}

export default App;
