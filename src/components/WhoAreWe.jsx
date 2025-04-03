const WhoAreWe = () => {
  return (
    <section className="w-full bg-white px-4 md:px-[140px] py-12 md:py-24 relative z-[5] overflow-hidden">
      <div className="absolute bottom-[120px] right-[280px] w-[60px] h-[60px] rounded-full bg-gradient-to-b from-[rgba(67,97,238,.4)] to-[rgba(67,97,238,0)] z-[1]" />

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-[45%] flex flex-col">
          <span className="text-[#4361EE] font-medium mb-4 block tracking-wide">
            WHO ARE WE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Assisting individuals in locating the appropriate real estate.
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-12">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it
          </p>

          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-[#4361EE]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#4361EE] text-lg font-medium mb-2">
                    Lorem ipsum has been the
                  </h3>
                  <p className="text-gray-600">
                    when an unknown printer took a galley
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-[#4361EE]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#4361EE] text-lg font-medium mb-2">
                    Lorem ipsum has been the
                  </h3>
                  <p className="text-gray-600">
                    when an unknown printer took a galley
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[45%] flex gap-4">
          <div className="w-[65%] h-[500px] rounded-[32px] mt-12 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="Modern House"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full h-[240px] rounded-[32px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[240px] rounded-[32px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
