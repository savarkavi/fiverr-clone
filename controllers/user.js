import User from "../models/User.js";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return next(createError(404, "User does not exist"));
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (req.userId !== user._id.toString()) {
      return next(
        createError(403, "You are not allowed to delete this account")
      );
    }

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("You have successfully deleted your account.");
  } catch (error) {
    next();
  }
};
