import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import React from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
const testimonials = [
  {
    id: 1,
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    author: "Barbara D. Smith",
    rating: 4,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: 2,
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    author: "John K. Miller",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
  },
  {
    id: 3,
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    author: "John K. Miller",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="w-full px-4 md:px-[140px] py-12 md:py-24">
      <div className="absolute left-1/2 -translate-x-1/3 w-12 h-12 bg-gradient-to-b from-[#4362ee7a] to-[rgba(67, 97, 238, 0)] rounded-full z-1"></div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="flex flex-col md:max-w-md">
          <span className="text-[#4361EE] text-sm font-medium font-poppins mb-2 tracking-widest">
            TESTIMONIALS
          </span>
          <div className="mb-8">
            <h2 className="text-[32px] md:text-[42px] font-bold font-poppins mb-4">
              Look What Our Customers Say!
            </h2>
            <p className="text-gray-600 font-poppins">
              Fusce venenatis tellus a felis scelerisque, non pulvinar est
              pellentesque.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="testimonials-prev w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-[#4361EE]">
              <GrLinkPrevious className="text-[#4361EE] text-2xl" />
            </button>
            <button className="testimonials-next w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-[#4361EE]">
              <GrLinkNext className="text-[#4361EE] text-2xl" />
            </button>
          </div>
        </div>

        <div className="relative flex-1">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".testimonials-next",
              prevEl: ".testimonials-prev",
            }}
            onSlideChange={handleSlideChange}
            preloadImages={false}
            watchSlidesProgress={true}
            preventInteractionOnTransition={true}
            updateOnWindowResize={true}
            observer={true}
            observeParents={true}
            className="!static w-full md:w-[540px]"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="p-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonials-pagination hidden md:flex absolute right-[40px] top-1/2 -translate-y-1/2 flex-col gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`w-[3px] h-8 transition-colors duration-300 ${
                  index === activeIndex ? "bg-black" : "bg-gray-200"
                }`}
              ></div>
            ))}
          </div>
          <div className="flex md:hidden justify-center mt-6 gap-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`w-12 h-[2px] transition-colors duration-300 ${
                  index === activeIndex ? "bg-black" : "bg-gray-200"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-[32px] p-6 md:p-12 shadow-[0px_4px_12px_rgba(0,0,0,0.08)] w-full md:w-[500px] h-auto md:h-[385px] flex flex-col justify-between relative z-10">
    <div className="flex flex-col">
      <div className="relative mb-6">
        <div className="absolute top-8 right-8">
          <svg
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 24L16 0L32 24H0Z" fill="#FFD700" fillOpacity="0.2" />
          </svg>
        </div>
      </div>
      <p className="text-[#1A1A1A] text-base md:text-lg leading-relaxed mb-8">
        {testimonial.content}
      </p>
    </div>
    <div>
      <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
      <div className="flex items-center gap-4 md:gap-6">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
        />
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-20">
          <h3 className="font-bold text-base md:text-lg">
            {testimonial.author}
          </h3>
          <div className="flex">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 md:w-5 md:h-5 text-[#FFD700]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            {[...Array(5 - testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 md:w-5 md:h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
