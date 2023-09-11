import { AiOutlineCheckCircle } from "react-icons/ai";

const BestPart = () => {
  return (
    <div className="mt-14 w-full bg-green-50 p-16 flex justify-center items-center">
      <div className="max-w-[1440px] mx-auto w-full flex justify-between items-center">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-bold">The best part? Everything.</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <AiOutlineCheckCircle className="text-xl text-green-500" />
              <h3 className="text-xl font-bold">Stick to your budget</h3>
            </div>
            <p className="max-w-[500px] text-gray-500 text-xl">
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <AiOutlineCheckCircle className="text-xl text-green-500" />
              <h3 className="text-xl font-bold">
                Get quality work done quickly
              </h3>
            </div>
            <p className="max-w-[500px] text-gray-500 text-xl">
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <AiOutlineCheckCircle className="text-xl text-green-500" />
              <h3 className="text-xl font-bold">Pay when you&apos;re happy</h3>
            </div>
            <p className="max-w-[500px] text-gray-500 text-xl">
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <AiOutlineCheckCircle className="text-xl text-green-500" />
              <h3 className="text-xl font-bold">Count on 24/7 support</h3>
            </div>
            <p className="max-w-[500px] text-gray-500 text-xl">
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
        </div>
        <div>
          <video
            src="/fiverr.mp4"
            controls
            className="w-[800px] border border-black"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default BestPart;
