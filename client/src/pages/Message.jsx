import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="max-w-[1280px] mx-auto mt-8">
      <div>
        <Link to="/messages" className="text-blue-600">
          MESSAGES
        </Link>
        <Link>{`>John`}</Link>
      </div>
      <div className="mt-8 flex flex-col gap-12 overflow-y-auto h-[500px] p-4">
        <div className="flex gap-4 ">
          <img
            src="/gigImgPP.jpeg"
            alt="pp"
            className="rounded-full w-12 h-12"
          />
          <p className="max-w-[600px] bg-stone-200 px-6 py-8 rounded-r-3xl rounded-bl-3xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga alias
            dolore iste inventore. Exercitationem sed nostrum necessitatibus
            doloremque eos hic earum velit officiis natus error nihil dicta
            recusandae, consequatur corrupti. Suscipit dolorum placeat
            praesentium iure, natus qui doloribus molestiae laudantium odit
            atque impedit.
          </p>
        </div>
        <div className="flex gap-4 flex-row-reverse ">
          <img
            src="/gigImgPP.jpeg"
            alt="pp"
            className="rounded-full w-12 h-12"
          />
          <p className="max-w-[600px] bg-blue-500 px-6 py-8 rounded-l-3xl rounded-br-3xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga alias
            dolore iste inventore. Exercitationem sed nostrum necessitatibus
            doloremque eos hic earum velit officiis natus error nihil dicta
            recusandae, consequatur corrupti. Suscipit dolorum placeat
            praesentium iure, natus qui doloribus molestiae laudantium odit
            atque impedit.
          </p>
        </div>
        <div className="flex gap-4 ">
          <img
            src="/gigImgPP.jpeg"
            alt="pp"
            className="rounded-full w-12 h-12"
          />
          <p className="max-w-[600px] bg-stone-200 px-6 py-8 rounded-r-3xl rounded-bl-3xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga alias
            dolore iste inventore. Exercitationem sed nostrum necessitatibus
            doloremque eos hic earum velit officiis natus error nihil dicta
            recusandae, consequatur corrupti. Suscipit dolorum placeat
            praesentium iure, natus qui doloribus molestiae laudantium odit
            atque impedit.
          </p>
        </div>
        <div className="flex gap-4 flex-row-reverse ">
          <img
            src="/gigImgPP.jpeg"
            alt="pp"
            className="rounded-full w-12 h-12"
          />
          <p className="max-w-[600px] bg-blue-500 px-6 py-8 rounded-l-3xl rounded-br-3xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga alias
            dolore iste inventore. Exercitationem sed nostrum necessitatibus
            doloremque eos hic earum velit officiis natus error nihil dicta
            recusandae, consequatur corrupti. Suscipit dolorum placeat
            praesentium iure, natus qui doloribus molestiae laudantium odit
            atque impedit.
          </p>
        </div>
        <div className="flex gap-4 ">
          <img
            src="/gigImgPP.jpeg"
            alt="pp"
            className="rounded-full w-12 h-12"
          />
          <p className="max-w-[600px] bg-stone-200 px-6 py-8 rounded-r-3xl rounded-bl-3xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga alias
            dolore iste inventore. Exercitationem sed nostrum necessitatibus
            doloremque eos hic earum velit officiis natus error nihil dicta
            recusandae, consequatur corrupti. Suscipit dolorum placeat
            praesentium iure, natus qui doloribus molestiae laudantium odit
            atque impedit.
          </p>
        </div>
        <div className="flex gap-4 flex-row-reverse ">
          <img
            src="/gigImgPP.jpeg"
            alt="pp"
            className="rounded-full w-12 h-12"
          />
          <p className="max-w-[600px] bg-blue-500 px-6 py-8 rounded-l-3xl rounded-br-3xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga alias
            dolore iste inventore. Exercitationem sed nostrum necessitatibus
            doloremque eos hic earum velit officiis natus error nihil dicta
            recusandae, consequatur corrupti. Suscipit dolorum placeat
            praesentium iure, natus qui doloribus molestiae laudantium odit
            atque impedit.
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-between">
        <textarea
          placeholder="Write a message"
          cols="30"
          rows="5"
          className="w-[1000px] outline-none border border-black mt-12 p-4"
        ></textarea>
        <button className="bg-black px-4 py-2 text-white rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default Message;
