/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import request from "../utils/request";
import { useQuery } from "react-query";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const GigCard = ({ gig }) => {
  const { data } = useQuery(`${gig.userId}`, async () => {
    const { data } = await request.get(`users/${gig.userId}`);
    return data;
  });

  return (
    <Link
      to={`/gig/${gig._id}`}
      className="flex flex-col gap-4 bg-slate-100 rounded-lg shadow-lg"
    >
      <img src={gig.cover} alt="gig img" className="w-[335px] rounded-lg" />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex gap-2 items-center">
          {data?.img ? (
            <img
              src={data.img}
              alt="profile picture"
              className="rounded-full w-8  h-8"
            />
          ) : (
            <CgProfile className="w-8 h-8" />
          )}
          <span className="font-bold">{data?.username}</span>
        </div>
        <p className="max-w-[250px]">{gig.title}</p>
        <div className="flex gap-2 items-center">
          <AiFillStar />
          <span>
            {!isNaN(gig.totalStars / gig.starNumber) &&
              Math.round(gig.totalStars / gig.starNumber)}
          </span>
          <span className="text-gray-500">{`(${gig.starNumber})`}</span>
        </div>
        <div className="font-bold">{`From $${gig.price}`}</div>
      </div>
    </Link>
  );
};

export default GigCard;
