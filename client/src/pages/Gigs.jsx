import { useState, useEffect } from "react";
import GigCard from "../components/GigCard";
import { AiOutlineHome, AiFillPlayCircle } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import request from "../utils/request";
import { Link, useLocation } from "react-router-dom";

const Gigs = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortingMethod, setSortingMethod] = useState("sales");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [data, setData] = useState(null);
  const { search } = useLocation();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get(
          `gigs${search}&min=${min}&max=${max}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [search, min, max]);

  const handleSortToggle = () => {
    setIsSortOpen((prevState) => !prevState);
  };

  const handleSortingMethod = (type) => {
    setSortingMethod(type);
  };

  const gigCards = data?.map((gig, i) => <GigCard gig={gig} key={i} />);

  return (
    <div className="mt-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-4 mb-12">
        <div className="flex gap-2 items-center text-lg">
          <AiOutlineHome className="cursor-pointer" />
          <span className="cursor-pointer text-xl font-bold">
            / {search.replace("?category=", "").replace("/", " & ")}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <p>
            Explore the boundaries of{" "}
            {search.replace("?category=", "").replace("/", " & ")} with Fiverr |
          </p>
          <div className="flex items-center gap-2 text-xl cursor-pointer">
            <AiFillPlayCircle />
            <span>How Fiverr Works?</span>
          </div>
        </div>
        <div className="mt-[50px] flex justify-between w-full">
          <div className="flex items-center gap-4 ">
            <span className="text-xl font-bold">Budget</span>
            <input
              type="number"
              placeholder="min"
              className="border px-2 py-1 w-[100px] outline-none"
              onChange={(e) => setMin(e.target.value)}
            />
            <input
              type="number"
              placeholder="max"
              className="border px-2 py-1 w-[100px] outline-none"
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center relative w-[400px] justify-end">
            <span>Sort By:</span>
            <div
              className="cursor-pointer flex gap-2 items-center"
              onClick={handleSortToggle}
            >
              <span className="font-bold">
                {sortingMethod === "sales" ? "Best Selling" : "Newest Arrivals"}
              </span>
              {isSortOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isSortOpen && (
              <div className="bg-white py-8 transition-all  w-[250px] flex flex-col gap-4 absolute top-12 shadow-lg border rounded-lg">
                <span
                  className=" cursor-pointer px-10 py-2 hover:bg-gray-100"
                  onClick={() => handleSortingMethod("sales")}
                >
                  {sortingMethod === "sales"
                    ? "✓ Best Selling"
                    : "Best Selling"}
                </span>
                <span
                  className=" cursor-pointer px-10 py-2 hover:bg-gray-100"
                  onClick={() => handleSortingMethod("createdAt")}
                >
                  {sortingMethod === "createdAt"
                    ? "✓ Newest Arrivals"
                    : "Newest Arrivals"}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      {
        <div className="max-w-[1440px] mx-auto flex gap-8 flex-wrap">
          {data?.length === 0 ? (
            <div className="mt-6">
              <span className="text-lg flex flex-col">
                There are currently no gigs in this category :({" "}
                {currentUser?.userInfo?.isSeller ? (
                  <Link to="/addgig" className="text-blue-700">
                    Create one
                  </Link>
                ) : (
                  ""
                )}
              </span>
            </div>
          ) : (
            gigCards
          )}
        </div>
      }
    </div>
  );
};

export default Gigs;
