import { AiOutlineHome, AiFillStar } from "react-icons/ai";
import { BiTime, BiRefresh } from "react-icons/bi";
import AboutSeller from "../components/AboutSeller";
import Reviews from "../components/Reviews";
import request from "../utils/request";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Gig = () => {
  const { id } = useParams();
  const [gig, setGig] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gigResponse = await request.get(`gigs/${id}`);
        setGig(gigResponse.data);

        if (gigResponse.data.userId) {
          const userResponse = await request.get(
            `users/${gigResponse.data.userId}`
          );
          setUser(userResponse.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="mt-[100px] flex justify-center">
      {
        <div className="max-w-[1440px] mx-auto flex justify-between gap-8 w-full">
          <div className="flex flex-col gap-8">
            <div className="flex gap-2 items-center text-lg">
              <AiOutlineHome className="cursor-pointer" />
              <span className="cursor-pointer capitalize">
                / {gig?.category.replace("/", " & ")}
              </span>
            </div>
            <h3 className="text-4xl font-bold">{gig?.title}</h3>
            <div className="flex items-center gap-4">
              <img
                src="/gigImgPP.jpeg"
                alt="profile picture"
                className="rounded-full w-20 h-20"
              />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold hover:underline cursor-pointer">
                    {user?.username}
                  </h3>
                  {
                    <span className="text-lg text-gray-500 hover:underline cursor-pointer">
                      @{user?.username}
                    </span>
                  }
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <AiFillStar className="text-lg" />
                    <span className="text-lg">
                      {" "}
                      {!isNaN(gig?.totalStars / gig?.starNumber) &&
                        Math.round(gig?.totalStars / gig?.starNumber)}{" "}
                      |
                    </span>
                  </div>
                  <span className="text-lg text-gray-500">
                    ({gig?.starNumber})
                  </span>
                </div>
              </div>
            </div>
            {gig?.images && (
              <div className="mt-[30px]">
                <Carousel
                  className="w-[600px]"
                  showStatus={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                >
                  <div>
                    <img src={gig?.cover} alt="gig photo" />
                  </div>
                  {gig.images.length > 0 &&
                    gig?.images?.map((image, i) => {
                      return (
                        <div key={i}>
                          <img
                            src={image}
                            alt="image"
                            className="h-[500px] object-cover"
                          />
                        </div>
                      );
                    })}
                </Carousel>
              </div>
            )}
            <div className="mt-[30px]">
              <h3 className="text-2xl font-bold">About the gig</h3>
              <p className="max-w-[650px] mt-6 text-lg">{gig?.desc}</p>
            </div>
            <AboutSeller user={user} gig={gig} />
            <h2 className="text-2xl font-bold mt-[30px]">Reviews</h2>
            <Reviews gigId={id} />
          </div>
          <div className="p-10">
            <div className="border border-black p-4 flex flex-col gap-4 w-[500px] sticky top-36">
              <div className="flex justify-between items-center font-bold text-xl">
                <span>{gig?.shortDesc}</span>
                <span>₹{gig?.price}</span>
              </div>
              <p className="text-gray-500">{gig?.shortDesc}</p>
              <div className="flex items-center gap-4 text-lg font-bold text-gray-600">
                <div className="flex items-center gap-2">
                  <BiTime />
                  <span>{gig?.delivery} Days Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <BiRefresh />
                  <span>{gig?.revision} Revision</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 font-bold">
                {gig?.features?.map((feature, i) => {
                  return <span key={i}>✓ {feature}</span>;
                })}
              </div>
              <Link to={`/payment/${id}`}>
                <button className="bg-black text-white px-3 py-2 mt-4">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Gig;
