import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("sale");
  const [propertyType, setPropertyType] = useState("");
  const [rooms, setRooms] = useState("");

  const dummyImages = [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4",
  ];

  return (
    <section className="relative w-full min-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[1440px] h-[900px] rounded-br-[800px] rounded-bl-[800px] bg-gradient-to-b from-[rgba(76,201,240,0)] to-[rgba(67,97,238,.3)] z-[1]" />
      <div className="absolute top-[354px] left-1/2 md:left-[720px] -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-gradient-to-b from-[#4361EE] to-[rgba(67, 97, 238, 0)] z-[2]" />
      <div className="absolute bottom-[-36px] left-9 w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[rgba(67,97,238,.4)] to-[rgba(67,97,238,0)] z-[999]" />

      <div className="w-full bg-white min-h-screen relative overflow-y-auto">
        <div className="w-full px-4 md:px-[140px] py-8 md:py-24 relative z-[10]">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-[140px] mb-8 md:mb-16">
            <div className="w-full md:w-[580px] z-10">
              <div className="mb-8 text-left">
                <span className="text-[#4361EE] font-medium mb-4 block tracking-wide">
                  REAL ESTATE
                </span>
                <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">
                  Find a perfect
                  <br />
                  home you love..!
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley
                </p>
              </div>

              <div className="slider-container relative w-full md:w-[580px] mb-8 md:mb-0">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true,
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    bulletClass: "swiper-pagination-bullet",
                  }}
                  className="w-full md:w-[580px] h-[250px] md:h-[350px] rounded-2xl overflow-hidden"
                >
                  {dummyImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-button-prev -left-5 hidden md:flex"></div>
                <div className="swiper-button-next -right-5 hidden md:flex"></div>
                <div className="swiper-pagination w-full md:w-[580px] flex justify-between mt-6"></div>
              </div>
            </div>

            <div className="w-full md:w-[420px] bg-white rounded-2xl p-6 md:p-8 shadow-lg h-auto md:h-[580px]">
              <div className="flex mb-6 md:mb-8 relative">
                <button
                  className={`flex-1 py-3 md:py-4 text-base md:text-lg font-medium ${
                    activeTab === "sale" ? "text-[#3A0CA3]" : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("sale")}
                >
                  For Sale
                </button>
                <button
                  className={`flex-1 py-3 md:py-4 text-base md:text-lg font-medium ${
                    activeTab === "rent" ? "text-[#4B0082]" : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("rent")}
                >
                  For Rent
                </button>
                <div
                  className="absolute bottom-0 h-0.5 bg-[#4B0082] transition-all duration-300"
                  style={{
                    width: "50%",
                    left: activeTab === "sale" ? "0" : "50%",
                  }}
                />
                <div className="absolute bottom-0 w-full h-[1px] bg-gray-200" />
              </div>

              <div className="space-y-6 md:space-y-8 mt-8 md:mt-12">
                <input
                  type="text"
                  placeholder="New York, San Francisco, etc"
                  className="w-full p-3 md:p-4 bg-[#F8F9FF] rounded-xl border-none focus:ring-2 focus:ring-[#4B0082] placeholder-gray-400 text-sm md:text-base"
                />

                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full p-3 md:p-4 bg-[#F8F9FF] rounded-xl border-none focus:ring-2 focus:ring-[#4B0082] text-gray-400 text-sm md:text-base"
                >
                  <option value="">Select Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                </select>

                <select
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="w-full p-3 md:p-4 bg-[#F8F9FF] rounded-xl border-none focus:ring-2 focus:ring-[#4B0082] text-gray-400 text-sm md:text-base"
                >
                  <option value="">Select Rooms</option>
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                  <option value="4">4+ Rooms</option>
                </select>

                <button className="text-[#4B0082] flex items-center font-medium !my-2 md:!my-4 text-sm md:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Advance Search
                </button>

                <button className="w-full bg-[#3A0CA3] text-white py-3 md:py-4 rounded-full hover:bg-[#3B0062] flex items-center justify-center gap-2 !mt-8 md:!mt-14 text-sm md:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24">
            <div className="flex items-center gap-3 bg-white rounded-full p-3 md:p-4 w-full md:w-auto">
              <div className="flex -space-x-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?img=${i + 1}`}
                      alt={`User ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-[#4B0082] border-2 border-white flex items-center justify-center text-white text-xs">
                  +
                </div>
              </div>
              <div>
                <p className="font-bold text-base md:text-xl">72k+</p>
                <p className="text-xs md:text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-6 md:px-8 py-3 md:py-4 w-full md:w-auto">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gray-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518780664697-55e3ad937233"
                  alt="House"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-base md:text-xl">200+</p>
                <p className="text-xs md:text-sm text-gray-500">
                  New Listings Everyday!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
