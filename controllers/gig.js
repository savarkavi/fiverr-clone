import Gig from "../models/Gig.js";
import createError from "../utils/createError.js";

export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.category && { category: q.category }),
    ...(q.userId && { userId: q.userId }),
    ...((q.min || q.max) && {
      price: { ...(q.min && { $gt: q.min }), ...(q.max && { $lt: q.max }) },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };

  try {
    const gigs = await Gig.find(filters);
    res.status(200).json(gigs);
  } catch (error) {
    next(error);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (!gig) return next(createError(404, "No gig found"));

    res.status(200).json(gig);
  } catch (error) {
    next(error);
  }
};

export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only sellers can create a gig"));

  const newGig = new Gig({
    ...req.body,
    userId: req.userId,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (error) {
    next(error);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (gig.userId !== req.userId)
      return next(createError(403, "You can delete only your id"));

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).json("Gig successfully deleted");
  } catch (error) {
    next(error);
  }
};
