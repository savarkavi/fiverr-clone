const currentUser = {
  firstName: "John",
  isSeller: true,
};

const Messages = () => {
  return (
    <div className="mt-[50px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Messages</h2>
        </div>
        <table className="w-full">
          <tr className="h-12">
            <th className="text-left pr-16">
              {currentUser?.isSeller ? "Buyer" : "Seller"}
            </th>
            <th className="text-left">Last message</th>
            <th className="text-left">Date</th>
            <th className="text-left">Action</th>
          </tr>
          <tr className="h-16">
            <td>John</td>
            <td>
              <p className="max-w-[700px] truncate ...">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                saepe, dolorem ea odio neque dolor deleniti, beatae repellendus
                dignissimos repellat sunt doloremque voluptatibus.
              </p>
            </td>
            <td>1 hour ago</td>
            <td className="">
              <img src="/message.png" alt="message" className="w-6" />
            </td>
          </tr>
          <tr className="h-16">
            <td>John</td>
            <td>
              <p className="max-w-[700px] truncate ...">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                saepe, dolorem ea odio neque dolor deleniti, beatae repellendus
                dignissimos repellat sunt doloremque voluptatibus.
              </p>
            </td>
            <td>1 hour ago</td>
            <td className="">
              <img src="/message.png" alt="message" className="w-6" />
            </td>
          </tr>
          <tr className="h-16">
            <td>John</td>
            <td>
              <p className="max-w-[700px] truncate ...">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                saepe, dolorem ea odio neque dolor deleniti, beatae repellendus
                dignissimos repellat sunt doloremque voluptatibus.
              </p>
            </td>
            <td>1 hour ago</td>
            <td className="">
              <img src="/message.png" alt="message" className="w-6" />
            </td>
          </tr>
          <tr className="h-16">
            <td>John</td>
            <td>
              <p className="max-w-[700px] truncate ...">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                saepe, dolorem ea odio neque dolor deleniti, beatae repellendus
                dignissimos repellat sunt doloremque voluptatibus.
              </p>
            </td>
            <td>1 hour ago</td>
            <td className="">
              <img src="/message.png" alt="message" className="w-6" />
            </td>
          </tr>
          <tr className="h-16">
            <td>John</td>
            <td>
              <p className="max-w-[700px] truncate ...">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                saepe, dolorem ea odio neque dolor deleniti, beatae repellendus
                dignissimos repellat sunt doloremque voluptatibus.
              </p>
            </td>
            <td>1 hour ago</td>
            <td className="">
              <img src="/message.png" alt="message" className="w-6" />
            </td>
          </tr>
          <tr className="h-16">
            <td>John</td>
            <td>
              <p className="max-w-[700px] truncate ...">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                saepe, dolorem ea odio neque dolor deleniti, beatae repellendus
                dignissimos repellat sunt doloremque voluptatibus.
              </p>
            </td>
            <td>1 hour ago</td>
            <td className="">
              <img src="/message.png" alt="message" className="w-6" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
