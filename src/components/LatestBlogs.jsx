import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
const blogs = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91",
    date: { day: "28", dayName: "Tue" },
    title: "Top 10 Home Buying Mistakes to Avoid",
    description:
      "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    date: { day: "08", dayName: "Mon" },
    title: "How to Stage Your Home for a Quick Sale",
    description:
      "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    date: { day: "26", dayName: "Wed" },
    title: "5 Tips for First-Time Home Sellers",
    description:
      "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    date: { day: "08", dayName: "Mon" },
    title: "How to Stage Your Home for a Quick Sale",
    description:
      "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
  },
];

const LatestBlogs = () => {
  return (
    <section className="w-full bg-[#3A0CA3] px-4 md:px-[140px] py-12 md:py-24">
      <div className="flex flex-col items-center">
        <span className="text-white/80 text-sm font-medium mb-2">
          WHAT'S TRENDING
        </span>
        <h2 className="text-[32px] md:text-[42px] font-bold mb-12 text-white text-center md:text-left">
          Latest Blogs & Posts
        </h2>

        {/* Desktop View */}
        <div className="hidden md:block w-full">
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={3}
              loop={true}
              navigation={{
                nextEl: ".blogs-next",
                prevEl: ".blogs-prev",
              }}
              pagination={{
                el: ".blogs-pagination",
                clickable: true,
                type: "bullets",
              }}
              preloadImages={false}
              watchSlidesProgress={true}
              preventInteractionOnTransition={true}
              className="!static !pb-32 [&_.swiper-wrapper]:!flex"
            >
              {blogs.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <BlogCard blog={blog} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 w-full">
              <div className="flex items-center justify-center w-2/3">
                <button className="blogs-prev w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors mr-[calc(33.333%-70px)] z-10">
                  <GrLinkPrevious className="text-[#4B0082] text-2xl" />
                </button>
                <button className="blogs-next w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors ml-[calc(33.333%-70px)] z-10">
                  <GrLinkNext className="text-[#4B0082] text-2xl" />
                </button>
              </div>
              <div className="blogs-pagination flex gap-4 !w-1/3 [&_.swiper-pagination-bullet]:!w-16 [&_.swiper-pagination-bullet]:!h-[2px] [&_.swiper-pagination-bullet]:!rounded-none [&_.swiper-pagination-bullet]:!bg-white/40 [&_.swiper-pagination-bullet]:!mx-1 [&_.swiper-pagination-bullet-active]:![background:rgb(255,255,255)]"></div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-6 md:hidden w-full">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
          <button className="w-52 px-4 py-3 mt-16 mb-24 rounded-full border bg-white text-[#3A0CA3] font-medium hover:bg-white/10 transition-all duration-300">
            View more blogs
          </button>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ blog }) => (
  <article className="group cursor-pointer">
    <div className="relative h-[340px] rounded-[32px] overflow-hidden mb-6">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-[-8px] left-10 bg-white rounded-2xl px-4 pt-4 pb-2 flex flex-col items-center">
        <span className="text-[#4B0082] text-xl font-bold leading-none">
          {blog.date.day}
        </span>
        <span className="text-gray-500 text-sm mt-1">{blog.date.dayName}</span>
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white/80 transition-colors">
      {blog.title}
    </h3>
    <p className="text-white/60 text-sm leading-relaxed">{blog.description}</p>
  </article>
);

export default LatestBlogs;
