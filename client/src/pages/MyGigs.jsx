import { Link } from "react-router-dom";

const MyGigs = () => {
  return (
    <div className="mt-[50px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Gigs</h2>
          <Link to="/addgig" className="bg-black px-3 py-2 text-white">
            Add New Gig
          </Link>
        </div>
        <table className="w-full">
          <tr className="h-12">
            <th className="text-left">Image</th>
            <th className="text-left">Title</th>
            <th className="text-left">Price</th>
            <th className="text-left">Sales</th>
            <th className="text-left">Action</th>
          </tr>
          <tr className="h-16">
            <td>
              <img
                src="/hotel-card-img.webp"
                alt="gig image"
                className="w-12 object-cover"
              />
            </td>
            <td>Gig 1</td>
            <td>69</td>
            <td>110</td>
            <td className="">
              <img src="/delete.png" alt="delete" className="w-6" />
            </td>
          </tr>
          <tr className="h-16">
            <td>
              <img
                src="/hotel-card-img.webp"
                alt="gig image"
                className="w-12"
              />
            </td>
            <td>Gig 1</td>
            <td>69</td>
            <td>110</td>
            <td className="">
              <img src="/delete.png" alt="delete" className="w-6" />
            </td>
          </tr>
          <tr className="h-16">
            <td>
              <img
                src="/hotel-card-img.webp"
                alt="gig image"
                className="w-12"
              />
            </td>
            <td>Gig 1</td>
            <td>69</td>
            <td>110</td>
            <td className="">
              <img src="/delete.png" alt="delete" className="w-6" />
            </td>
          </tr>
          <tr className="h-16">
            <td>
              <img
                src="/hotel-card-img.webp"
                alt="gig image"
                className="w-12"
              />
            </td>
            <td>Gig 1</td>
            <td>69</td>
            <td>110</td>
            <td className="">
              <img src="/delete.png" alt="delete" className="w-6" />
            </td>
          </tr>
          <tr className="h-16">
            <td>
              <img
                src="/hotel-card-img.webp"
                alt="gig image"
                className="w-12"
              />
            </td>
            <td>Gig 1</td>
            <td>69</td>
            <td>110</td>
            <td className="">
              <img src="/delete.png" alt="delete" className="w-6" />
            </td>
          </tr>
          <tr className="h-16">
            <td>
              <img
                src="/hotel-card-img.webp"
                alt="gig image"
                className="w-12"
              />
            </td>
            <td>Gig 1</td>
            <td>69</td>
            <td>110</td>
            <td className="">
              <img src="/delete.png" alt="delete" className="w-6" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
