import BestPart from "../components/BestPart";
import Business from "../components/Business";
import Featured from "../components/Featured";
import Services from "../components/Services";
import TrustedBy from "../components/TrustedBy";
import Work from "../components/Work";

const Home = () => {
  return (
    <div className="">
      <div className="bg-green-800 ">
        <Featured />
      </div>
      <TrustedBy />
      <div className="p-6 ">
        <Services />
      </div>
      <BestPart />
      <Business />
      <Work />
    </div>
  );
};

export default Home;
