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
            className="!static w-full md:w-[500px]"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="!p-4">
                <TestimonialCard testimonial={testimonial} />
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
  <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[10px_10px_30px_0px_rgba(0,0,0,0.1),0px_0px_0px_1px_rgba(0,0,0,0.05)]">
    <div className="flex flex-col">
      <div className="relative mb-6">
        <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 bg-[#E8EBFF] rounded-full -z-10"></div>
        <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 bg-[#FFF4CC] rounded-full -z-10"></div>
      </div>
      <p className="text-[#1A1A1A] text-lg md:text-xl leading-relaxed mb-8">
        {testimonial.content}
      </p>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-medium text-[#1A1A1A]">
            {testimonial.author}
          </span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < testimonial.rating
                    ? "text-yellow-400"
                    : "text-gray-200"
                }`}
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
