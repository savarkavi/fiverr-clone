import Order from "../models/Order.js";
import Gig from "../models/Gig.js";
import Stripe from "stripe";

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET);

  const gig = await Gig.findById(req.params.gigId);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig?.price * 100,
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const newOrder = new Order({
    gigId: gig._id,
    img: gig.cover,
    title: gig.title,
    price: gig.price,
    sellerId: gig.userId,
    buyerId: req.userId,
    payment_intent: paymentIntent.id,
  });

  await newOrder.save();
  res.status(201).json({ clientSecret: paymentIntent.client_secret });
};

export const confirm = async (req, res, next) => {
  try {
    const order = await Order.findOneAndUpdate(
      { payment_intent: req.body.payment_intent },
      { $set: { isCompleted: true } }
    );

    res.status(200).json("Order has been confirmed");
  } catch (error) {
    next(error);
  }
};
