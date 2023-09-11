import { works } from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/bundle";

const Work = () => {
  const renderedCards = works.map((card) => {
    return (
      <SwiperSlide
        key={card.id}
        className="relative flex-shrink-0 bg-slate-100 rounded-lg shadow-xl "
      >
        <div className="w-[300px] flex flex-col gap-4">
          <img
            src={card.img}
            alt="card img"
            className="w-[300px] h-[250px] object-cover rounded-lg"
          />
          <div className="flex gap-3 p-4">
            <img
              src={card.pp}
              alt="profile picture"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-bold">{card.cat}</span>
              <span className="text-gray-500">{card.username}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="max-w-[1440px] mx-auto relative">
      <h2 className="text-4xl font-bold mt-24 mb-14">
        Inspiring work made on Fiverr
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={75}
        slidesPerView={4}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {renderedCards}
      </Swiper>
    </div>
  );
};

export default Work;
