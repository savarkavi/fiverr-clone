import { AiOutlineSearch } from "react-icons/ai";

const Featured = () => {
  return (
    <div className="h-[630px] flex  gap-[150px] items-center overflow-hidden max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-12">
        <h2 className="text-5xl text-white font-bold max-w-[700px] leading-snug">
          Find the right <span className="italic font-light">freelance</span>{" "}
          service, right away
        </h2>
        <div className="relative w-[600px] ">
          <input
            type="text"
            placeholder="What service are you looking for?"
            className="px-2 py-3 border w-full border-black outline-none text-left"
          />
          <div className="bg-green-500 border border-black p-2 h-full w-12 flex justify-center items-center absolute right-0 top-0 cursor-pointer">
            <AiOutlineSearch className="text-white text-lg" />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="text-white">Popular:</span>
          <div className="text-white px-3 py-1 border-2 rounded-full border-white text-sm cursor-pointer hover:bg-white hover:text-black transition-all">
            Website Design
          </div>
          <div className="text-white px-3 py-1 border-2 rounded-full border-white text-sm cursor-pointer hover:bg-white hover:text-black transition-all">
            WordPress
          </div>
          <div className="text-white px-3 py-1 border-2 rounded-full border-white text-sm cursor-pointer hover:bg-white hover:text-black transition-all">
            Logo Design
          </div>
          <div className="text-white px-3 py-1 border-2 rounded-full border-white text-sm cursor-pointer hover:bg-white hover:text-black transition-all">
            AI Services
          </div>
        </div>
      </div>
      {/* <div>
        <img
          src="../../public/man.png"
          alt="featured img"
          className="w-[800px]"
        />
      </div> */}
    </div>
  );
};

export default Featured;
