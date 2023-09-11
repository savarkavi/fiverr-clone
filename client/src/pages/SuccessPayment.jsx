import { useNavigate, useLocation } from "react-router-dom";
import request from "../utils/request";
import { useEffect } from "react";

const SuccessPayment = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await request.patch("orders", { payment_intent });
        setTimeout(() => {
          navigate("/orders");
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    };

    makeRequest();
  }, []);

  return (
    <div className="flex justify-center items-center mt-10">
      Payment Succesful. Do not close the page while you are being redirected to
      Orders details.
    </div>
  );
};

export default SuccessPayment;
