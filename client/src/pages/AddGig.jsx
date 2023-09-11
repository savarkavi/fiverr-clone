import { useReducer, useState } from "react";
import { gigReducer, INITIAL_STATE } from "../reducers/gigReducer";
import upload from "../utils/upload";
import request from "../utils/request";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddGig = () => {
  const navigate = useNavigate();
  const [coverImage, setCoverImage] = useState("");
  const [gigImages, setGigImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeatures = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });

    console.log(state.features);
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const coverUrl = await upload(coverImage);

      const imagesUrl = await Promise.all(
        [...gigImages].map(async (image) => {
          const images = await upload(image);
          return images;
        })
      );

      setUploading(false);

      dispatch({
        type: "ADD_IMAGES",
        payload: { cover: coverUrl, images: imagesUrl },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const resetState = () => {
    dispatch({ type: "RESET" });
  };

  const handleSubmitGig = async () => {
    try {
      await request.post("gigs", { ...state });
      toast.success("Gig successfully created");
      navigate(`/gigs?category=${state.category}`);

      resetState();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(state);

  return (
    <div className="max-w-[1440px] mx-auto mt-14">
      <h2 className="text-3xl mb-10">Add New Gig</h2>
      <>
        <div className="">
          <div className="flex gap-24">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-4">
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  placeholder="e.g. I will make you a Website"
                  className="outline-none border border-black p-2"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  className="outline-none border border-black p-2"
                  onChange={handleChange}
                  defaultValue="Programming/Tech"
                >
                  <option value="Graphics/Design">Graphics & Design</option>
                  <option value="Programming/Tech">Programming & Tech</option>
                  <option value="DigitalMarketing">Digital Marketing</option>
                  <option value="Video/Animation">Video & Animation</option>
                  <option value="Writing/Translation">
                    Writing & Translation
                  </option>
                  <option value="Music/Audio">Music & Audio</option>
                  <option value="Business">Business</option>
                  <option value="Data">Data</option>
                  <option value="Photography">Photography</option>
                  <option value="AI-Services">AI Services</option>
                </select>
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="cover">Cover Image</label>
                <input
                  name="cover"
                  type="file"
                  className="outline-none border border-black p-2"
                  onChange={(e) => setCoverImage(e.target.files[0])}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="images">Upload Images</label>
                <input
                  name="upload"
                  type="file"
                  multiple
                  className="outline-none border border-black p-2"
                  onChange={(e) => setGigImages(e.target.files)}
                />
              </div>
              <button
                className="bg-black px-4 py-2 w-24 text-white rounded-lg"
                onClick={handleUpload}
              >
                {uploading ? "Uploading" : "Upload"}
              </button>
              <div className="flex flex-col gap-4">
                <label htmlFor="desc">Description</label>
                <textarea
                  name="desc"
                  cols="30"
                  rows="16"
                  placeholder="Brief description to introduce your service to customers"
                  className="outline-none border border-black p-4"
                  onChange={handleChange}
                />
              </div>
              <button
                className="bg-black px-4 py-2 text-white rounded-lg"
                onClick={handleSubmitGig}
              >
                Create
              </button>
            </div>
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-4">
                <label htmlFor="shortTitle">Service Title</label>
                <input
                  name="shortTitle"
                  type="text"
                  placeholder="e.g. One-page Web Design"
                  className="outline-none border border-black p-2"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="shortDesc">Service Description</label>
                <textarea
                  name="shortDesc"
                  cols="30"
                  rows="11"
                  placeholder="Brief description to introduce your service to customers"
                  className="outline-none border border-black p-4"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="delivery">Delivery Time</label>
                <input
                  name="delivery"
                  type="number"
                  className="outline-none border border-black p-2"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="revision">Revision Time</label>
                <input
                  name="revision"
                  type="number"
                  className="outline-none border border-black p-2"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="features">Features</label>
                <form
                  className="flex justify-between gap-4 w-full"
                  onSubmit={handleFeatures}
                >
                  <input
                    name="features"
                    type="text"
                    placeholder="e.g. page design"
                    className="outline-none border border-black p-2 w-full"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white px-3 py-2 w-24"
                  >
                    Add
                  </button>
                </form>
                <div className="flex gap-2 flex-wrap">
                  {state?.features?.map((feature, i) => {
                    return (
                      <button
                        key={i}
                        className="border border-black px-3 py-2 max-w-[200px]"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FEATURE",
                            payload: feature,
                          });
                        }}
                      >
                        {feature}
                        <span className="text-red-500"> X</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="price">Price</label>
                <input
                  name="price"
                  type="text"
                  placeholder="price"
                  className="outline-none border border-black p-2"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddGig;
