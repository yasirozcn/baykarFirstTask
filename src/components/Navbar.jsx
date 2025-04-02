import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Üst Banner */}
      <div className="w-full bg-[#4B0082] text-white py-2 px-4 hidden md:block">
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

      {/* Ana Navbar */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          {/* Desktop Menü */}
          <div className="hidden md:flex items-center gap-8">
            <button className="bg-[#F0F0FF] px-4 py-2 rounded-full text-[#4B0082]">
              Home
            </button>
            <button className="text-gray-600 hover:text-[#4B0082]">
              About
            </button>
            <button className="text-gray-600 hover:text-[#4B0082]">
              Listings
            </button>
            <button className="text-gray-600 hover:text-[#4B0082]">
              Services
            </button>
            <button className="text-gray-600 hover:text-[#4B0082]">
              Blogs
            </button>
          </div>

          {/* Logo - Her zaman görünür */}
          <div className="flex items-center">
            <div className="bg-[#4B0082] p-4 rounded-full">
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

          {/* Desktop Sağ Butonlar */}
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
            <button className="flex items-center gap-2 bg-[#4B0082] text-white px-6 py-2 rounded-full hover:bg-[#3B0062]">
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

          {/* Mobil Hamburger Menü Butonu */}
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
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col gap-4">
              <button className="bg-[#F0F0FF] px-4 py-2 rounded-full text-[#4B0082] w-full text-left">
                Home
              </button>
              <button className="text-gray-600 hover:text-[#4B0082] px-4 py-2">
                About
              </button>
              <button className="text-gray-600 hover:text-[#4B0082] px-4 py-2">
                Listings
              </button>
              <button className="text-gray-600 hover:text-[#4B0082] px-4 py-2">
                Services
              </button>
              <button className="text-gray-600 hover:text-[#4B0082] px-4 py-2">
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
