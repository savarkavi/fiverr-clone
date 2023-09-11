import { useEffect, useState } from "react";
import request from "../utils/request.js";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [orders, setOrders] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    try {
      const fetchOrders = async () => {
        const orderDetails = await request.get("orders");
        setOrders(orderDetails.data);

        if (currentUser?.userInfo?.isSeller) {
          const buyerIds = orderDetails.data.map((order) => order.buyerId);
          const buyers = await Promise.all(
            buyerIds.map(async (id) => {
              const buyer = await request.get(`users/${id}`);
              return buyer.data.username;
            })
          );
          setName(buyers);
        } else {
          const sellerIds = orderDetails.data.map((order) => order.sellerId);
          const sellers = await Promise.all(
            sellerIds.map(async (id) => {
              const seller = await request.get(`users/${id}`);
              return seller.data.username;
            })
          );
          setName(sellers);
        }
      };
      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="mt-[50px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Orders</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="h-12">
              <th className="text-left">Image</th>
              <th className="text-left">Title</th>
              <th className="text-left">Price</th>
              <th className="text-left">
                {currentUser?.userInfo?.isSeller ? "Buyer" : "Seller"}
              </th>
              <th className="text-left">Contact</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => {
              return (
                <tr key={order._id} className="h-16">
                  <td>
                    <img
                      src={order.img}
                      alt="gig image"
                      className="w-12 object-cover"
                    />
                  </td>
                  <td>{order.title}</td>
                  <td>₹{order.price}</td>
                  <td>{name && name[i]}</td>
                  <td className="">
                    <img src="/message.png" alt="message" className="w-6" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
