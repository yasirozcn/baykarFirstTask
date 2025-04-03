import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaFire, FaHome, FaDollarSign } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: "5,970",
    title: "Tranquil Haven in the Woods",
    address: "103 Wright Court Burien, WA 98168",
    beds: 4,
    baths: 3,
    tag: "Popular",
    type: "sell",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    price: "1,970",
    title: "Serene Retreat by the Lake",
    address: "1964 Jehovah Drive, VA 22408",
    beds: 3,
    baths: 2,
    tag: "New Listing",
    type: "rent",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    price: "3,450",
    title: "Charming Cottage in the Meadow",
    address: "1508 Centennial Farm Road Harlan, 51537",
    beds: 4,
    baths: 4,
    tag: "Discounted Price",
    type: "sell",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    price: "2,389",
    title: "Grand Estate with Lake View",
    address: "103 Wright Court, NY 10001",
    beds: 4,
    baths: 3,
    tag: "Popular",
    type: "rent",
  },
];

const LatestProperties = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredProperties = properties.filter((property) =>
    activeFilter === "all" ? true : property.type === activeFilter
  );

  return (
    <div className="w-full px-4 md:px-[140px] py-12 md:py-24 overflow-hidden">
      <div className="flex flex-col items-start">
        <span className="text-[#4B0082] text-sm font-medium mb-2">
          CHECKOUT OUR NEW
        </span>
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-[32px] md:text-[42px] font-bold mb-4 leading-[1.2]">
              Latest Listed Properties
            </h2>
            <p className="text-gray-600 text-base mb-6 md:mb-0">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full font-medium ${
                activeFilter === "all"
                  ? "bg-[#4B0082] text-white"
                  : "border border-[#4B0082] text-[#4B0082]"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("sell")}
              className={`px-6 py-2 rounded-full font-medium ${
                activeFilter === "sell"
                  ? "bg-[#4B0082] text-white"
                  : "border border-[#4B0082] text-[#4B0082]"
              }`}
            >
              Sell
            </button>
            <button
              onClick={() => setActiveFilter("rent")}
              className={`px-6 py-2 rounded-full font-medium ${
                activeFilter === "rent"
                  ? "bg-[#4B0082] text-white"
                  : "border border-[#4B0082] text-[#4B0082]"
              }`}
            >
              Rent
            </button>
          </div>
        </div>

        <div className="w-full md:-mr-[140px]">
          {/* Desktop View */}
          <div className="hidden md:block">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={32}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2.2,
                },
                1024: {
                  slidesPerView: 3.5,
                },
              }}
              navigation={false}
              pagination={false}
              className="!overflow-visible"
            >
              {filteredProperties.map((property) => (
                <SwiperSlide key={property.id}>
                  <PropertyCard property={property} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mobile View */}
          <div className="flex flex-col gap-6 md:hidden">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
            <button className="w-full px-8 py-3 rounded-full border border-[#4B0082] text-[#4B0082] font-medium hover:bg-[#4B0082] hover:text-white transition-all duration-300">
              View more properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyCard = ({ property }) => (
  <div className="group hover:shadow-xl transition-all duration-300">
    <div className="relative h-[260px] md:h-[220px] rounded-[32px] overflow-hidden mb-6">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4">
        <span
          className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md flex items-center gap-2 ${
            property.tag === "Popular"
              ? "bg-[#FFE1E1] text-red-500 border border-red-100"
              : property.tag === "New Listing"
              ? "bg-[#D7EEFF] text-blue-500 border border-blue-100"
              : "bg-[#F1FFF1] text-green-500 border border-green-100"
          }`}
        >
          {property.tag === "Popular" && <FaFire />}
          {property.tag === "New Listing" && <FaHome />}
          {property.tag === "Discounted Price" && <FaDollarSign />}
          {property.tag}
        </span>
      </div>
    </div>
    <div>
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-xl font-bold text-[#4B0082]">$</span>
        <span className="text-2xl font-bold text-[#4B0082]">
          {property.price}
        </span>
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900">{property.title}</h3>
      <p className="text-gray-500 text-sm mb-4 truncate">{property.address}</p>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#4B0082]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
          <span className="text-sm text-gray-500">{property.beds} Beds</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#4B0082]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm text-gray-500">{property.baths} Bath</span>
        </div>
      </div>
    </div>
  </div>
);

export default LatestProperties;
