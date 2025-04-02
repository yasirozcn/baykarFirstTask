const WhoAreWe = () => {
  return (
    <div className="w-full px-4 md:px-[140px] py-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-[45%] flex flex-col">
          <span className="text-[#4B0082] text-sm font-medium mb-2 block">
            WHO ARE WE
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold mb-4 leading-[1.2]">
            Assisting individuals in locating the appropriate real estate.
          </h2>
          <p className="text-gray-600 text-base mb-8">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it
          </p>

          <div className="space-y-4 w-full hidden md:block">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm flex items-start gap-4">
              <div className="bg-[#F8F9FF] p-2 md:p-3 rounded-xl flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6 text-[#4B0082]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#4B0082] font-medium text-sm md:text-base mb-1">
                  Lorem ipsum has been the
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm flex items-start gap-4">
              <div className="bg-[#F8F9FF] p-2 md:p-3 rounded-xl flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6 text-[#4B0082]"
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
                <h3 className="text-[#4B0082] font-medium text-sm md:text-base mb-1">
                  Lorem ipsum has been the
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[50%] relative flex gap-4 mt-8 md:mt-0 justify-center">
          <div className="w-[170px] md:w-[280px] h-[260px] md:h-[500px] rounded-[32px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
              alt="Modern House"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 -mt-10">
            <div className="w-[140px] md:w-[270px] h-[140px] md:h-[280px] rounded-[32px] overflow-hidden shadow-lg bg-white">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
                alt="Interior 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[140px] md:w-[270px] h-[100px] md:h-[180px] rounded-[32px] overflow-hidden shadow-lg bg-white relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="Interior 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#4B0082] rounded-full filter blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4 w-full md:hidden mt-8">
          <div className="bg-white rounded-2xl p-4 shadow-sm flex items-start gap-4">
            <div className="bg-[#F8F9FF] p-2 rounded-xl flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#4B0082]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[#4B0082] font-medium text-sm mb-1">
                Lorem ipsum has been the
              </h3>
              <p className="text-gray-600 text-xs">
                when an unknown printer took a galley
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm flex items-start gap-4">
            <div className="bg-[#F8F9FF] p-2 rounded-xl flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#4B0082]"
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
              <h3 className="text-[#4B0082] font-medium text-sm mb-1">
                Lorem ipsum has been the
              </h3>
              <p className="text-gray-600 text-xs">
                when an unknown printer took a galley
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
