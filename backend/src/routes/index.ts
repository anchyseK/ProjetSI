import { Router } from "express";
import BookRouter from "./book";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.use("/book", BookRouter);

export default router;
