/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import request from "../utils/request";

const Reviews = ({ gigId }) => {
  const [reviews, setReviews] = useState(null);
  const [reviewUser, setReviewUser] = useState(null);
  const [reviewContent, setReviewContent] = useState("");
  const [rating, setRating] = useState(0);

  const fetchReviews = useCallback(async () => {
    try {
      const reviewResponse = await request.get(`reviews/${gigId}`);
      setReviews(reviewResponse.data);

      const reviewUserPromises = reviewResponse.data.map(async (review) => {
        if (review.userId) {
          const userResponse = await request.get(`users/${review?.userId}`);
          return userResponse.data;
        }
        return null;
      });

      const reviewUsers = await Promise.all(reviewUserPromises);
      setReviewUser(reviewUsers);
    } catch (error) {
      console.log(error);
    }
  }, [gigId]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await request.post("reviews", {
        gigId: gigId,
        desc: reviewContent,
        rating: rating,
      });

      fetchReviews();
      setReviewContent("");
      setRating(0);
    } catch (error) {
      console.log(error);
    }
  };

  const reviewsList = reviews?.map((review, i) => {
    const user = reviewUser ? reviewUser[i] : null;

    return (
      <div key={review?.gigId}>
        <div className="border-t border-black py-8 flex gap-4">
          <img
            src={user?.img}
            alt="profile picture"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col gap-2">
            <span className="font-bold">
              {user?.username} | {user?.country}
            </span>
            <div className="flex items-center gap-2">
              <AiFillStar />
              <span>{review?.rating}</span>
            </div>
            <p>{review?.desc}</p>
            <div className="flex items-center gap-4 mt-6 font-bold">
              <span>Helpful?</span>
              <div className="flex items-center gap-1 cursor-pointer">
                <FaRegThumbsUp />
                Yes
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <FaRegThumbsDown />
                No
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>
        <form className="flex flex-col gap-3" onSubmit={handleReviewSubmit}>
          <label htmlFor="review" className="font-bold">
            Add a review
          </label>
          <select
            name="rating"
            className="p-2 bg-white border border-black"
            onChange={(e) => setRating(e.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <textarea
            type="text"
            name="review"
            className="border border-black outline-none px-3 py-4"
            rows="4"
            onChange={(e) => setReviewContent(e.target.value)}
          />

          <button className="bg-black p-3 text-white rounded-lg">Submit</button>
        </form>
      </div>
      <div className="mt-10">{reviewsList}</div>
    </div>
  );
};

export default Reviews;
