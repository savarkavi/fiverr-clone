/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";

const AboutSeller = ({ user, gig }) => {
  return (
    <div className="mt-[30px] flex flex-col gap-8">
      <h2 className="text-2xl font-bold">About the seller</h2>
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
            <span className="text-lg text-gray-500 hover:underline cursor-pointer">
              @{user?.username}
            </span>
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
            <span className="text-lg text-gray-500">({gig?.starNumber})</span>{" "}
          </div>
        </div>
      </div>
      <button className="border border-black px-3 py-2">Contact me</button>
      <div className="border border-black p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 text-xl">
              <span className="text-gray-500">From</span>
              <span className="font-bold">{user?.country}</span>
            </div>
            <div className="flex flex-col gap-1 text-xl">
              <span className="text-gray-500">Member since</span>
              <span className="font-bold">March 2023</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 text-xl">
              <span className="text-gray-500">Avg. response time</span>
              <span className="font-bold">1 hour</span>
            </div>
            <div className="flex flex-col gap-1 text-xl">
              <span className="text-gray-500">Last delivery</span>
              <span className="font-bold">6 days</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <span className="text-xl font-bold">Bio</span>
          <p className="mt-2">{user?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSeller;
