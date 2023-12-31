import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    const res = await axios.post(
      "http://api.cloudinary.com/v1_1/dcsv0xhjz/image/upload",
      data
    );

    const { url } = res.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};

export default upload;
