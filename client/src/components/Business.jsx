import { AiOutlineCheckCircle } from "react-icons/ai";

const Business = () => {
  return (
    <div className="mt-14 w-full bg-[#0d084d] p-16 flex justify-center items-center text-white">
      <div className="max-w-[1440px] mx-auto w-full flex justify-between items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold max-w-[500px] leading-snug">
            Advanced solutions and professional talent for businesses
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <AiOutlineCheckCircle className="text-xl text-purple-500" />
              <h3 className="text-xl font-bold">Fiverr Pro</h3>
            </div>
            <p className="max-w-[500px]  text-lg">
              Access top freelancers and professional business tools for any
              project
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <AiOutlineCheckCircle className="text-xl text-purple-500" />
              <h3 className="text-xl font-bold">Fiverr Certified</h3>
            </div>
            <p className="max-w-[500px]  text-lg">
              Build your own branded marketplace of certified experts
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <AiOutlineCheckCircle className="text-xl text-purple-500" />
              <h3 className="text-xl font-bold">Fiverr Enterprise</h3>
            </div>
            <p className="max-w-[500px]  text-lg">
              Manage your freelance workforce and onboard additional talent with
              an end-to-end SaaS solution
            </p>
          </div>
        </div>
        <div>
          <img
            src="/business.webp"
            alt="business photo"
            className="w-[700px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Business;
