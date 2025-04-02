import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#4361EE]/10 w-full">
      <div className="w-full px-4 md:px-[140px] py-12 md:py-24">
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-[#4B0082] rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold">Rezilla</span>
            </div>
            <p className="text-gray-600">
              Lorem ipsum has been the industry standard dummy text
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">+90123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">mail@mail.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="flex flex-col gap-4">
              {[
                "Home",
                "About",
                "Listings",
                "Services",
                "Blogs",
                "Become a Agent",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 hover:text-[#4B0082] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">Discovery</h3>
            <div className="flex flex-col gap-4">
              {["Canada", "United States", "Germany", "Africa", "India"].map(
                (location) => (
                  <a
                    key={location}
                    href="#"
                    className="text-gray-600 hover:text-[#4B0082] transition-colors"
                  >
                    {location}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">Subscribe to our Newsletter!</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4B0082] pr-14"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#4B0082] rounded-full flex items-center justify-center text-white">
                <IoIosArrowForward size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-medium">Follow Us on</span>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-[#4B0082] hover:text-[#4B0082]/80 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-[#4B0082] hover:text-[#4B0082]/80 transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-[#4B0082] hover:text-[#4B0082]/80 transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-[#4B0082] rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold">Logo</span>
            </div>
            <p className="text-gray-600">
              Lorem Ipsum has been the industry's standard dummy
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-gray-600">+90123 45 67</span>
              <span className="text-gray-600">mail@mail.com</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h3 className="text-xl font-bold">Subscribe to our Newsletter!</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4B0082] pr-14"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#4B0082] rounded-full flex items-center justify-center text-white">
                <IoIosArrowForward size={20} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-medium">Follow Us on</span>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[#4B0082] hover:text-[#4B0082]/80 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-[#4B0082] hover:text-[#4B0082]/80 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-[#4B0082] hover:text-[#4B0082]/80 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-black text-white py-4">
        <div className="px-4 md:px-[140px] flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© Company – All rights reserved</span>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
