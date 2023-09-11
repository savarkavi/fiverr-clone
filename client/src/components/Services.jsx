import { serviceCards } from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/bundle";
import { Link } from "react-router-dom";

const Services = () => {
  const renderedCards = serviceCards.map((card) => {
    return (
      <SwiperSlide key={card.id} className="relative flex-shrink-0">
        <Link to={`gigs?category=${card.cat}`}>
          <img src={card.img} alt="card img" />
          <p className="absolute top-6 left-2 text-white">{card.desc}</p>
          <h3 className="absolute top-12   left-2 text-white text-2xl font-bold">
            {card.title}
          </h3>
        </Link>
      </SwiperSlide>
    );
  });

  return (
    <div className="max-w-[1440px] mx-auto relative">
      <h2 className="text-4xl font-bold my-12">Popular Services</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {renderedCards}
      </Swiper>
    </div>
  );
};

export default Services;
