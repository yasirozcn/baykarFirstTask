import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId.replace("-section", ""));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "listings", "services", "blogs"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(`${section}-section`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full" id="navbar-container">
      <div
        className="w-full bg-[#3A0CA3] text-white py-2 px-4 hidden md:block"
        id="navbar-top"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Lorem Ipsum has been the industry's standard dummy
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +90123 45 67
            </span>
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              mail@mail.com
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4 px-4 bg-white" id="navbar-main">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home-section")}
              className={`${
                activeSection === "home"
                  ? "bg-[#F0F0FF] text-[#4B0082]"
                  : "text-gray-600 hover:text-[#4B0082]"
              } px-4 py-2 rounded-full`}
              id="nav-home-btn"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about-section")}
              className={`${
                activeSection === "about"
                  ? "bg-[#F0F0FF] text-[#4B0082]"
                  : "text-gray-600 hover:text-[#4B0082]"
              } px-4 py-2 rounded-full`}
              id="nav-about-btn"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("listings-section")}
              className={`${
                activeSection === "listings"
                  ? "bg-[#F0F0FF] text-[#4B0082]"
                  : "text-gray-600 hover:text-[#4B0082]"
              } px-4 py-2 rounded-full`}
              id="nav-listings-btn"
            >
              Listings
            </button>
            <button
              onClick={() => scrollToSection("services-section")}
              className={`${
                activeSection === "services"
                  ? "bg-[#F0F0FF] text-[#4B0082]"
                  : "text-gray-600 hover:text-[#4B0082]"
              } px-4 py-2 rounded-full`}
              id="nav-services-btn"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("blogs-section")}
              className={`${
                activeSection === "blogs"
                  ? "bg-[#F0F0FF] text-[#4B0082]"
                  : "text-gray-600 hover:text-[#4B0082]"
              } px-4 py-2 rounded-full`}
              id="nav-blogs-btn"
            >
              Blogs
            </button>
          </div>

          <div className="flex items-center">
            <div className="bg-[#3A0CA3] p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <span className="ml-2 text-xl font-bold">Logo</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-[#4B0082]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Login/Register
            </button>
            <button className="flex items-center gap-2 bg-[#3A0CA3] text-white px-6 py-2 rounded-full hover:bg-[#3B0062]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add Listing
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t" id="mobile-menu">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home-section")}
                className={`${
                  activeSection === "home"
                    ? "bg-[#F0F0FF] text-[#4B0082]"
                    : "text-gray-600 hover:text-[#4B0082]"
                } px-4 py-2 rounded-full w-full text-left`}
                id="mobile-nav-home-btn"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about-section")}
                className={`${
                  activeSection === "about"
                    ? "bg-[#F0F0FF] text-[#4B0082]"
                    : "text-gray-600 hover:text-[#4B0082]"
                } px-4 py-2 rounded-full w-full text-left`}
                id="mobile-nav-about-btn"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("listings-section")}
                className={`${
                  activeSection === "listings"
                    ? "bg-[#F0F0FF] text-[#4B0082]"
                    : "text-gray-600 hover:text-[#4B0082]"
                } px-4 py-2 rounded-full w-full text-left`}
                id="mobile-nav-listings-btn"
              >
                Listings
              </button>
              <button
                onClick={() => scrollToSection("services-section")}
                className={`${
                  activeSection === "services"
                    ? "bg-[#F0F0FF] text-[#4B0082]"
                    : "text-gray-600 hover:text-[#4B0082]"
                } px-4 py-2 rounded-full w-full text-left`}
                id="mobile-nav-services-btn"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("blogs-section")}
                className={`${
                  activeSection === "blogs"
                    ? "bg-[#F0F0FF] text-[#4B0082]"
                    : "text-gray-600 hover:text-[#4B0082]"
                } px-4 py-2 rounded-full w-full text-left`}
                id="mobile-nav-blogs-btn"
              >
                Blogs
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-[#4B0082] px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                Login/Register
              </button>
              <button className="flex items-center gap-2 bg-[#4B0082] text-white px-6 py-2 rounded-full hover:bg-[#3B0062] mx-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add Listing
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
