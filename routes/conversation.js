import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("it works baby");
});

export default router;
