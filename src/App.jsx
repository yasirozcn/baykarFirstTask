import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoAreWe from "./components/WhoAreWe";
import LatestProperties from "./components/LatestProperties";
import LatestBlogs from "./components/LatestBlogs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-full min-h-screen bg-[#ECF0F3]">
      <Navbar />
      <Hero />
      <WhoAreWe />
      <LatestProperties />
      <LatestBlogs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
